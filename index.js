var client = require('twilio')(process.argv[2], process.argv[3]);
var dash_button = require('node-dash-button');

var dash = dash_button('44:65:0d:66:87:c4', null, null, 'all'); //address from step above

var numbers = process.argv[4].split(',');

function notify(number) {
	client.messages.create({
		body: 'Tea is ready',
		to: number,
		from: process.argv[5]
	}, function() {
		//console.log(arguments);
	});
}

dash.on('detected', function (){
	console.log('Button pressed');
	for (var i = 0, l = numbers.length; i < l; i++) {
		console.log(numbers[i]);
		notify(numbers[i]);
	}
});

console.log('running');

client.messages.create({
	body: 'Application running',
	to: numbers[1],
	from: '+441484906118'
});
