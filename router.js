const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


// export function, import into index.js and pass app into function
//route handler
module.exports = function(app) {
    //define route
    app.get('/', requireAuth, function(req, res) {
        res.send({ message: 'Super secret code is ABC123' });
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}