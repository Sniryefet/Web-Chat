import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import initMiddlewares from './api/middleware/Middlewares.js'
import {initRoutes} from './api/routes/index.js'
const PORT = process.env.PORT || 3000


// app.get('/',(req,res)=>{
//     res.send('hello world')
// })



const createServer=()=>{
    const app = express()
    
    // set middleware
    initMiddlewares(app)
    
    // init routes
    initRoutes(app)
   
    // set config


    app.listen(PORT,()=>{console.log(`server is listenning on port ${PORT}`)})

}

export default createServer