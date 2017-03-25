const Authentication = require('./controllers/authentication');

// export function, import into index.js and pass app into function
//route handler
module.exports = function(app) {
    //define route
    app.post('/signup', Authentication.signup);
}