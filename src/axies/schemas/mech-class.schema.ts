import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'mech_class' })
export class MechClass extends Axie {}

export const MechSchema = SchemaFactory.createForClass(MechClass);
