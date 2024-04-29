const User = require('../models/User.js');
const userRouter = require('express').Router();

userRouter.post('/register',async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData)
        const user = await User.create(userData);
      return  res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
       return res.status(400).send(error.message);
    }
    
});

module.exports = userRouter;