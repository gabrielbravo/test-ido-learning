const express = require('express')
const app = express()
const authentication = require('../middlewares/autentication')

app.post('/verify', [authentication], function (req, res) {    
    res.json({
        estado: 'verificado'
    })
})

module.exports = app;