var jwt = require('jsonwebtoken');

var authorization = function (req, res, next) {
    const token = req.headers['token'];    

    if (!token) 
        res.status(401).send({ message: 'Token is required' });
    else
        jwt.verify(token, process.env.SEED, function (err, decoded) {
            var msg = {message: err};
            if (err) 
                res.status(401).send({ message: 'Token is not valid' });
            else
                next();
        });
}

module.exports = authorization;
