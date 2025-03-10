const routes=require("express").Router();
const propertyController=require("../controllers/PropertyController");

routes.post("/addproperty",propertyController.addProperty);

routes.get("/allproperty",propertyController.getAllProperty);

routes.delete("/deleteproperty",propertyController.deleteProperty);

module.exports=routes;