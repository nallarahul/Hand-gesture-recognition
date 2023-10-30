import express from "express";
const app=express();
const port=3000;
const raw_data= {
        "finger_one": finge_one,
        "finger_two": finger_two,
        "finger_three": finger_three,
        "finger_four": finger_four,
        "finger_five": finger_five
    };
app.get("/",(req,res)=>{
    res.render("index.ejs",{data:raw_data.name});
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
