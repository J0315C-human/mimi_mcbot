const Twit = require('twit');
const markov = require('./markov-words.js')
require('dotenv').config();

const TWEETS_MIN = 3000;
const GET_TWEET_AMT = 100;
const RANDOM_USER_STREAM_MS = 3000;

const T = new Twit({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
});

var stream = T.stream('statuses/filter', { 
    track: [ "here", "when", "these", "this", "those", "as", "I" ], 
    language: 'en' }
)

var users = [];
var chosen = '';

function popRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr.splice(index, 1)[0];
}

// get user tweets, excluding retweets unless they don't have enough 'status' tweets
function getUserTweets(username){
    return T.get('search/tweets', { q: `from:${username} exclude:retweets`, count: GET_TWEET_AMT })
}


// process tweets into consumable form for markov-words functions
function processResults(data) {
    const tweets = data.statuses.map(t => sanitizeTweet(t.text))
    console.log(`Statuses for ${chosen.screen_name}:\n`, tweets);
    return Promise.resolve(tweets.map(t => t.split(/\s+/)));
}


// remove junk from replies and retweets
function sanitizeTweet(t) {
    return t.replace(/^RT @(\S*)/, '')
    .replace(/^@(\S*)/, '')
    // .replace(/(\S*)…$/, '')
    .trim()
}

// the only function in this file that deals with markov-words stuff
function getParodyAndTweet(sentences, screen_name) {
    const parody = `@${screen_name}: ${markov.createParodyTweet(sentences)}`;
    console.log(parody);

    T.post('statuses/update', { status: parody }, function(err, data, response) {
        console.log('data from callback:', (data.text || data))

    })
}

// start up stream to get a bunch of tweets
stream.on('tweet', function (tweet) {
    const u = tweet.user;
    users.push({
        screen_name: u.screen_name,
        statuses_count: u.statuses_count,
    })
})


// find a user with 100 non-retweet statuses
function pickUserCheckTweets() {
    if (users.length === 0){
        throw new Error("No user found with 100 statuses");
    }
    
    chosen = popRandom(users);
    console.log(`chosen: ${chosen.screen_name} - users left ${users.length}`);

    return getUserTweets(chosen.screen_name)
    .then(result => {
        if (result.data.statuses.length < GET_TWEET_AMT){
            console.log(`user had only ${result.data.statuses.length} tweets, retrying.`)
            return pickUserCheckTweets();
        } else {
            return result;
        }
    })
}


// pick a user, check their tweets, generate parody, and tweet 'em
setTimeout(() => {
    console.log("stopping stream");
    stream.stop();

    var userFlag = process.argv.indexOf('user');

    var getTweets, user_arg;

    if (userFlag > 0){ // tweet to a specific user
        chosen = {screen_name: process.argv[userFlag + 1]};
        getTweets = () => getUserTweets(chosen.screen_name);
    } else {
        users = users.filter(u => u.statuses_count > TWEETS_MIN);
        getTweets = () => pickUserCheckTweets();
    }

    getTweets()
    .then(result => processResults(result.data)
        .then((sentences) => getParodyAndTweet(sentences, chosen.screen_name)))
    //.catch(err => console.log(err.message))
}, RANDOM_USER_STREAM_MS)
