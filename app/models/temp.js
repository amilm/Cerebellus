module.exports = function(mongoose) {

	var modelObject = {};

	var Schema = mongoose.Schema,
 	ObjectId = Schema.ObjectId;
 	

 	var TempSchema = new  Schema({
			_id: ObjectId,
			TempId: {type: Number, required:true},
		   Temperature: {type: String,  required:true}
	});

modelObject.Temp = mongoose.model('temp', TempSchema, "Temperature");

	return modelObject;
}
