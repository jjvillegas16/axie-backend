import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'beast_class' })
export class BeastClass extends Axie {}

export const BeastSchema = SchemaFactory.createForClass(BeastClass);
