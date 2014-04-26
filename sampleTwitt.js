var twitterAPI = require('node-twitter-api');
var fs = require('fs');

var twitter = new twitterAPI({
    consumerKey: 'D5NfrZp4DzELTueZbLspnA',
    consumerSecret: 'YkPdi1giCz3WYmPYBesR1xMQDG3ks2UgqRK9zncNiks',
    callback: 'https://twitter.com/zack_syah'
});

var accessToken = '2254883460-oXvXGdZvxNU4nYojVeMqO2CjawGvsy0hudzufUo',
    accessTokenSecret = 'wlJ80gWicFx82VFxCLegYzZJk0qUmxc6rA8rNAua7FuPm';
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


