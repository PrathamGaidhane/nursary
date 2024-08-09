
const plants = [
    {
       "id": 3,
       "name": "lily",
       "categuris": "1 Single Rose",
       "image": "https://assets.winni.in/product/primary/2022/7/71959.png",
       "price": "100rs",
       "discription": "Wow!! I thought it's just a flower but the way it's wrapped is beautiful. Worth it 😻"
    },
    {
       "id": 8,
       "name": "mogra",
       "categuris": "1 Single Rose",
       "image": "https://assets.winni.in/product/primary/2022/7/71959.png",
       "price": "200rs",
       "discription": "Wow!! I thought it's just a flower but the way it's wrapped is beautiful. Worth it 😻"
    },
    {
       "id": 9,
       "name": "sunflower",
       "categuris": "1 Single Rose",
       "image": "https://assets.winni.in/product/primary/2022/7/71959.png",
       "price": "300rs",
       "discription": "Wow!! I thought it's just a flower but the way it's wrapped is beautiful. Worth it 😻"
    }
 ]

 const postplant = (req, res) => {

    const { name, categuris, image, price, discription } = req.body
 
    if (name === "") {
       return res.json({
          succes: false,
          data: null,
          message: `name required`
       })
    }
    if (name === "") {
       return res.json({
          succes: false,
          data: null,
          message: `name required`
       })
    } if (categuris === "") {
       return res.json({
          succes: false,
          data: null,
          message: `categuris required`
       })
    } if (image === "") {
       return res.json({
          succes: false,
          data: null,
          message: `image required`
       })
    } if (price === "") {
       return res.json({
          succes: false,
          data: null,
          message: `price required`
       })
    }
    if (discription === "") {
       return res.json({
          succes: false,
          data: null,
          message: `discription required`
       })
    }
 
 
    const randomid = Math.round(Math.random() * 1000)
 
    const newplant = {
       id: randomid,
       name: name,
       categuris: categuris,
       image: image,
       price: price,
       discription: discription
    }
    plants.push(newplant)
 
    res.json({
       sucess: true,
       data: newplant,
       text: "added sucsessful"
    })
 
 
 }
 const getplant = (req, res) => {

    res.json({
       succes: true,
       data: plants,
       mesage: "Data added sucsessful"
    })
 }
 const getplantid = (req, res) => {

    const { id } = req.params
    const plant = plants.find((p) => p.id == id)
 
    res.json({
       succes: plant ? true : false,
       data: plant || null,
       message: plant ? "get data succesfully" : "id not found"
    })
 }
 const  putplantid = (req, res) => {

    const { id } = req.params
    const { name, categuris, image, price, discription } = req.body
 
    const newobj = {
       id,
       name,
       categuris,
       image,
       price,
       discription
    }
 
    let indexid = -1
 
    plants.forEach((plant, i) => {
       if (plant.id == id) {
          return indexid = i
       }
    })
 
    if (indexid == -1) {
       res.json({
          succes: false,
          message: "id not available"
       })
    }
    else {
       plants[indexid] = newobj
 
       res.json({
          succes: true,
          data: null,
          message: "data update succesfully"
       })
    }
 
 }
const deleteplant = (req, res) => {
    let indexid = -1;
   const { id } = req.params;

   plants.forEach((plant, i) => {
      if (plant.id == id) {
         indexid = i
      }
   })
   
   if (indexid === -1) {
      return res.json({
          success: false,
          message: `${id} not valid ID`
      });
  }
   plants.splice(indexid,1);

   res.json({
      succes:true,
      data:null,
      mesage:`these object deleteted`
   })
}

 export {
    postplant,getplant ,getplantid,putplantid,deleteplant
 }