import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


import { postplant,getplant,getplantid,putplantid,deleteplant } from "./controller/plant.js";
import {getHealth} from './controller/command.js'
import {error} from "./controller/error.js"

const app = express()
app.use(express.json())

const dbconnection = async() =>{
   const conn = await mongoose.connect(process.env.MONGO_URL)

   if(conn){
      console.log(`Mongodb is connect📦`)
   }
   else{
      console.log(`Server is not connected❌`)
   }
}
dbconnection();

app.get("/health", getHealth )
app.post("/plant", postplant )
app.get("/plant", getplant)
app.get("/plantid/:id", getplantid)
app.put("/plant/:id", putplantid)
app.delete("/plantd/:id",deleteplant )
app.get("*" ,error )
const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
   console.log(`added Sucessful ${PORT}`)
})