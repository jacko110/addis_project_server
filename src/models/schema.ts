import mongoose,{Document,Schema} from "mongoose";

export interface IEmployee {
    name:string;
    date_of_birth:Date;
    salary:number;
    gender:string;
}

enum genderEnum {
    'Male' = 'male',
    'Female' = 'female'
}

export interface IEmployeeModel extends IEmployee,Document{}

const EmployeeSchema:Schema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        date_of_birth:{
            type:Date,
            required:true
        },
        salary:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            enum:Object.values(genderEnum),
            required:true
        },
    },
    {
        versionKey:false
    }
)
export default mongoose.model<IEmployeeModel>('Employee',EmployeeSchema)