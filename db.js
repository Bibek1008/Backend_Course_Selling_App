

import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
mongoose.connect("mongodb+srv://Krishnagod:Bibek2026@cluster1.9usg1fr.mongodb.net/course_selling_app")

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
