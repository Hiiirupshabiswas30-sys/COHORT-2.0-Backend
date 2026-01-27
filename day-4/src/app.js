//- server create krna
//- server kom config krna

const express = require("express")

const app =express() //serverv create ho jata hai

app.use(express.json())

const notes = [
//    {
//         title:"test title 1",
//         description:"test description 1"
//     } 
]

app.get("/",(req,res)=>{
    res.send("hello world")
})

// POST /notes

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes)
    res.send("note created")
})

// GET /notes
app.get("/notes",(req,res)=>{
    res.send(notes)
})

//DELETE /notes
//params

app.delete("/notes/:index",(req,res)=> {
   
    //console.log(req.params.index)
       
   delete notes[req.params.index]

   res.send("noye deleted seccessfuly")
   })  
   
   //Patch /notes/:index
   //req.body= {descriotion:- "sample modified description" }
app.patch("/notes/:index",(req,res)=>{

    notes[req.params.index].description =req.body.description

    res.send("note updated succesfully")
})

module.exports = app