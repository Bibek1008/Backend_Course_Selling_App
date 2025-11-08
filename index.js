
const express=require('express')

const app=express()




app.post('/user/signup',(req,res)=>{

  res.json({

    message:"you are signup"
  })
})


app.post('/user/signin',(req,res)=>{

  res.json({

    message:"you are signin"
  })
})



app.get('/user/purchases',(req,res)=>{

  res.json({

    message:"These are purchases courses"
  })
})

app.get('/courses',(req,res)=>{

  res.json({

    message:"this is all the courses"
  })
})
//route for user want to purchases course

app.post('/user/purchase',(req,res)=>{

  res.json({

    message:"you "
  })
})

app.listen(3000)
