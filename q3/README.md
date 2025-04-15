## Assumptions

### Numbers
Numbers are **not** considered as letters, but they *are* considered while counting number of words.

### Nested
For pronouns/articles/prepositions that have more pronouns/articles/prepositions inside them, the ones inside are also counted.

Ex: in "a great deal of", which is an article itself, "a" and "of" are also counted.

### Output
For Part A (Calculate and display number of letters, words, spaces, newlines and special symbols), the output is just shown in the browser window. For the remaining parts, the output is *printed* onto the console *and* displayed in the borwser window.

### Pronouns
```
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
```

### Prepositions
```
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
```

### Indefinite Articles
```
const indefiniteArticles = [
    'a', 'an', 'some', 'any', 'many', 'much', 'few', 'several', 
    'a lot of', 'lots of', 'plenty of', 'a great deal of', 'a large amount of', 'enough'
];
```