const express = require('express')
const app = express()

const cors = require('cors');  
app.use(cors());


app.use(express.json())
app.use(require("./router/auth"))


app.listen(5000,()=>{
    console.log(`server is working on port no. : 5000`)
})
