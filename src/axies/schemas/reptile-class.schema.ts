import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'reptile_class' })
export class ReptileClass extends Axie {}

export const ReptileSchema = SchemaFactory.createForClass(ReptileClass);
