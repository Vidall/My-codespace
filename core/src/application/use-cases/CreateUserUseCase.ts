import { User } from '../../domain/entitities';
import { Email } from '../../domain/values-objects';

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string) {
    // 1. Criar value object (validação)
    const emailVO = Email.create(email);

    // 2. Regra de negócio: não pode ter email duplicado
    const existingUser = await this.userRepository.findByEmail(
      emailVO.getValue()
    );

    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    // 3. Criar entidade
    const user = new User(name, emailVO);

    // 4. Persistir
    await this.userRepository.save(user);

    return user;
  }
}