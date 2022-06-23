const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth/authControllers');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const registerValidatorSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    mail: Joi.string().email().required(),
});

const loginValidatorSchema = Joi.object({
    mail: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required()
});


router.post('/register', validator.body(registerValidatorSchema), authControllers.controllers.postRegister);
router.post('/login', validator.body(loginValidatorSchema), authControllers.controllers.postLogin);

module.exports = router;