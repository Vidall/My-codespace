import { Money } from "../values-objects/Money";
import { ProductName } from "../values-objects/ProductName";
import { Quantity } from "../values-objects/Quantity";
import { Sku } from "../values-objects/Sku";
export declare enum ProductCategory {
    BIKE = "BIKE",
    PART = "PART",
    ACCESSORY = "ACCESSORY",
    SERVICE = "SERVICE"
}
export declare class Product {
    readonly id: string;
    readonly name: ProductName;
    readonly sku: Sku;
    readonly price: Money;
    readonly stock: Quantity;
    readonly category: ProductCategory;
    readonly createdAt: Date;
    constructor(id: string, name: ProductName, sku: Sku, price: Money, stock: Quantity, category: ProductCategory, createdAt?: Date);
}
//# sourceMappingURL=Product.d.ts.map