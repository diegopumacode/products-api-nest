import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({timestamps: true})
export class Product {

    @Prop({required: true})
    name: string;
    
    @Prop({required: true})
    description: string;
    
    @Prop({required: true})
    price: number;
    
}

export const ProductSchema = SchemaFactory.createForClass(Product);