var client = require('twilio')('ACbfe1068ee9da0ee20cf72aabc93159c8', '6fd35273118ca42fbd62d75d7bbbb843');
var dash_button = require('node-dash-button');

var dash = dash_button('44:65:0d:66:87:c4'); //address from step above

var numbers = [
	'+447479041444',
	'+447748988224'
];

function notify(number) {
	client.messages.create({
		body: 'Tea is ready',
		to: number,
		from: '+441484906118'
	}, function() {
		console.log(arguments);
	});
}

dash.on('detected', function (){
	for (var i = 0, l = numbers.length; i < l; i++) {
		console.log('Button pressed');
		notify(numbers[i]);
	}
});
