"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const entitities_1 = require("../../domain/entitities");
const values_objects_1 = require("../../domain/values-objects");
class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(name, email) {
        // 1. Criar value object (validação)
        const emailVO = values_objects_1.Email.create(email);
        // 2. Regra de negócio: não pode ter email duplicado
        const existingUser = await this.userRepository.findByEmail(emailVO.getValue());
        if (existingUser) {
            throw new Error('User already exists with this email');
        }
        // 3. Criar entidade
        const user = new entitities_1.User(name, emailVO);
        // 4. Persistir
        await this.userRepository.save(user);
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map