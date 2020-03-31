require('./config/config');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
    console.log("Escuchando en puerto: ", process.env.PORT);
})

app.use(require('./routes/index'));

