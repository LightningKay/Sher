const User = require ('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const postRegister = async  (req, res) => {
    try{

        console.info('Register Called');
        // First check if the email already exists
        const {username, mail, password} = req.body;
        const userExists =  await User.exists({ mail: mail.toLowerCase() });

        if(userExists) {
            return res.status(409).send('E-mail already exists');
        }

        // New User
        const encryptedPassword = await bcrypt.hash(password, 10); // salting


        console.info('Creating new User');
        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword,
        });

        // create JSON WEB TOKEN
        const token = jwt.sign(
            {
                userId : user._id, // This is automatically generated in mongoDB
                mail : user.mail,
            },
            process.env.TOKEN_KEY,
            {
                expiresIn : "24h",
            }
        );

        // Send the resposne back
        res.status(201).json({
            userDetails : {
                mail: user.mail,
                username: user.username,
                token: token
            }
        });

    } catch(err){
        console.error("There was an error in the postRegister Module");
        console.error(err);
    }
}
module.exports = postRegister;