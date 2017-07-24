
// Deals only with an array of sentences strings


// get an array of { prev: [word, word], next: word}
const createPairs = (sentences) => {
    return sentences.reduce( 
        (prev, current) => prev.concat(createPairsSingle(current)),
        []
    );
}

const createPairsSingle = (words) => {
    const pairs = [];
    for (var i = 1; i< words.length; i++){
        var pair = {
            prev: [words[i-1]],
            // prev: [words[i-2], words[i-1]],
            next: words[i]
        };
        pairs.push(pair);
        if (i == 1) {
        // if (i == 2) {
            pairs.push({
                prev: ["{*START}"],
                // prev: ["{*START}", words[i-2]],
                next: words[i-1]
            })
        }
        if (i == (words.length-1)){
            pairs.push({
                prev: [words[i]],
                // prev: [words[i-1], words[i]],
                next: "{*END}"
            })
        }
    }
    return pairs;
}

const createParody = (sentences, linksParam, recursionCount) => {
    const links = linksParam? linksParam : createPairs(sentences);
    var recurCount = recursionCount? recursionCount+1 : 0;

    var sentence = pickRand(links.filter(L => L.prev[0] == "{*START}")).prev;   

    while (addNext(links, sentence)){}

    sentence = sentence
    .splice(1, sentence.length-2)
    .join(' ');

    if (sentence.length > 140 || sentence.length < (70 - recurCount)) {
        if (recurCount > 1000) {
            throw new Error("Couldn't generate a valid tweet.");
        }
        return createParody(sentences, links, recurCount);
    }
    return sentence;
}

const addNext = (links, sentence) => {
    // var prev1 = sentence[sentence.length-2];
    // var prev2 = sentence[sentence.length-1];
    var prev1 = sentence[sentence.length-1];
    if (prev1 === "{*END}"){
        return false;
    }
    const validLinks = links.filter((L) => 
    (L.prev[0] == prev1));
    // (L.prev[0] == prev1 && L.prev[1] == prev2));
    console.log("prev word: ", prev1, " sentence: ", sentence.join(' '))
    console.log("valid links: ", validLinks);
    var nextword = pickRand(validLinks).next;
    sentence.push(nextword)

    return true;
}

const pickRand = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = {createParodyTweet: createParody};