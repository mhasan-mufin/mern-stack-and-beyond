import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DemoDocument = HydratedDocument<Demo>;

@Schema()
export class Demo {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop({ required: true })
  email: string;
}

export const DemoSchema = SchemaFactory.createForClass(Demo);