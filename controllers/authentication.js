const User = require('../models/user');

exports.signup = function(req, res, next) {
    // .body = anything contained within post request
    const email = req.body.email;
    const password = req.body.password;
    
    // See if user with given email exists
    User.findOne({ email: email }, function(err, existingUser) {

    });
    // If user with email does exist return an error

    // If a user with email does NOT exist, create and save user record

    // Respond to request indicating the user was created
}
