
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const cors = require('cors')
const chatRoutes=require('./routes/chat')
//express app
const app = express();

//middleware
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=> {
            console.log("connected to db & listening on port number",process.env.PORT);
        })
    })
    .catch(error=>{
        console.log(error)
    })

//listen for requests


























// //practice
// require('dotenv').config()
// const express = require('express')
// const mongoose = require('mongoose')
// const workoutRoutes = require('./routes/workouts')

// const app = express()

// // app.get('/',(req,res)=>{
// //     res.json({mssg:"hello world"})
// // })
// app.use(express.json())
// app.use('/api/workouts',workoutRoutes)

// mongoose.connect(process.env.MONGO_URI)
//     .then(()=>{
//         app.listen(process.env.PORT,()=>{
//             console.log("connected to db and listening on port",process.env.PORT)
//             console.log(process.env.MONGO_URI)
//         })
//     })
//     .catch(error=>{
//         console.log(error)
//     })






























