const express = require('express')
const app = express();
const port = 8001;
app.get('/order-list',(req,res)=>
{
    let response = {
        data:{
            item:[
                {
id :1,name:"payment"
                }
            ]
        }
    }
    res.send(response)
})

app.get('/',(req,res)=>{
    res.status(200).json({message:"payment api called"})
})

app.listen(port,()=>{
console.log("payment :",port)
})