import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({
        type: String,
        description: "Product name",
    })
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        description: "Product description",
    })
    @IsString()
    description: string;


    @ApiProperty({
        type: Number,
        description: "Product price",
    })
    @IsNumber()
    price: number;
}