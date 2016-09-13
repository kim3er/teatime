var accountSid = process.argv[2],
	authToken = process.argv[3],
	numbers = process.argv[4].split(','),
	fromNumber = process.argv[5];

var fs = require('fs');

var client = require('twilio')(accountSid, authToken);
var dash_button = require('node-dash-button');

var dash = dash_button('44:65:0d:66:87:c4', null, null, 'all'); //address from step above

function log(message) {
	fs.appendFileSync('log.txt', '[' + Date() + '] ' + message);
}

function notify(number) {
	client.messages.create({
		body: 'Tea is ready',
		to: number,
		from: fromNumber
	}, function() {
		log(number + ' notified.');
	});
}

dash.on('detected', function (){
	console.log('Button pressed');
	for (var i = 0, l = numbers.length; i < l; i++) {
		console.log(numbers[i]);
		notify(numbers[i]);
	}
});

log('Script running.');
