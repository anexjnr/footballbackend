const express=require("express")
const router = express.Router()

const footballmodel = require("./model")

router.get("/viewall",async(req,res)=>{
    let data = await footballmodel.find()
res.json(data)
})

router.post("/add",async (req,res)=>
{
let data = req.body
let football = new footballmodel(data)
let result = await football.save()
res.json(
    {
        status:"success"
    }
)
})

router.post("/search",async(req,res)=>
{
    let input = req.body
    let data = await footballmodel.find(input)
    res.json(data)
})

module.exports=router