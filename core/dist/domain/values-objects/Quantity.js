"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quantity = void 0;
class Quantity {
    _value;
    constructor(_value) {
        this._value = _value;
    }
    static create(quantity) {
        if (!Number.isInteger(quantity)) {
            throw new Error('Quantity must be an integer.');
        }
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        return new Quantity(quantity);
    }
    get value() {
        return this._value;
    }
}
exports.Quantity = Quantity;
//# sourceMappingURL=Quantity.js.map