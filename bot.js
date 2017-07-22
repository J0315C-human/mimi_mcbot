const Twit = require('twit');
const markov = require('./markov-words.js')
require('dotenv').config();

const TWEETS_MIN = 3000;
const GET_TWEET_AMT = 100;
const RANDOM_USER_STREAM_MS = 1000;

const testinput = [ 'RT @LoveIslandNot: When your mate asks if you wanna go out for some drinks #LoveIsland  https://t.co/fFWNdIdcQO',
  'RT @emilykrees: Lying on the beach in maga and a phone went off, boy behind me stood up and at the top of his voice went "guys I got a text…',
  'RT @m4gicg4ng: Remember when you were younger and ur pal said they would tell on you, put their hand up and then ask to go to the toilet, t…',
  'RT @AlexAlphonso_: This sums up my day https://t.co/6yiw1mHMzG',
  'RT @gideon10k: Everyone is abroad, I feel like a dickhead.',
  'RT @ohhcami_: Never regret being a good woman to the wrong man, his loss.',
  'RT @MayaJama: Sometimes I see girls touch my boyfriend an I wana wrap him in electric fencing with a sign that says "piss off" 😂 but only s…',
  'RT @tineekamonet: I remember I was mid argument with a boy I used to speak to &amp; i stuck my middle finger up, he responded by telling me I n…',
  'RT @ManLikeKofii: The worst one is when you can feel them giving you the eye but if you look back you\'ll lose all composure😂😭 https://t.co/…',
  'RT @__Albatraoz__: My grandma is a nut. My grandfather passed and my grandma said "he got a lot of nerve pulling some shit like this today"😂' ];

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

function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// get user tweets, excluding retweets unless they don't have enough 'status' tweets
function getUserTweets(username){

    return T.get('search/tweets', { q: `from:${username} exclude:retweets`, count: GET_TWEET_AMT })
    .then((result) => {
        console.log("result.data.statuses length", result.data.statuses.length)
        if (result.data.statuses.length > GET_TWEET_AMT){
            return result;
        } else {
            return T.get('search/tweets', { q: `from:${username}`, count: GET_TWEET_AMT });
        }
    })
}



function printresults(data) {
        console.log("number of statuses:", data.statuses.map(t => t.text))
}




// remove junk from replies and retweets
function sanitizeTweet(t) {
    return t.replace(/^RT @(\S*)/, '')
    .replace(/^@(\S*)/, '')
    // .replace(/(\S*)…$/, '')
    .trim()
}

// the only function in this file that deals with markov-words stuff
function getSentence() {

    return 
}

///?TEST
console.log("Sanitized Tweets:")
console.log(testinput.map(s => sanitizeTweet(s)))
console.log("\n\n")



// stream.on('tweet', function (tweet) {
//     const u = tweet.user;
//     users.push({
//         screen_name: u.screen_name,
//         statuses_count: u.statuses_count,
//     })
// })

// setTimeout(() => {
//     console.log("stopping stream");
//     stream.stop();
//     // PICK A SEMIRANDOM USER OUT OF STREAM
//     const chosen_one = chooseRandom(users.filter(u => u.statuses_count > TWEETS_MIN))

//     console.log(chosen_one)

//     getUserTweets(chosen_one.screen_name)
//     .then(result => printresults(result.data))
// }, RANDOM_USER_STREAM_MS)

// T.post('statuses/update', { status: phrase }, function(err, data, response) {
//   console.log('data from callback:', data)
// })