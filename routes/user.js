

const {Router}=require('express');


const userRouter=Router()


userRouter.post('/user/signup',(req,res)=>{

  res.json({

    message:"you are signup"
  })
})


userRouter.post('/user/signin',(req,res)=>{

  res.json({

    message:"you are signin"
  })
})



userRouter.get('/user/purchases',(req,res)=>{

  res.json({

    message:"These are purchases courses"
  })
})

module.exports={

  userRouter:userRouter
}