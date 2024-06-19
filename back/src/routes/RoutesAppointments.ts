import { Router } from 'express';
import AppointmentController from '../controllers/AppointmentController';

const RouterAppointments = Router();

RouterAppointments.get('/', AppointmentController.getAppointments);

RouterAppointments.get('/:id', AppointmentController.getAppointmentById);

RouterAppointments.post('/schedule', AppointmentController.scheduleAppointment);

RouterAppointments.put('/cancel/:id', AppointmentController.cancelAppointment);

export default RouterAppointments;