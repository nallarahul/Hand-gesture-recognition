import express from "express";
const app=express();
const port=3000;
const raw_data= {"name": "Rahul"};
app.get("/",(req,res)=>{
    res.render("index.ejs",{data:raw_data.name});
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
