import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema({timestamps:true, strict: false})
export class User{

    @Prop({required: true})
    first_name: string;

    @Prop()
    last_name: string;

    @Prop({unique:true, required: true})
    email: string;

}

export const UserSchema= SchemaFactory.createForClass(User)