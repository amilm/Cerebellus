 
module.exports = function(mongoose) {

	var modelObject = {};

	var Schema = mongoose.Schema,
 	ObjectId = Schema.ObjectId;
 	//DocumentObjectId = mongoose.Types.ObjectId;

 	/*var Roles = new  Schema({
			_id: ObjectId,
		   name: {type: String,  required:true},
	description: {type: String}

	});*/

 	var UserSchema = new Schema({
 			 _id: ObjectId,
 		username: { type: String, required: true},
 		   email: { type: String, required: true},
 		password: { type: String},
 			salt: { type: String},
 	  last_login: { type: Date},
 	date_created: { type: Date} 	

 	});

	//modelObject.UserSchema = UserSchema;
	modelObject.User = mongoose.model('user', UserSchema, "Users");

	return modelObject;
}