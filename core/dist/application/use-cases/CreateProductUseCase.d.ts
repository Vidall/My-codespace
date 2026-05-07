import { Product, ProductCategory } from "../../domain/entitities/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
export interface CreateProductInput {
    name: string;
    sku: string;
    priceInCents: number;
    stock: number;
    category: ProductCategory;
}
export declare class CreateProductUseCase {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    execute(input: CreateProductInput): Promise<Product>;
}
//# sourceMappingURL=CreateProductUseCase.d.ts.map