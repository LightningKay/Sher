const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.header['Authorization'];
    
    if(!token){
        return res.status(403).send('Token required for authorization');
    }

    try{
        token = token.replace(/^Bearer\s+/, ""); // Most of the authrorization schemes use format Bearer <Auth token>
        console.log(token);
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid token');
    }

    return next(); // executes the next function in the route
}

module.exports = verifyToken;