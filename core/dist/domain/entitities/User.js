"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.validate();
    }
    validate() {
        if (!this.name || this.name.trim().length === 0) {
            throw new Error('Name is required');
        }
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map