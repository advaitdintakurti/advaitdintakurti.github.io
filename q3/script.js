const textarea = document.querySelector('textarea');
const result = document.querySelector('.result');
const spans = document.querySelectorAll('span');

const pronouns = [
    'I', 'me', 'my', 'mine', 'myself',
    'we', 'us', 'our', 'ours', 'ourselves',
    'you', 'your', 'yours', 'yourself', 'yourselves',
    'they', 'them', 'their', 'theirs', 'themselves',
    'he', 'him', 'his', 'himself',
    'she', 'her', 'hers', 'herself',
    'it', 'its', 'itself',
    'who', 'whom', 'whose',
    'what', 'which',
    'this', 'that', 'these', 'those',
    'everyone', 'everybody', 'anyone', 'anybody', 'someone', 'somebody', 'no one', 'nobody'
];

const prepositions = [
    'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'as', 'at',
    'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond', 'but', 'by',
    'concerning', 'considering',
    'despite', 'down', 'during',
    'except', 'excepting', 'excluding',
    'following', 'for', 'from',
    'in', 'inside', 'into',
    'like',
    'near',
    'of', 'off', 'on', 'onto', 'opposite', 'out', 'outside', 'over',
    'past', 'per', 'plus',
    'regarding',
    'since',
    'than', 'through', 'to', 'toward', 'towards',
    'under', 'underneath', 'unlike', 'until', 'up', 'upon',
    'versus', 'via',
    'with', 'within', 'without'
];

const indefiniteArticles = [
    'a', 'an', 'some', 'any', 'many', 'much', 'few', 'several',
    'a lot of', 'lots of', 'plenty of', 'a great deal of', 'a large amount of', 'enough'
];

textarea.addEventListener('input', function () {
    const text = this.value;

    const letters = (text.match(/[a-zA-Z]/g) || []).length;

    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

    const spaces = (text.match(/ /g) || []).length;

    const newlines = (text.match(/\n/g) || []).length;

    const special = (text.match(/[^\w\s]/g) || []).length;

    spans[0].textContent = letters;
    spans[1].textContent = words;
    spans[2].textContent = spaces;
    spans[3].textContent = newlines;
    spans[4].textContent = special;

    const singleWords = text.toLowerCase().match(/\b\w+(?:'[a-z]+)?\b/g) || [];
    
    const pronounc = catcounter(text, singleWords, pronouns);
    const prepositionc = catcounter(text, singleWords, prepositions);
    const articlec = catcounter(text, singleWords, indefiniteArticles);
    
    printcounts({
        'pronouns': pronounc,
        'prepositions': prepositionc,
        'indefinite-articles': articlec
    });
});

function catcounter(text, tokens, wordList) {
    const counts = {};
    const lowered = text.toLowerCase();
    
    for (const word of wordList) {
        const loweredword = word.toLowerCase();
        
        if (loweredword.includes(' ')) {
            let count = 0;
            let position = lowered.indexOf(loweredword);
            
            while (position !== -1) {
                count++;
                position = lowered.indexOf(loweredword, position + 1);
            }
            
            if (count > 0) {
                counts[word] = count;
            }
        } else {
            const count = tokens.filter(token => token === loweredword).length;
            if (count > 0) {
                counts[word] = count;
            }
        }
    }
    
    return counts;
}

function printcounts(catcounts) {
    console.clear();
    
    let output = '';
    
    for (const [category, counts] of Object.entries(catcounts)) {
        const entries = Object.entries(counts).filter(([_, count]) => count > 0);
        
        if (entries.length !== 0) {
            const sentries = entries.sort((a, b) => b[1] - a[1]);
            const textcounts = sentries.map(([word, count]) => `${word}: ${count}`).join('\n');
            output += `${category}:\n${textcounts}\n\n`;
        }
    }
    
    spans[5].textContent = output;
    console.log(output);
}