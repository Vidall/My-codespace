"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    _value;
    constructor(_value) {
        this._value = _value;
    }
    static create(valueInCents) {
        if (!Number.isInteger(valueInCents)) {
            throw new Error('Price must be an integer in cents');
        }
        if (valueInCents <= 0) {
            throw new Error('Price must be grater than zero');
        }
        return new Money(valueInCents);
    }
    get value() {
        return this._value;
    }
}
exports.Money = Money;
//# sourceMappingURL=Money.js.map