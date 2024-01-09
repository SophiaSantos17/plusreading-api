import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    user: {type: String, required: true, unique: true},
    creatdAt: {type: Date, default: Date.now()}
});

export default model("users", UserSchema);