const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');

app.post('/login', async function(req, res){
    try{
        const { username } = req.body;
        
        if(username){
            let token = jwt.sign({  
                username
            }, process.env.SEED, { expiresIn: process.env.TOKEN_EXPIRES });
            
            res.json({
                token
            });
        }
        else{
            return res.status(404).json({
                error: 'Username is not valid'
            })
        }
    }
    catch(ex){
        return res.status(500).json({
            error: 'Internal Error'
        })
    }
})

module.exports = app;