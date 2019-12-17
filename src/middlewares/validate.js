const Joi = require('joi'); 

module.exports.validateMiddleware = ((schema, property) => { 
  return (req, res, next) => { 
        const { value, error } = Joi.validate(req.body, schema);
        const valid = error == null; 

        try {
            if (!valid) throw error;
            next();
        } catch (error) {
            const { details } = error; 
            const message = details.map(i => i.message).join(',');
            console.log("error", message); 
            res.status(422).json({ error: message })
        }
    }
});