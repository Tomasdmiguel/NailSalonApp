
import {AppDataSource} from '../config/AppDataSource'
import { Credential } from '../entities/Credential';
import {Users} from '../entities/Users'



    const CredentialService = {
            createCredencial: async (username:string, password:string):Promise<number> => {
                const newCredential = AppDataSource.getRepository(Credential).create({
                    username: username,
                    password: password
                });
                const result:Credential = await AppDataSource.getRepository(Credential).save(newCredential)
                return result.id;

            },

    
            validateCredential: async (username:string, password:string): Promise<number> => {

                const credential = await AppDataSource.getRepository(Credential).findOne({ where: { username: username, password: password } });
                
                

       
                     if (credential) {
                          return credential.id;
                         } else {
            
                         throw Error("Credencial no válida");
                          }

    }
  
    
}





export default CredentialService;
