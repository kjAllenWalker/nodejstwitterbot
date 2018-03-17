console.log('Bot is starting...');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', whoFollowed);

function whoFollowed(who){
	var name = who.source.name;
	var screen_name = who.source.screen_name;
	PostFollow('@' + screen_name + ' followed me. Yay!');
	console.log(screen_name);
}

//Post
function PostFollow(postIt){
	//var tweet = {status: ####};
	var tweet = {status: postIt};
	T.post('statuses/update', tweet,
		function(err, data, response){
			if (err){
				console.log('Error');
			}
			else{
				console.log('Complete');
			}
		}
	)
}