var twitterAPI = require('node-twitter-api');
var fs = require('fs');

var twitter = new twitterAPI({
    consumerKey: 'D5NfrZp4Dz..............bLspnA',
    consumerSecret: 'YkPdi1giC..........1xMQDG........K9zncNiks',
    callback: 'https://twitter.com/zack_syah'
});

var accessToken = '2254883460-o...............................sy0hudzufUo',
    accessTokenSecret = 'wlJ80gWi..........................a7FuPm';
var twitt = 'syalalala... nodejs is the best broh...!!!'; 
var i=0;
twitter.getTimeline("user",{
	screen_name : 'jokowi_do2',
	count:200
    },	
    accessToken,
    accessTokenSecret,
    function(error, data, response) {
        if (error) {
            // something went wron
		console.log('error');
        } else {
		
		var temp = '';
            // data contains the data sent by twitter
		for(i=0;i<200-2;i++){
			temp = temp + i+' '+data[i]["text"]+'\n\n';
			
			console.log(i+' '+data[i]["text"]+'\n');
		}
		fs.writeFile('twitter-result.txt', temp, function(err){
			if(err){
				
				 return console.log('error file '+ err);
			}
		});
	} 
    }
);


