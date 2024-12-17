import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'dusk_class' })
export class DuskClass extends Axie {}

export const DuskSchema = SchemaFactory.createForClass(DuskClass);
