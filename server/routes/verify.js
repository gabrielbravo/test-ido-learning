const express = require('express')
const app = express()
const authentication = require('../middleware/autentication')

app.post('/verify', [authentication], function (req, res) {    
    res.json({
        estado: 'verificado'
    })
})

module.exports = app;