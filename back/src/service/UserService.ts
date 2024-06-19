

import IUserDtos from '../dtos/IUserDto';
import CredentialService from './CredentialService';
import {AppDataSource} from '../config/AppDataSource'
import { Users } from '../entities/Users';
import { Appointment } from '../entities/Appointment';





const UserService = {

    getAllUsers : async():Promise<Users[]> => {
        const usuarios = await AppDataSource.getRepository(Users).find();
        
        for(const user of usuarios)  {
            const appointments = await AppDataSource.getRepository(Appointment).find({ where: { userid: user.id } });
            user.appointments = appointments;
        }
         const resultado = await AppDataSource.getRepository(Users).save(usuarios);

        return resultado;
        },
        
    
    

    getUserById: async (id:number):Promise<Users | null>=> {
        const UserById  = await AppDataSource.getRepository(Users).findOne({ where: { id:id } })
        if (!UserById) {
            throw Error('No existe un usuario con esta Id');
        }
        const appointments = await AppDataSource.getRepository(Appointment).find({ where: { userid:id } });
        if (appointments.length > 0) {
            UserById.appointments = appointments;
        }
        return UserById 
       
          
       
    },
    
    
    
    createUser: async (data: IUserDtos) => {
        try {
            const existingUser = await AppDataSource.getRepository(Users).findOne({ where: { email: data.email } });
                    if (existingUser) {
            throw new Error('El email de usuario ya está en uso');
        }
            const credentialsId = await CredentialService.createCredencial(data.username, data.password);           
            const usuarioData = { ...data, credentialsId };
            const usuario = AppDataSource.getRepository(Users).create(usuarioData);
            const result = await AppDataSource.getRepository(Users).save(usuario);
            
            return result;
        } catch (error) {
         
            throw new Error('Error al crear el usuario');
        }
    },

    loginUser: async (username:string, password:string) => {
        const credentialsId = await  CredentialService.validateCredential(username, password);
        const users = await AppDataSource.getRepository(Users).findOneBy({ id:credentialsId});
        return {
            'login': true,
            'user': users
        }



    }

    


};

export default UserService;