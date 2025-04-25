const express=require('express')
const app=express();
const db=require('./db')
const bodyParser=require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({    
    extended: true
}));

app.get('/',(req,res)=>{
      res.send('connect to page')
})
app.get('/create',async(req,res)=>{
     try{ let createuser=await db.create({
            title:"jaat",
            content:"playing good role of the randip huda of the year "
      })

      res.send(createuser)
}
catch(err){
        res.status(500).send("err in the "+err.message)
}
})

app.post('/post',async(req,res)=>{
    try{
   const{title,content}=req.body;
   let newUser=await db.create({
       title,content
   });
   res.send(newUser)
    }
    catch(err){
     console.log('that is not connected',+err.message)
    }
}) 
app.delete('/reject/:id',async(req,res)=>{
    try{
        const title=req.params.id;
     const deletBlog= await db.deleteOne({id:title});
     if(!deletBlog){
        return res.status(404).json({message:'Item not found'})
     }
     res.json({ message: 'Blog deleted successfully', deletBlog })
    }
    catch(err){
   console.log('that is not deleted')
   res.status(500).json({message:'server error'})
    }
})

app.listen(3000,()=>{
      console.log('server started on localhost:/3000')
});