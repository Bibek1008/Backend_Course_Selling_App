
import { Router } from 'express';

const courseRouter=Router();



courseRouter.get('/preview',(req,res)=>{

  res.json({

    message:"this is all the courses"
  })
})




courseRouter.post('/purchase',(req,res)=>{

  res.json({

    message:"you "
  })
})

export default courseRouter;