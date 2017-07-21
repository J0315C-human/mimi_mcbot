const Twit = require('twit');

const T = new Twit({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
});
const phraseArray = [ "hey twitter",
                    "im tweeting",
                    "tweet tweet",
                    "tweetstorm time... 1/22",
                    "plz RT v important",
                    "delete ur account",
                    "it me",
                    "same",
                    "#dogpants go on 4 legs!!",
                    "#thedress is blue and black" ];

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

var stream = T.stream('statuses/filter', { track: "here", language: 'en' })
var ntweets = 1

stream.on('tweet', function (tweet) {
  console.log(`#${ntweets++}: ${tweet.text}`)
})

setTimeout(() => {
    console.log("stopping stream");
    stream.stop();
}, 10000)

// var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);

// T.post('statuses/update', { status: phrase }, function(err, data, response) {
//   console.log('data from callback:', data)
// })