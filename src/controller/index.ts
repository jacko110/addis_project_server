import { NextFunction,Request,Response } from "express";
import mongoose from "mongoose";
import Employee from '../models/schema'

const createEmployee = async (req:Request,res:Response, next:NextFunction)=>{
    const {name,date_of_birth,salary,gender}=req.body

    const employee = new Employee({
        _id:new mongoose.Types.ObjectId(),
        name,
        date_of_birth,
        salary,
        gender
    })
    try {
        const employee_1 = await employee
            .save();
        return res.status(201).json({ employee });
    } catch (error) {
        return res.status(500).json({ error });
    }

}

const readAllEmployee = async (req:Request,res:Response, next:NextFunction)=>{
    try {
        const employee = await Employee.find();
        return res.status(200).json({ employee });
    } catch (error) {
        return res.status(500).json({ error });
    }
}
const updateEmployee = async (req:Request,res:Response, next:NextFunction)=>{
    const id = req.params.id

    return Employee.findById(id)
        .then((employee)=>{
            if(employee){
                employee.set(req.body)

                return employee
                .save()
                .then((employee)=>res.status(201).json({employee}))
                .catch((error)=>res.status(500).json({error}))
            }else{
                res.status(404).json({message:'Not found'})
            }
        })
        .catch((error)=>res.status(500).json({error}))
}
const deleteEmployee = async (req:Request,res:Response, next:NextFunction)=>{
    const id = req.params.id

    return Employee.findByIdAndDelete(id)
        .then((employee)=>(employee ? res.status(201).json({message:'Deleted'}):res.status(404).json({message:'Not found'})))
        .catch((error)=>res.status(500).json({error}))
}

export default {createEmployee,readAllEmployee,updateEmployee,deleteEmployee}

