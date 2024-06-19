import { Request, Response } from 'express';
import AppointmentService from '../service/AppointmentService'
import { Appointment } from '../entities/Appointment';



const AppointmentController = {
    getAppointments: async (req: Request, res: Response) => {
        try {
            const turnos:Appointment[] = await  AppointmentService.getAllAppointments()

            if(turnos.length ) {

                res.status(200).json(turnos);

            } else {

                res.status(404).json("No se encontraron turnos" );
            }
            
        } catch (error) {
            res.status(500).json({

                error: "Error interno del servidor",

        });

        }

    },

    getAppointmentById: async (req: Request, res: Response) => {
        try {

            const TurnId = parseInt(req.params.id); 
            const Turno = await AppointmentService.getAppointmentById(TurnId);
            if(Turno) {
                res.status(200).json(Turno);

            }  else {
                res.status(404).json("No se encontro el turno con esa Id" );
            }


        } catch (error) {
            res.status(500).json({

                error: "Error interno del servidor",

        });
        }

    
       
    },

    scheduleAppointment: async (req: Request, res: Response) => {
        try {
            const data = req.body; 

            const NewTurn = await AppointmentService.createAppointment(data);

            if(NewTurn) {

                res.status(201).json(NewTurn);
            
            }
        } catch (error:any) {
            res.status(400).json(error.message );
            
               };
        },


    


    cancelAppointment: async (req: Request, res: Response) => {
        try {
            const TurnId = parseInt(req.params.id); 
            const Turno= await AppointmentService.getAppointmentById(TurnId);

            if(Turno) {
              const TurnoCancel =  await AppointmentService.cancelAppointment(Turno);
              res.status(200).json(TurnoCancel);

            }  else {
                res.status(404).json("No se encontro el turno con esa Id" );
            }
        } catch (error) {
            
        }
       

    }
   
    
};

export default AppointmentController;