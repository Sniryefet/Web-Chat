import express from "express";
import {homeController} from '../controllers/homeController.js'

export const homeRoute=router=>{
    router.get('/',homeController)
    return router
}