import {Router} from 'express'
import RouterUsers from './RouterUsers'
import RouterAppointments from './RoutesAppointments'

const router= Router();


router.use("/users", RouterUsers )
router.use("/appointments", RouterAppointments )




export default router

