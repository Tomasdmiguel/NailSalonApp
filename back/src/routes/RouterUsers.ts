import {Router} from 'express'
import UserController from '../controllers/UserControllers'


const RouterUsers= Router();


RouterUsers.get('/', UserController.getUsers );

RouterUsers.get('/:id', UserController.getByUsersId);

RouterUsers.post('/register',UserController.postRegister  );

RouterUsers.post('/login',UserController.postLogin );


export default RouterUsers;