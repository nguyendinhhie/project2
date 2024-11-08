const express=require("express");

const app=express();
const cors= require("cors");
const listproduct= require("./product");


const corsOptions = {
    origin: 'http://localhost:3000', // Cho phép cổng 3001
    methods: 'GET,POST,PUT,DELETE', // Các phương thức HTTP được phép
    optionsSuccessStatus: 200, // Trả về status 200 cho các yêu cầu thành công
  };

  app.use(cors(corsOptions));
  
const PORT=process.env.PORT||8080
app.get("/api/product",(req,res)=>{
    res.json(listproduct)
})




app.get("/api/product/:id",(req,res)=>{
     const productid=listproduct.find(p=>p.id===parseInt(req.params.id))
    if(productid){
        res.json(productid)
    }
    else{
        res.status(404).send("loi roi")
    }
})
app.listen(8080,()=>{
    console.log("sever on 8080");
})