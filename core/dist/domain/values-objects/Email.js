"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    value;
    constructor(value) {
        this.value = value;
    }
    static create(email) {
        if (!email || !email.includes('@')) {
            throw new Error('Invalid email');
        }
        return new Email(email);
    }
    getValue() {
        return this.value;
    }
}
exports.Email = Email;
//# sourceMappingURL=Email.js.map