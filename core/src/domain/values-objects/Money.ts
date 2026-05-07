export class Money {
    private constructor(private readonly _value: number) {}

    static create(valueInCents: number): Money {
        if (!Number.isInteger(valueInCents)) {
            throw new Error('Price must be an integer in cents')
        }

        if (valueInCents <= 0) {
            throw new Error('Price must be grater than zero')
        }

        return new Money(valueInCents);
    }

    get value(): number {
        return this._value;
    }
}