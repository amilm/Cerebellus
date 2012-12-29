var fs = require('fs');

module.exports = function(app, service){
    fs.readdir(__dirname + '/app/controllers', function(err, files){
        if (err) throw err;
        files.forEach(function(file){
            var name = file.replace('.js', '');
            require('./app/controllers/' + name)(app, service);
        });
    });
};

