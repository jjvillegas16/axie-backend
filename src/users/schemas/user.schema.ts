import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true, collection: 'user' })
export class User {
  _id: Types.ObjectId;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.method('toJSON', function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...rest } = this.toObject();
  return { ...rest };
});
