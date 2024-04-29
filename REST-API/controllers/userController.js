const User = require('../models/User.js');
const userRouter = require('express').Router();

userRouter.post('/login',async (req, res) => {
    try {
        const userData = req.body.username;
        const user = await User.findOne({username: userData.username});
        if(!user){
            throw new Error('Invalid username or password!');
        }
      return  res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
       return res.status(400).send(JSON.stringify({error:error.message}));
    }
    
});
userRouter.post('/register',async (req, res) => {
    try {
        const { username,password,repeatPassword  } = req.body.username;
        if(password !== repeatPassword){
        throw new Error('Passwords do not match!');
        }
        console.log(username,password)
        const user = await User.create({username,password});
      return  res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
       return res.status(400).send(JSON.stringify({error:error.message}));
    }
    
});

module.exports = userRouter;