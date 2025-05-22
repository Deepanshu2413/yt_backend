import express from 'express'
const app = express()   
const PORT=3001

app.get('/',(req,res)=>{
    res.send("server running successfull now nodemon is running  ")
})

app.listen(PORT , ()=>{
    
    console.log("server is running on "+ {PORT})
})