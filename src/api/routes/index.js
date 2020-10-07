import express from "express";
import router from './routes.js'

export const initRoutes=app=>{

    app.use('/',router)
    
}