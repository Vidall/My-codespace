import { Money } from "../values-objects/Money";
import { ProductName } from "../values-objects/ProductName";
import { Quantity } from "../values-objects/Quantity";
import { Sku } from "../values-objects/Sku";

export enum ProductCategory {
    BIKE = 'BIKE',
    PART = 'PART',
    ACCESSORY = 'ACCESSORY',
    SERVICE = 'SERVICE'

}

export class Product {
    constructor (
        public readonly id: string,
        public readonly name: ProductName,
        public readonly sku: Sku,
        public readonly price: Money,
        public readonly stock: Quantity,
        public readonly category: ProductCategory,
        public readonly createdAt: Date = new Date()


    ) {
        if (!id?.trim()) throw new Error('Product id is required')
    }
}