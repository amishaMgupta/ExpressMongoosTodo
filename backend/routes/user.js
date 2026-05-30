const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.post('/login', async (req, res) => {
        console.log("from login api");
        const username = req.body.name;
        const password = req.body.password;
        try{
               const user = await User.findOne({ name: username, password: password });
               console.log(user);
               if(!user){
                        res.status(401).json({ error: 'Invalid username or password' });
               }
                 res.json(user);
        }catch(error){
                res.status(500).json({ error: 'Failed to login' });
        }
       // res.json({ message: 'Login successful' });
       
});
module.exports = router;
