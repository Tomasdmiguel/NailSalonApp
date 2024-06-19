

import {AppDataSource} from '../config/AppDataSource'
import { Appointment } from '../entities/Appointment';
import { Users } from '../entities/Users';



const AppointmentService = {
    getAllAppointments: async (): Promise<Appointment[]> => {
        const turnos = await AppDataSource.getRepository(Appointment).find()
        const result = await AppDataSource.getRepository(Appointment).save(turnos)
        return result;
    },

    getAppointmentById: async (id: number): Promise<Appointment | null> => {
       
        const TurnById = await AppDataSource.getRepository(Appointment).findOneBy({
            id 
        })
        return TurnById
    },

    createAppointment: async (data:Appointment) => { 
        const user = await AppDataSource.getRepository(Users).findOneBy({id:data.userid})
        if(user) {
            const newTurn=  AppDataSource.getRepository(Appointment).create(data);
            const result = await AppDataSource.getRepository(Appointment).save(newTurn);
            
            return result;
              

        } else {
            throw Error('Error al crear el turno faltan datos')
        }
        
       

    },

    cancelAppointment: async (turno:Appointment) => {
        turno.status = "cancelled";
        const appointmentRepository = AppDataSource.getRepository(Appointment);
        const updatedTurno = await appointmentRepository.save(turno);
        return updatedTurno

    }
};

export default AppointmentService;
