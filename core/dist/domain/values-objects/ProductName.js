"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductName = void 0;
class ProductName {
    _value;
    constructor(_value) {
        this._value = _value;
    }
    static create(value) {
        const normalized = value?.trim();
        if (!normalized) {
            throw new Error('Product name is required');
        }
        if (normalized.length < 3) {
            throw new Error('Product name must have at least 3 characters');
        }
        if (normalized.length > 120) {
            throw new Error('Product name must have at most 120 characters');
        }
        return new ProductName(normalized);
    }
    get value() {
        return this._value;
    }
}
exports.ProductName = ProductName;
//# sourceMappingURL=ProductName.js.map