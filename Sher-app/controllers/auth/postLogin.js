const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
    try{
        const {mail, password} = req.body;
        const user = await User.findOne({ mail: mail.toLowerCase()});

        if(user && (await bcrypt.compare(password, user.password))){
            // User is successfully authenticated

            
            const token = jwt.sign(
                {
                    userId : user._id, // This is automatically generated in mongoDB
                    mail : user.mail,
                },
                process.env.TOKEN_KEY,
                // Doesn't expire
                /*{
                    expiresIn : "24h",
                }*/
            );

            return res.status(200).json({
                userDetails: {
                    mail : user.mail,
                    token : token,
                    username : user.username,
                },
            });
        }

        // Otherwise 
        return res.status(400).send('Invalid credentials, Please try again');
    } catch (err) {
        return res.status(500).send('Server Dead. Something went wrong -> ');
        console.error(err);
    }
};

module.exports = postLogin;