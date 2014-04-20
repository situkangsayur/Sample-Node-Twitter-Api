var twitterAPI = require('node-twitter-api');

var twitter = new twitterAPI({
    consumerKey: 'D5NfrZp4........',
    consumerSecret: 'YkPdi1giCz3WYmPYB.........zncNiks',
    callback: 'https://twitter.com/zack_syah'
});

var accessToken = '22548834...............hudzufUo',
    accessTokenSecret = 'wlJ80gWicFx82V...........a7FuPm';
var twitt = 'syalalala... nodejs is the best broh...!!!'; 
var i=0;
twitter.getTimeline("user",{
	screen_name : 'peys032',
	count:130
    },	
    accessToken,
    accessTokenSecret,
    function(error, data, response) {
        if (error) {
            // something went wron
		console.log('error');
        } else {
		
            // data contains the data sent by twitter
		for(i=0;i<130;i++){
			console.log(i+' '+data[i]["text"]+'\n');
		}
	} 
    }
);


