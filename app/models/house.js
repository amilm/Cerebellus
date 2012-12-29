

var Zones = new Schema({
	zoneId 	: ObjectId,
	name 	: {type:String, required: true}
});

var Locations = new Schema({
	locationId : ObjectId,
	name	: {type: String, required: true, unique: true},
	zone	: {type: String, required: true},
	description: {type: String, required: true},
	temp 	: {
		value		 : {type: Number},
		unit		 : {type: String, required: true},		
		modified	 : { type: Date, default: Date.now }, 
		logged_by	 : String
	}
	humidity : {
		value		 : {type: Number},
		unit		 : {type: String, required: true},
		modified	 : { type: Date, default: Date.now } ,
		loggedby	 : String
	}   	
});

var House = new Schema({
	name	 	: String,
	status	 	: Boolean,
	latitude 	: String,
	longitude   : String,
	zipcode		: Number,
	locations 	: [Locations]
	} 
});
