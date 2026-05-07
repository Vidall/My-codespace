export class ProductName {
    private constructor ( private readonly _value: string) {}

    static create(value: string): ProductName {
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
        
        return new ProductName(normalized)
    }

    get value(): string {
        return this._value;
    }
}