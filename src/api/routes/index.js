import express from "express";
import { homeRoute} from './home.js'

export const initRoutes=app=>{
    const router=express.Router()
    app.use('/',homeRoute(router))
}