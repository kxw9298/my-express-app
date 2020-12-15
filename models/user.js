var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String, required: true},
    age: { type: Number, min: 18, max: 65, required: true }
}
);

// Virtual for author's full name
UserSchema
.virtual('name')
.get(function () {
  return this.name;
});

//Export model
module.exports = mongoose.model('User', UserSchema);