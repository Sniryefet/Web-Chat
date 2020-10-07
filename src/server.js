import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import http from 'http'
import socketio from 'socket.io'
import initMiddlewares from './api/middleware/Middlewares.js'
import {initRoutes} from './api/routes/index.js'
import initIoFuncuality from './api/controllers/ioController.js'
const PORT = process.env.PORT || 3000


const createServer=()=>{
    const app = express()
    const server= http.createServer(app)
    const io = socketio(server)

     // set middleware
     initMiddlewares(app) 
    
     // init routes
     initRoutes(app)
    
   
    // set config

    io.on('connection',socket=>{
        console.log('user connected')
        initIoFuncuality(socket)
    })

    server.listen(PORT,()=>{console.log(`server is listenning on port ${PORT}`)})

}

export default createServer