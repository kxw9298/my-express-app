var user_service = require('../services/userService');


// Display list of users.
exports.user_list = function(req, res) {
    var user_list = user_service.user_list();
    res.send(user_list);
};