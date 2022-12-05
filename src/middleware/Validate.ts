import Joi,{date, ObjectSchema} from 'joi'
import { NextFunction,Request,Response} from 'express'
import { IEmployee } from '../models/schema'

export const Validate =(schema:ObjectSchema)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            await schema.validateAsync(req.body)

            next()
        } catch (error) {
            console.log(error);
            return res.status(422).json({error})
        }
    }
}

export const Schemas ={
    employee:{
        create:Joi.object<IEmployee>({
            name:Joi.string().required(),
            date_of_birth:Joi.date().required(),
            salary:Joi.number().required(),
            gender:Joi.string().required()      
        }),
        update:Joi.object<IEmployee>({
            name:Joi.string().required(),
            date_of_birth:Joi.date().required(),
            salary:Joi.number().required(),
            gender:Joi.string().required()      
        })
    }
}