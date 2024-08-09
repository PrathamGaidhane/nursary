const getHealth = (req,res) =>{
   
    res.json({
       sucess:true,
       message:"server is up and runing..."
    })
 
}

export {
    getHealth
}