const propertyModel=require("../models/PropertyModel");

const addProperty=async(req,res)=>{

    try{
        const saveProperty=await propertyModel.create(req.body);

        res.status(201).json({
            message:"Property Added Succesfully ...!",
            data:saveProperty
        })

    }
    catch(err){

        res.status(500).json({
            message:err.message,
        })

    }
}

const getAllProperty =async(req,res)=>{

    try{

        const getAllProperty=await propertyModel.find().populate("categoryId").populate("areaId").populate("cityId").populate("stateId").populate("userId");

        res.status(200).json({
            message:"Property Featched Succesfully ...!",
            data:getAllProperty
        })
    
    }

    catch(err){

        res.status.json(500)({
            message:err.message
        })
    }
}

const deleteProperty=async(req,res)=>{

    try{

        const deleteProperty=await propertyModel.findByIdAndDelete(req.params.id);
        res.status(204).json({
            message:"Property Deleted Sussefully ...!",
        })
     }
    catch(err){

            res.status(400).json({
                message:err.message,

            })
    }
}

module.exports={
    addProperty,getAllProperty,deleteProperty
}
