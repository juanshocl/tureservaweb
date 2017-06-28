var mongoose = require("mongoose");
var Schema = mongoose.Schema:

mongoose.connect("mongodb://localhost/tureservaonline");

var user_schema = new Schema({
    name: String,
    last_name: String,
    username: String,
    password: String,
    age: Number,
    email: String,
    date_of_birth: Date    
});

user_schema.virtual("passowrd_confirmation").get(function(){
    return this.p_c;
}).set(function(password){
    this.p_c = password;
});

var User = mongoose.model("User", user_schema);
