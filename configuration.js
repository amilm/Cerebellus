//configuration module 
//All express and connect configuration must there
module.exports = function(app, express){
    app.configure(function() {
        var hbs = require('hbs');
        app.set('views', __dirname + '/views');
        app.set('view engine', 'hbs');        
        app.use(express.logger(':method :url :status'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser());
        app.use(express.session({secret: 'bingo was his name-o'}));
        app.use(express.compiler({src: __dirname + '/public', enable: ['less']}));
        app.use(app.router);
        app.use(express.static(__dirname + '/public'));

        var blocks = {};

        hbs.registerHelper('extend', function(name, context) {
        var block = blocks[name];
        if (!block) {
            block = blocks[name] = [];
        }

        block.push(context(this));
    });

        hbs.registerHelper('block', function(name) {
        var val = (blocks[name] || []).join('\n');

        // clear the block
        blocks[name] = [];
        return val;
        });
    });

    app.configure('development', function() {
        app.use(express.errorHandler({dumpExceptions: true, showStack: true})); 
    });
    
    app.configure('production', function() {
      app.use(express.errorHandler()); 
    });
};

