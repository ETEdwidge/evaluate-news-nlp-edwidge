 function validateR(req, res, next) {
    if(!req.body.text ) {
        return res.status(400).json({
           message: 'Your input is invlaid'
        })
    } 
    return next();
}

function registerR(req, res, next) {
    
    var aylien = require("aylien_textapi");
    // set aylien API credentias
    var textapi = new aylien({
 		application_id: process.env.API_ID,
  		application_key: process.env.API_KEY
    });
    console.log("making request for article analysis: ", req.body.text);
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    }); 
 
}

exports.validateR = validateR;
exports.registerR = registerR;