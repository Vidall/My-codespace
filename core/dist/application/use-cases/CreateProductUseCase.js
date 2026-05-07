"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const Product_1 = require("../../domain/entitities/Product");
const Money_1 = require("../../domain/values-objects/Money");
const ProductName_1 = require("../../domain/values-objects/ProductName");
const Quantity_1 = require("../../domain/values-objects/Quantity");
const Sku_1 = require("../../domain/values-objects/Sku");
const crypto_1 = require("crypto");
class CreateProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(input) {
        const sku = Sku_1.Sku.create(input.sku);
        const existingProduct = await this.productRepository.findBySku(sku.value);
        if (existingProduct)
            throw new Error('A product with this SKU already exists');
        const product = new Product_1.Product((0, crypto_1.randomUUID)(), ProductName_1.ProductName.create(input.name), sku, Money_1.Money.create(input.priceInCents), Quantity_1.Quantity.create(input.stock), input.category);
        await this.productRepository.save(product);
        return product;
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=CreateProductUseCase.js.map