

import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const userSchema=new mongoose.Schema({

  email:{type:String,unique:true},
  password:{type:String},
  firstname:String,
  lastname:String

})

const userModel=mongoose.model("user",userSchema);



const adminSchema=new mongoose.Schema({
  email:{type:String,unique:true},
  password:{type:String},
  firstname:String,
  lastname:String

})
const adminModel=mongoose.model("admin",adminSchema);


const courseSchema =new mongoose.Schema({

  title: { type: String, required: true },
  description: String,
  price: Number,
  imageUrl: String,
  createrId:ObjectId

})

const courseModel=mongoose.model("courses",courseSchema);


const purchasesSchema =new mongoose.Schema({
  courseId:ObjectId,
  userId:ObjectId
});

const purchasesModel=mongoose.model("purchase",purchasesSchema);



export { userModel, adminModel, courseModel, purchasesModel };
