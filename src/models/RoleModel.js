const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const roleSchema=new Schema({

    role_name:{
        type:String,
    },
    description:{
        type:String,
    }
})

module.exports=mongoose.model("role",roleSchema)