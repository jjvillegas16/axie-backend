import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'plant_class' })
export class PlantClass extends Axie {}

export const PlantSchema = SchemaFactory.createForClass(PlantClass);
