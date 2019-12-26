const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        password: Joi.string().min(6).required(),
        type: Joi.string().required()
    });

    // Lets Validate
    return schema.validate(data); 
};

module.exports.registerValidation = registerValidation;


// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        phone: Joi.string().required(),
        password: Joi.string().min(6).required()
    });

    // Lets Validate
    return schema.validate(data); 
};

module.exports.loginValidation = loginValidation;