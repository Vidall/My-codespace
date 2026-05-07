import { Money, Product, ProductCategory, ProductName, ProductRepository, Quantity, Sku } from "@myorg/core";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PrismaProductRepository implements ProductRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findBySku(sku: string): Promise<Product | null> {
        const row = await this.prisma.product.findUnique({
            where: {sku},
        })

        if (!row) return null

        return new Product(
            row.id,
            ProductName.create(row.name),
            Sku.create(row.sku),
            Money.create(row.priceInCents),
            Quantity.create(row.stock),
            row.category as ProductCategory,
            row.createdAt
        )
    }

    async save(product: Product): Promise<void> {
        await this.prisma.product.create({
            data: {
                id: product.id,
                name: product.name.value,
                sku: product.sku.value,
                priceInCents: product.price.value,
                stock: product.stock.value,
                category: product.category,
                createdAt: product.createdAt
            }
        })
    }

}