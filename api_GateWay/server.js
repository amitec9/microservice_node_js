
const gateway = require('fast-gateway')

const port = 9001;
const server = gateway({

    routes:[
        {
            prefix:"/order",
            target :'http://localhost:8002/',
            hooks:{

            }
        },
        {
            prefix:"/payment",
            target :'http://localhost:8001/',
            hooks:{
                
            }
        }
    ]
})

server.get('/mytesting',(req,resp)=>{
    resp.send({message:"yes  api called gateway"})
})

server.start(port).then(server=>{
    console.log("api gateway is running 9001 port")
})