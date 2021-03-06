// local definition of what a user is
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // we use to tell mongoose about particular fields model should have
const bcrypt = require('bcrypt-nodejs');

// Define model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// On save Hook, encrypt password
// Before savinga  model, run this function
userSchema.pre('save', function(next) {
    // get access to user model
    const user = this; 

    // generate a salt then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }

        // hash (encrypt) our password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) {  return next(err); }

            // overwrite plain text password with encrypted password
            user.password = hash;
            next();
        });
    });
}); 

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    // is candidatePassword equal to password in DB
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
}

// Create model class
const ModelClass = mongoose.model('user', userSchema); // add model as schema to mongoose

// Export the model
module.exports = ModelClass;