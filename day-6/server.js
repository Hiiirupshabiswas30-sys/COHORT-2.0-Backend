// -server ko start krna
// -database se connect krna

const app =require('./src/app');
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://rups:DFeSMhWm23TfLAvl@cluster0.3fevrjf.mongodb.net/day-6")
    .then(()=>{
        console.log("connected to Database")
        
    })
}

connectToDb()

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
    
})