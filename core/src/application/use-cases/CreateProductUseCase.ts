import { Product, ProductCategory } from "../../domain/entitities/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { Money } from "../../domain/values-objects/Money";
import { ProductName } from "../../domain/values-objects/ProductName";
import { Quantity } from "../../domain/values-objects/Quantity";
import { Sku } from "../../domain/values-objects/Sku";
import { randomUUID } from 'crypto';

export interface CreateProductInput {
    name: string,
    sku: string,
    priceInCents: number,
    stock: number,
    category: ProductCategory
}

export class CreateProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {}

    async execute(input: CreateProductInput): Promise<Product> {
        const sku = Sku.create(input.sku);

        const existingProduct = await this.productRepository.findBySku(sku.value);
        if (existingProduct) throw new Error('A product with this SKU already exists');

        const product = new Product(
            randomUUID(),
            ProductName.create(input.name),
            sku,
            Money.create(input.priceInCents),
            Quantity.create(input.stock),
            input.category

        )

        await this.productRepository.save(product);

        return product;
    }
}