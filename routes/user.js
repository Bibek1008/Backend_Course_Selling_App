

import { Router } from 'express';




const userRouter=Router()


userRouter.post('/signup',(req,res)=>{

  res.json({

    message:"you are signup"
  })
})


userRouter.post('/signin',(req,res)=>{

  res.json({

    message:"you are signin"
  })
})



userRouter.get('/purchases',(req,res)=>{

  res.json({

    message:"These are purchases courses"
  })
})

export default userRouter;