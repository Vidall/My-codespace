export class Sku {
    private constructor(private readonly _value: string) {}

    static create(value: string): Sku {
        const normalized = value?.trim().toUpperCase()

        if (!normalized) throw new Error('SKU is required')

        if (!/^[A-Z0-9-]{3,30}$/.test(normalized)) {
            throw new Error('SKU must contain only letters, numbers and hyphen, with 3 to 30 characters');
        }

        return new Sku(normalized)

    }

    get value(): string {
        return this._value;
    }
}