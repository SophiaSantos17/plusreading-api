import "dotenv/config";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/authRepository.js";


export async function authMiddleware(req, res, next){
    const { authorization } = req.headers;
    if(!authorization) return res.status(401).send({message: "Invalid token"});

    const parts = authorization?.split(" ");
    if (parts.length !== 2)
        return res.status(401).send({message: "Invalid token"});

    const [schema, token] = parts;
    if(!/^Bearer$/i.test(schema))
        return res.status(401).send({message: "Invalid token"});

    jwt.verify(token, process.env.SECRET, async (err, decode) => {
        if(err) {
            console.error("Erro durante a verificação do token:", err);
            return res.status(401).send({ message: "Invalid token" });
        }
    
        if(!decode) {
            console.error("Decode é nulo");
            return res.status(401).send({ message: "Invalid token" });
        }
    
        const user = await authRepository.findById(decode.id);
        if(!user) {
            console.error("Usuário não encontrado");
            return res.status(401).send({ message: "Invalid token" });
        }
    
        res.locals.user = user;
    
        next();
    });
}



