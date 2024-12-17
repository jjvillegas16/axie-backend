import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'dawn_class' })
export class DawnClass extends Axie {}

export const DawnSchema = SchemaFactory.createForClass(DawnClass);
