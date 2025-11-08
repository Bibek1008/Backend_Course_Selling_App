
const {Router}=require('router')


const courseRouter=Router();



courseRouter.get('/courses',(req,res)=>{

  res.json({

    message:"this is all the courses"
  })
})




courseRouter.post('/user/purchase',(req,res)=>{

  res.json({

    message:"you "
  })
})

module.export={
  courseRouter:courseRouter
}