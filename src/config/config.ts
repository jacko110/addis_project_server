import dotenv from 'dotenv'

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || ''
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
const MONGO_URI = process.env.MONGO_URI
// `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ff99hez.mongodb.net/?retryWrites=true&w=majority`

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT):8000

export const config ={
    mongodb:{
        url:MONGO_URI
    },
    server:{
        port:SERVER_PORT
    }
}