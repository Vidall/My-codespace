"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductCategory = void 0;
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["BIKE"] = "BIKE";
    ProductCategory["PART"] = "PART";
    ProductCategory["ACCESSORY"] = "ACCESSORY";
    ProductCategory["SERVICE"] = "SERVICE";
})(ProductCategory || (exports.ProductCategory = ProductCategory = {}));
class Product {
    id;
    name;
    sku;
    price;
    stock;
    category;
    createdAt;
    constructor(id, name, sku, price, stock, category, createdAt = new Date()) {
        this.id = id;
        this.name = name;
        this.sku = sku;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.createdAt = createdAt;
        if (!id?.trim())
            throw new Error('Product id is required');
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map