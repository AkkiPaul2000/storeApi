const mongo=require('mongoose')
mongo.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.upycpmr.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log("MongoDB Connected"))