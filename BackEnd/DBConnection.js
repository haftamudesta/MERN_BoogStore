const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();
const DBConnection=() =>{
    mongoose.connect('mongodb+srv://Admin:lIGQBPqfXyvwKX2R@cluster0.zvxxp4g.mongodb.net/mongoDB?retryWrites=true&w=majority',{
        useNewUrlParser:true
    }).then(()=>{
        console.log("connection established");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports= DBConnection;
