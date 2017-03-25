const User = require('../models/user');

exports.signup = function(req, res, next) {
    // .body = anything contained within post request
    const email = req.body.email;
    const password = req.body.password;

    if ( !email || !password ) {
        return res.status(422).send({ error: 'You must provide email and password' });
    }
    
    // See if user with given email exists
    User.findOne({ email: email }, function(err, existingUser) {
        if(err) { return next(err); }

    // If user with email does exist return an error
        if (existingUser) { 
            return res.status(422).send({ error: 'Email is in use' });
        }

     // If a user with email does NOT exist, create and save user record
        const user = new User({
            email: email,
            password: password
        });
        //saves record to database, in memory before this step
        user.save(function(err) {
            if (err) { return next(err); }
        });


      // Respond to request indicating the user was created
      res.json({ success: true });
    });
}
