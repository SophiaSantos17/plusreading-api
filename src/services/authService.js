import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

async function signup(body) {
    try {
        // criptografo a senha 10 vezes
        const hashPassword = bcrypt.hashSync(body.password, 10);

        // procuro o email com a função do authRepository, se ja existe trava, senão continua
        const userExists = await authRepository.findByEmail(body.email);
        if (userExists) throw new Error('User already exists');
        
        // cria o user com a sneha criptografada
        const user = {...body, password: hashPassword};

        // cria uma const que vai para a função de criar no authRepository com os valores de user 
        const createdUser = await authRepository.create(user);

        return createdUser;

    } catch (err) {
        console.error('Error in signup function:', err);
        throw err;
    }
}

async function signin(body){
    const userExists = await authRepository.findByEmail(body.email);
    if(!userExists) throw new Error("Email ou Senha incorreto");
    
    const passwordOk = bcrypt.compareSync(body.password, userExists.password)
    if(!passwordOk) throw new Error("Email ou Senha incorreto");

    return authRepository.generateToken(userExists._id);

}

async function userLogged(id){
    const user = await authRepository.findById(id);
    if(!user) throw new Error("Usuario não encontrado!");
    return user;
}

export default { signup, signin, userLogged };
