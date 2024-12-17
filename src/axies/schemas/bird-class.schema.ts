import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'bird_class' })
export class BirdClass extends Axie {}

export const BirdSchema = SchemaFactory.createForClass(BirdClass);
