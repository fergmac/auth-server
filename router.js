const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', { session: false });


// export function, import into index.js and pass app into function
//route handler
module.exports = function(app) {
    //define route
    app.get('/', requireAuth, function(req, res) {
        res.send({ hi: 'there' });
    });
    app.post('/signup', Authentication.signup);
}