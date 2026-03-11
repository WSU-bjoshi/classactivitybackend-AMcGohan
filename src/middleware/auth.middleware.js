import { User } from "../models/User.js";
import { verifyAccessToken } from "../utils/jwt.js";

export async function requireAuth(req, res, next) {
    try {
        const header = req.headers.authorization || "";
        const [type, token] = header.split(" ");

        if (type !=="Bearer" | !token) {
            res.status(401).json({error: "Missing or invalid authorization header"});
        }

        const decoded = verifyAccessToken(token);
        const userId = Number(decoded.sub);

        const user = await User.findByPk(userId, {attributes:["user_id", "user_name", "user_email"]});

        if (!user) {
            return res.status(404).json({error:"User does not exist"});
        }

        req.user = user;
        next();

    }
    catch(err) {
        return res.status(401).json({error:"Invalid Token"});
    }
}