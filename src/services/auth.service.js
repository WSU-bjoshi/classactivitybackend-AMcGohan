import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { signAccessToken } from "../utils/jwt.js";

const SALT_ROUNDS = 10;

export async function register({name, email, password}) {
    const normalizeEmail = email.toLowerCase();
    console.log(normalizeEmail, "Normalized email is");

    const existing = await User.findOne({where: {user_email: normalizeEmail}});
    if (existing) {
        return {ok: false, status: 409, error: "Email already registered"}
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
        user_name: name,
        user_email: normalizeEmail,
        user_password: passwordHash
    });

    const token = signAccessToken( {sub: String(user.user_id), email: user.user_email});

    return {ok: true, data:{token, user:{id: user.user_id, name: user.user_email}}};
}

export async function login({email, password}) {
    const normalizeEmail = email.toLowerCase();
    const user = await User.findOne({where: {user_email: normalizeEmail}});

    if (!(user)) {
        return {ok: false, status:401, error:"Invalid credentials"};
    }

    const match = await bcrypt.compare(password, user.user_password);
    if (!match) {
        return {ok: false, status:401, error: "Invalid credentials"};
    }

    const token = signAccessToken({sub: String(user.user_id), email: user.user_email});
    return {ok: true, data: {token, user:{id:user.user_id, name: user_name, email: user_email}}};
}