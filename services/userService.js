var user_repository = require('../repositories/userRepository');

exports.user_list = function() {
    var user_list = user_repository.user_list();
    return user_list;
};