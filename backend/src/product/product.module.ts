import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductsController } from './product.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaProductRepository } from './prisma-product.repository';

@Module({
    providers: [
    PrismaService,
    PrismaProductRepository,
    ProductService,
  ],
  controllers: [ProductsController]
})
export class ProductModule {}
