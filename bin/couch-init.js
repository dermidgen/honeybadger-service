var client = require('grave').connect('localhost', 5984);
var db = client.db('honeybadger');

db.exists(function(err, exists){
	if (err) {
		throw(err);
	}

	if (exists) {
		console.log('Database already setup');
	} else {
		console.log('Database does not exist.');
		db.create();
	} 
});