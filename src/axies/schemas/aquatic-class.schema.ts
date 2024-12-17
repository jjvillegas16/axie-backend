import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'aquatic_class' })
export class AquaticClass extends Axie {}

export const AquaticSchema = SchemaFactory.createForClass(AquaticClass);
