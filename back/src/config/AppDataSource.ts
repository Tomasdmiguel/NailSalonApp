import { DataSource } from "typeorm"
import {Appointment} from '../entities/Appointment'
import {Users} from '../entities/Users'
import {Credential} from '../entities/Credential'
import dotenv from 'dotenv';


dotenv.config();
const USER_POSTGRESS = process.env.USER_POSTGRESS
const PASSWORD_POSTGRESS = process.env.PASSWORD_POSTGRESS
const NAME_BD = process.env.NAME_BD
const PORT_BD = parseInt(process.env.PORT_BD || "5432", 10);  
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: PORT_BD,
    logging: ["error"],
    username: USER_POSTGRESS,
    password: PASSWORD_POSTGRESS,
    database: NAME_BD,
    // dropSchema:true,
    synchronize: true, 
    entities: [Appointment, Users, Credential],
    subscribers: [],
    migrations: []
});

