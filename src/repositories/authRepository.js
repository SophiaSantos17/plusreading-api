
import jwt from "jsonwebtoken";
import UserSchema from "../schemas/User.js";


async function create(data){
    return await UserSchema.create(data);
}

async function findByEmail(email){
    const user = await UserSchema.findOne({email});
    return user;
}

async function generateToken(id){
    return jwt.sign({id}, process.env.SECRET, {expiresIn: 86400})
}


async function findById(id){
    return await UserSchema.findById(id);
}
export default {create, findByEmail, generateToken, findById};