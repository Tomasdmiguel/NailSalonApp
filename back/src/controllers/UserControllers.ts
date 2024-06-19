
import { Request, Response } from 'express';
import UserService from '../service/UserService'
import  CredentialService from '../service/CredentialService'
import IUserDtos from '../dtos/IUserDto';



const UserController = {
    getUsers: async (req: Request, res: Response) => {

        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
            
        } catch (error) {
            res.status(404).json({

                error: 'Error en el controlador getUsers',
        });
        }
    },

    getByUsersId: async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.id); 

            const usersById = await UserService.getUserById(userId);

            res.status(200).json(usersById);

        } catch (error) {
            res.status(404).json({

                error: 'Error en el controlador al seleccionar la Id',

            });
        }
    },


    postRegister: async (req: Request, res: Response) => {
        try {
            
            const userData:IUserDtos = req.body;
            
             await UserService.createUser(userData);
    
            res.status(201).send('Usuario registrado exitosamente');

        } catch (error) {
            res.status(400).json({

                error: 'Los datos son incorrectos',

            });
        }
    },
    
    postLogin: async (req: Request, res: Response) => {
        try {
            
            const { username, password } = req.body;
            
            const credentialsId = await UserService.loginUser(username, password);
            
            if (credentialsId)  res.status(200).json({ credentialsId });
            
            
            
        } catch (error:any) {
            res.status(400).json(error.message);
        }
},


};

export default UserController;