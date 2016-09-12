var client = require('twilio')(process.env.TWILIOID, process.env.TWILIOSECRET);
var dash_button = require('node-dash-button');
var int_array_to_hex = require('node-dash-button/helpers.js').int_array_to_hex;
var hex_to_int_array = require('node-dash-button/helpers.js').hex_to_int_array;
var decoders = require('cap').decoders;

var dash = dash_button('44:65:0d:66:87:c4', null, null, 'both'); //address from step above

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

// var pcap = require('pcap');

// var filter = 'udp and ( port 67 or port 68 )';

// var session = pcap.createSession('', filter);

// session.on('packet', function(raw_packet) {
// 	var packet = pcap.decode.packet(raw_packet);

// 	console.log('beep');

// 	console.log(int_array_to_hex(packet.payload.shost.addr));

// 	try {
// 		console.log(int_array_to_hex(packet.payload.payload.sender_ha.addr));
// 	}
// 	catch(e) {
// 		console.log('err')
// 	}

// });

