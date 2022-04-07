import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async create(product: CreateProductDto): Promise<Product> {
        const newProduct = new this.productModel(product);
        return await newProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find().sort({createdAt: -1}).exec();
    }

    async findById(id: string): Promise<Product[]> {
        try {
            return await this.productModel.find({ "_id": id }).exec();
        } catch (error) {
            return error
        }
    }

    async deleteById(id: string){
        try {
            return await this.productModel.deleteOne({ "_id": id }).exec();
        } catch (error) {
            return error
        }
    }

    async updateById(id: string, product: CreateProductDto){
        try {
            return await this.productModel.updateOne({ "_id": id }, product).exec();
        } catch (error) {
            return error
        }
    }

}
