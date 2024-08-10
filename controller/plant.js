import Plants from "../module/Plants.js"


 const postplant = async (req, res) => {

    const { name, categuris, image, price, discription } = req.body
 
    const newPlant = new Plants({
      name:name,
      categuris:categuris,
      image:image,
      price:price,
      discription:discription
    })
 
    const savePlant = await newPlant.save();

    res.json({
       sucess: true,
       data: savePlant,
       text: "added sucsessful"
    })
 
 
 }
 const getplant = async (req, res) => {

   for (let i=0;i<999999999; i++){}
   const allplant = await Plants.find()
    res.json({
       succes: true,
       data: allplant,
       mesage: "Data added sucsessful"
    })
 }
 const getplantid = async (req, res) => {

    const { id } = req.params
    const plant = await Plants.findById(id)
 
    res.json({
       succes: plant ? true : false,
       data: plant || null,
       message: plant ? "get data succesfully" : "id not found"
    })
 }
 const  putplantid = async (req, res) => {

    const { id } = req.params
    const { name, categuris, image, price, discription } = req.body
 
     await Plants.updateOne({_id:id},{
      $set:{
         name:name,
         categuris:categuris,
         image:image,
         price:price,
         discription:discription
      }
    })

    const updateplant = await Plants.findById(id)
     res.json({
      sucess:true,
      message:"Plant update Succesfully",
      data:updateplant
     })
      
 }
const deleteplant = async (req, res) => {
   const { id } = req.params;

   await Plants.deleteOne({_id:id})
   
   res.json({
      succes:true,
      data:null,
      mesage:`these object deleteted`
   })
 }

 export {
    postplant,getplant ,getplantid,putplantid,deleteplant
 }