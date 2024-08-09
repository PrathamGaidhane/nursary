const error = (req,res) =>{
    res.json(`<div>
       <h1 style="text-align:center;">404 Not Found</h1>
       </div>`)
 }

 export { error}