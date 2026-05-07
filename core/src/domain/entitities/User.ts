import { Email } from "../values-objects";

export class User {
    constructor(
        public readonly name: string,
        public readonly email: Email,
    ) {
        this.validate()
    }

    private validate() {
        if (!this.name  || this.name.trim().length === 0) {
            throw new Error('Name is required');
        }
    }
}