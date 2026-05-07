export class Quantity {
    private constructor (private readonly _value: number) {}

    static create(quantity: number) {
        if (!Number.isInteger(quantity)) {
            throw new Error('Quantity must be an integer.')
        }

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.')
        }

        return new Quantity(quantity);
    }

    get value(): number {
        return this._value;
    }
}