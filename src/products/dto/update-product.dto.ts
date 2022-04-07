import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductDto {
    @ApiProperty({
        type: String,
        description: "Product name",
    })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({
        type: String,
        description: "Product description",
    })
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty({
        type: Number,
        description: "Product price",
    })
    @IsNumber()
    @IsOptional()
    price: number;
}