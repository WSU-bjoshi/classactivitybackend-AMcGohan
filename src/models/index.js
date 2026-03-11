import { sequelize } from "../db/sequelize";
import { User} from "./User.js";
import { Todo } from "./Todo.js";

User.hasMany(Todo, {foreignKey:"user_id", onDelete:"cascade"});
Todo.belongsTo(User, {foreignKey:"user_id"});

export async function initDB() {
    await sequelize.authenticate();
    await sequelize.sync();
}

export {sequelize, User, Todo};