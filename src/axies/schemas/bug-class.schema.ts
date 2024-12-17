import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Axie } from './axie.schema';

@Schema({ timestamps: true, collection: 'bug_class' })
export class BugClass extends Axie {}

export const BugSchema = SchemaFactory.createForClass(BugClass);
