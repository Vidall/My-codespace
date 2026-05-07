import { User } from '../../domain/entitities';
export interface UserRepository {
    findByEmail(email: string): Promise<User | null>;
    save(user: User): Promise<void>;
}
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(name: string, email: string): Promise<User>;
}
//# sourceMappingURL=CreateUserUseCase.d.ts.map