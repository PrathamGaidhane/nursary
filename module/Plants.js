import {Schema,model} from "mongoose"

const plantscema = new Schema ({
    name:String,
    categuris:String,
    image:String,
    price:String,
    description:String
})

const Plant = model("Plant",plantscema)

export default Plant