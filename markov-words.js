
// Deals only with an array of sentences strings
var testText = [ '@KCastAuthor I 💖you.',
  'Because @realDonaldTrump isn\'t just a coarse, inept buffoon. He\'s spiteful. #BabyMenGottaGo https://t.co/101YQZj9zE',
  '❤️💋❤️',
  '@JordanCarleton2 @KCastAuthor Sending 💋❤️💋 to @WednesdayBooks!',
  '@KCastAuthor @KLSilverproduct Done! ❤️',
  'It\'s going to be part of a montage!  Haven\'t posted it yet. https://t.co/Y0pUx52Ryh',
  'Xena Warrior Princess Cast loves #Caturday AND she\'s a beast! https://t.co/UwbyHpsnHS',
  'Yes. Yes. Yes!',
  'I used to write during the 6 min passing periods between the HS classes I taught. Took publishing 18 books before I… https://t.co/GUc3rA097j',
  '@HillaryClinton has zero to do with your shit show. We won\'t be deflected by your childish nonsens… https://t.co/24fKLLaXvU',
  '@KCastAuthor Enjoy! 💋❤️💋',
  'There are signed copies waiting for you at the store! 💖 https://t.co/T811dMSinD',
  '@KCastAuthor It\'ll be out next July!  I\'m working on it right now.',
  '@KCastAuthor @AtomBooks Yaaasss! 😁',
  'https://t.co/zYx6rIsGvm',
  'If you couldn\'t make it we signed a bunch of stock!  Hurry before they\'re gone! https://t.co/u2q1PlOOne',
  '@KCastAuthor I love seeing those well read books! ❤️👏❤️',
  '@KCastAuthor Yaaasss!!',
  '@KCastAuthor No problem!  Thank you for coming!',
  '@AtomBooks passed on publishing the new HoN.We apologize that they have let you down.LOVED is available… https://t.co/r1wyNGA0JX',
  'She\'s gorgeous!',
  '@KCastAuthor Sure, if the book ever gets published in the U.K...',
  '@KCastAuthor There\'s one already available through Amazon.',
  '💋❤️💋',
  'Well done!  Don\'t let the haters spoil this.',
  '💋❤️💋',
  'When our Brazilian publisher brings us over!',
  'Gorgeous!',
  'Awesomesauce! #HoNLOVED https://t.co/2YC41ijffJ',
  '@JamesMeetsFame @ASummerHigh @iAmMasonLevi @lukeoxendale @btebrendan @EthanMartel @MattDomke… https://t.co/0n4i5VTX4Z',
  '@KCastAuthor ❤️💋❤️',
  '@KCastAuthor ❤️💋❤️',
  'We\'re fantastic!',
  'another tweet that didn\'t age well, huh Donald? #unfit #vacationerinchief45 https://t.co/UW4Hw7TfPF',
  'This is bullshit. #resist. https://t.co/tmSG8JDYey',
  'Thank you to our loyal readers. We ❤️ you so much! I\'m working on the next book right now! #HoNFOREVER https://t.co/ZlT4TWtPMP',
  '@theonyxraven @KCastAuthor 💋❤️💋',
  '@KCastAuthor Time for a new shelf! 👏😁👏',
  'Gayest ark ever!  I 🦄 it! https://t.co/U49zrFNgkh',
  'See you soon Seattle! #HoNTOUR #HoNLOVED https://t.co/Sz6pHfUPmb',
  '@BlackstoneAudio I have more outlined and would love to write them!',
  'Quality takes time...',
  '@KCastAuthor Thank you!  ❤️',
  'Yaaasss it is!  Thank you @BlackstoneAudio!  ❤️ https://t.co/EU2GZYaVGg',
  '@KCastAuthor We are #HoNLOVED #HoNTOUR or #HoNFOREVER. ❤️',
  'July 2018!! https://t.co/TB9sp41SvK',
  '@KCastAuthor It releases in October in Brazil and where we go is up to our publisher!',
  '@KCastAuthor  https://t.co/msAbqxMqYg',
  '@KCastAuthor You are most welcome!  Blessed be!',
  '@KCastAuthor Love it!',
  'Follow me. I always announce well ahead of time on my social media.',
  'it\'s a mistake to think the resistance is just a democrat thing. It\'s a decent human being thing. THAT… https://t.co/lfmQXN7k2Y',
  '@GOP You are a loathsome creature.',
  'You are either a petulant child or a buffoon. You are definitely not a decent human being. #25ththe45th #unfit',
  '@KCastAuthor Thank you for our lovely gifts! ❤️',
  '@KCastAuthor We\'re coming to Philly in October!',
  '@KCastAuthor @BookPeople Thank you for coming!  We had a blast! @BlackstoneAudio',
  'Xena Warrior Princess Cast has stars in her eyes.  #MaineCoonLove https://t.co/Xdxznvihnz',
  '@ItsmeEmily23 @AuthorCJackson @KCastAuthor September!',
  '@BookPeople @KCastAuthor Thank you for coming! ❤️',
  'Nope. Nothing like that at all. 😳',
  'No vamps can have babies. Ever. Aphrodite isn\'t human. She can\'t conceive.',
  '@KCastAuthor  https://t.co/V76UuEMDlC',
  '@crossroadreview @AuthorCJackson @KCastAuthor Lanyards are only for our totally awesome Street Team. They\'re The Best!',
  '@AuthorCJackson @KCastAuthor Yaaasss!  That\'s our awesome Street Team!  They rock (and we send them cool stuff).',
  '❤️💋❤️',
  '@KCastAuthor @BookPeople LOVED will wait for you. I\'m so sorry to hear about your grandma. 💔',
  'Awesome time at @BookPeople !  Thank you Austin! https://t.co/3PCLVuZB6P',
  'Ladies we need to lead the battle against ignorance not for it. Let\'s do better than this! https://t.co/wPr6opf0od',
  'Please whiny babymen. Your insecurities are pathetic. #NoOneCares #TellYourMommies https://t.co/8cFWeJGmv0',
  '@FANEXPOCANADA @KCastAuthor Ooooh!  Fun!',
  'Sadly our publisher @AtomBooks passed on publishing the new books.We\'re so sorry they\'re letting dow… https://t.co/RCzyeurgIq',
  'See you at the party Austin!  @BookPeople 7:00! #HoNLOVED #HoNTOUR https://t.co/G4LYSTpnn9',
  '@KCastAuthor 💋❤️💋',
  '@KCastAuthor We can\'t wait! #HoNTOUR #HoNLOVED',
  'HELL YES! https://t.co/LTgxL0rZeL',
  'Revoke and jail! https://t.co/ma4Ukvttkg',
  '#unfit https://t.co/r8YXYyF8nb',
  'https://t.co/32vq2wHqCC',
  'Real, decent men will think it\'s great. Whining insecure babymen will, well, WHINE. #GetOverYourselves https://t.co/IWHKnVp6pQ',
  'Fired?  How about jailed? https://t.co/7RKfzbHWNU',
  '@KCastAuthor Not unless our lovely French fans get vocal and tell @pocket_jeunesse to publish it!',
  'Hello Austin!  See you tomorrow at @BookPeople! https://t.co/iNcqjJeObL',
  'So damn true. https://t.co/ba4Byncu5h',
  '@KCastAuthor Awww!  Thank you!💋❤️💋',
  'Sun Warrior will be out in October!  You get to learn a lot about Antreas &amp; Bast. 💖',
  '@KCastAuthor As do I.',
  'Happy birthday!',
  '@KCastAuthor @BookPeople Yaaaassss!  Can\'t wait!',
  '@KCastAuthor Thank you!  This is an important book for Aphrodite. She finds herself.',
  '@KCastAuthor You are most welcome!  It was a lot of fun returning to the HoN.',
  '@BNHarMar Thank you for coming!  It was so fun to meet you!💥👏💥',
  '@KCastAuthor Yes, it was Aurox\'s sacrifice that entombed Neferet.',
  'Oooooooh!  Yes!',
  'Yaaaassss! https://t.co/blS1v527fr',
  '@KCastAuthor 💋❤️💋',
  '@KCastAuthor Thank you!❤️💋❤️',
  'They don\'t have any gays????  #assholes',
  '@BNHarMar They were great!  And the fans were lovely!  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
  '@KCastAuthor You won\'t. Our Uk publisher @AtomBooks passed on pubbing it. They think you can\'t be bothere… https://t.co/QfcbiWHzk3' ]
.map(t => t.split(/\s+/));

// get an array of { prev: [word, word], next: word}
const createPairs = (sentences) => {
    return sentences.reduce( 
        (prev, current) => prev.concat(createPairsSingle(current)),
        []
    );
}

const createPairsSingle = (words) => {
    const pairs = [];
    for (var i = 2; i< words.length; i++){
        var pair = {
            prev: [words[i-2], words[i-1]],
            next: words[i]
        };
        pairs.push(pair);
        if (i == 2) {
            pairs.push({
                prev: ["{*START}", words[i-2]],
                next: words[i-1]
            })
        }
        if (i == (words.length-1)){
            pairs.push({
                prev: [words[i-1], words[i]],
                next: "{*END}"
            })
        }
    }
    return pairs;
}

const createParody = (links) => {
    var sentence = pickRand(links.filter(L => L.prev[0] == "{*START}")).prev;
    console.log("STart with: ", sentence)
    
    while (addNext(links, sentence) !== "{*END}"){}

    return sentence;
}

const addNext = (links, sentence) => {
    var prev1 = sentence[sentence.length-2];
    var prev2 = sentence[sentence.length-1];

    const validLinks = links.filter((L) => 
    (L.prev[0] == prev1 && L.prev[1] == prev2));
    var nextword = pickRand(validLinks).next;
    sentence.push(nextword)
    return nextword;
}

const pickRand = (arr) => arr[Math.floor(Math.random() * arr.length)];

var testlinks = createPairs(testText.splice(0, 10));
console.log(testlinks);

console.log(createParody(testlinks).join(" "));


module.exports = {}