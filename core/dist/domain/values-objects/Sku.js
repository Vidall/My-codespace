"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sku = void 0;
class Sku {
    _value;
    constructor(_value) {
        this._value = _value;
    }
    static create(value) {
        const normalized = value?.trim().toUpperCase();
        if (!normalized)
            throw new Error('SKU is required');
        if (!/^[A-Z0-9-]{3,30}$/.test(normalized)) {
            throw new Error('SKU must contain only letters, numbers and hyphen, with 3 to 30 characters');
        }
        return new Sku(normalized);
    }
    get value() {
        return this._value;
    }
}
exports.Sku = Sku;
//# sourceMappingURL=Sku.js.map