import { Product } from "../entitities/Product";

export interface ProductRepository {
    findBySku(sku: string): Promise<Product | null>;
    save(product: Product): Promise<void>;
}