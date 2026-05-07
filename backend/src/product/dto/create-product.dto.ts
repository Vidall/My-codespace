import { ProductCategory } from "@myorg/core";
import { IsEnum, IsInt, IsString, Matches, MaxLength, Min } from "class-validator";

export class CreateProductDto {
  @IsString()
  @MaxLength(120)
  name!: string;

  @IsString()
  @Matches(/^[A-Z0-9-]{3,30}$/)
  sku!: string;

  @IsInt()
  @Min(1)
  priceInCents!: number;

  @IsInt()
  @Min(0)
  stock!: number;

  @IsEnum(ProductCategory)
  category!: ProductCategory;
}