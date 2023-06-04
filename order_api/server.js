const express = require('express')
const app = express();
const port = 8002;
app.get('/order-list',(req,res)=>
{
    let response = {
        data:{
            item:[
                {
id :1,name:"order"
                }
            ]
        }
    }
    res.send(response)
})

app.get('/',(req,res)=>{
    res.status(200).json({message:"order api called"})
})

app.listen(port,()=>{
console.log("order :",port)
})