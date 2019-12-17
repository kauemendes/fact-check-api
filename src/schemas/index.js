const Joi = require('joi') 
const schemas = { 
  uriSchema: Joi.object().keys({ 
    uri: Joi.string().uri().required()
  }) 
  // define all the other schemas below 
}; 
module.exports = schemas;