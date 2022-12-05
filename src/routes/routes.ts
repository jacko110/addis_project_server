import express from 'express'
import controller from '../controller/index'
import { Schemas,Validate } from '../middleware/Validate';

const router = express.Router();

router.post('/create',Validate(Schemas.employee.create),controller.createEmployee)
router.get('/get/',controller.readAllEmployee)
router.patch('/update/:id',Validate(Schemas.employee.update),controller.updateEmployee)
router.delete('/delete/:id',controller.deleteEmployee)

export = router