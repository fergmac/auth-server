// local definition of what a user is
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // we use to tell mongoose about particular fields model should have

// Define model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// Create model class

// Export the model