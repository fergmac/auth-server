// export function, import into index.js and pass app into function
//route handler
module.exports = function(app) {
    //define route
    app.get('/', function(req, res, next) {
        res.send(['waterbottle', 'phone', 'guitar']);
    });
}