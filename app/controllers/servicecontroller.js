module.exports = function (app, service) {
//UpdateTemp(temp; location)
// //UpdateHumidity(humidity, location)
	var tempModel = service.useModel('temp');

	app.post('/service/temperature/update', function (req, res) {

    	tempModel.Temp.findOne({TempId: 1}, function(err, temp) {

    		temp.Temperature = req.body.Temperature;
    		temp.save(function (err) {
	    		if (!err)	{			     	
			     	return res.send({Status: "Success"});
			     }
			     else {
			     	return res.send({Status: err.message});
			     }
    		});

    	});

  	}); 

  	app.get('/temp', function(req, res) {
		
		
		tempModel.Temp.findOne({TempId: 1}, function(err, temp) {
			if (err) {
				console.log(err);
			}
			if (temp == null){
				console.log('Temp object is null')
			}			
			
			res.render('temperature', {title: 'Temperature', temperature: temp.Temperature})
		});
	});	
    	
}

