
import express from 'express'

import mongoose from 'mongoose';
import userRouter from'./routes/user.js'
import courseRouter from'./routes/course.js'
import adminRouter from './routes/admin.js';

const app=express()




app.use('/user',userRouter);

app.use('/course',courseRouter);

app.use('/admin',adminRouter);

async function main() {

 

  app.listen(3000);
  console.log("Your server is started")
}

main();