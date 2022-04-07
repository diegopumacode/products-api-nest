import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getAll() {
        return this.productService.findAll();
    }

    @Post()
    create(@Body() body: CreateProductDto) {
        return this.productService.create(body);
    }

    @Get(':id')
    getBuyId(@Param("id") id: string) {
        try {
            return this.productService.findById(id);
        } catch (error) {
            return error
        }
    }

    @Delete(':id')	
    deleteById(@Param("id") id: string) {
        try {
            return this.productService.deleteById(id);
        } catch (error) {
            return error
        }
    }

    @Put("/:id")
    updateById(@Param("id") id: string, @Body() body: CreateProductDto) {
        try {
            return this.productService.updateById(id, body);
        } catch (error) {
            return error
        }
    }

}
