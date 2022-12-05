import express,{Express,Request,Response} from "express"
import cors from 'cors'
// import bodyParser from "body-parser"
import mongoose from 'mongoose'
import { config } from './config/config'
import route from './routes/routes'


const app:Express = express()

app.use(cors())
app.use(express.urlencoded({ extended:true}))
app.use(express.json())

// connect to mongo
const MONGO_CONNECTION_STRING:string = config.mongodb.url || "mongodb://localhost:8000/employees"
mongoose
.connect(MONGO_CONNECTION_STRING)
.then(()=>{
    console.log('connected to mongo');
    startServer()
})
.catch((error)=>{
    console.log(error);
}
)
// only start the server if mongo connects

const startServer=()=>{
    app.use((req,res,next)=>{
        console.log(`Incoming method:[${req.method}] url:[${req.url}] ip:[${req.socket.remoteAddress}]`);

        res.on('finish',()=>{
            console.log(`Incoming method:[${req.method}] url:[${req.url}] ip:[${req.socket.remoteAddress}] status:[${res.statusCode}]`);
        })

        next()
    })
}

// Router
app.use('/employees',route)


app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:'hello Addis'})
})

app.use((req,res,next)=>{
    const error = new Error('not found')
    console.log(error);

    return res.status(404).json({message:error.message})
})

app.listen(config.server.port,()=>console.log(`server running on ${config.server.port}.`))