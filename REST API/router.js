const express = require('express')
const Router = express.Router()
const User =  require('./User')

Router.get('/',async (req,res,next)=>{
    console.log("Working");
    try {
        const user = await User.find();
        res.json(user)
    } catch (error) {
        
    }
})

Router.post('/', async (req,res,next)=>{
    console.log(req.body)
    const u = new User({
        name:req.body.name,
        emailid:req.body.emailid
    })
    try {
        await u.save();
        res.json(u);
    } catch (error) {
        
    }
})
Router.patch('/:id',async (req,res)=>{
    const user = await User.findById(req.params.id);
    
    user.name = req.body.name;
    user.emailid = req.body.emailid;

    const u = await user.save()
    res.json(u)
    
})
Router.delete('/:id',async (req,res)=>{
    await User.deleteOne({_id:req.params.id});
    
    

   
    
    
})

module.exports = Router