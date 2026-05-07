import { Injectable } from '@nestjs/common';
import { PrismaProductRepository } from './prisma-product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductUseCase } from '@myorg/core';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: PrismaProductRepository) {}

    async create(dto: CreateProductDto) {
        const useCase = new CreateProductUseCase(this.productRepository);

        const product = await useCase.execute({
        name: dto.name,
        sku: dto.sku,
        priceInCents: dto.priceInCents,
        stock: dto.stock,
        category: dto.category,
        });

        return {
            id: product.id,
            name: product.name.value,
            sku: product.sku.value,
            priceInCents: product.price.value,
            stock: product.stock.value,
            category: product.category,
            createdAt: product.createdAt,
        };
        
    }
}
