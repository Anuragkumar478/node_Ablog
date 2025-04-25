const mongoose=require('mongoose')



mongoose.connect('mongodb://localhost:27017/Ablog');


// instant connection 
const db=mongoose.connection;
const blogScema=mongoose.Schema({
    title:String,
    content:String
})
// event listner {ham uss kartay check karnay kay lieay ki mogodb chalu hu ki nahi }
db.on('connectd',()=>{
    console.log('connectd to mongodb')
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports=mongoose.model('user',blogScema);