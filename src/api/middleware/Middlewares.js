import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const initMiddlewares = (app) => {
  
 
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  const viewsPath = path.join(__dirname, '../views')
  const publicPath = path.join(__dirname, '../public')
  
  app.set('views', viewsPath)
  app.set("view engine", "ejs");
  app.use(express.static(publicPath));
};

export default initMiddlewares;
