
import { Router } from "express";

const adminRouter=Router()

import { adminModel } from '../db.js';


adminRouter.post('/signup',(req,res)=>{

  res.json({

    message:"you are signup"
  })
})


adminRouter.post('/signin',(req,res)=>{

  res.json({

    message:"you are signin"
  })
})
//middleware

//function for middleware
function adminMiddleware(req,res,next){
  next()

}
adminRouter.use(adminMiddleware)



adminRouter.post('/',(req,res)=>{
  res.json({

    message:"you can add these course"
  })

})
adminRouter.put('/',(req,res)=>{
  res.json({

    message:"these are your changed courses"
  })

})

adminRouter.get('/bulk',(req,res)=>{
  res.json({

    message:"these are your courses"
  })

})

export default adminRouter;