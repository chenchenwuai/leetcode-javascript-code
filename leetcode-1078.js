var findOcurrences1 = function (text, first, second) {
  const words = text.split(' ')
  return words.reduce((acc, cur, i) => {
    if (second === cur && words[i - 1] === first && words[i + 1]) {
      acc.push(words[i + 1])
    }
    return acc
  }, [])
};
var findOcurrences2 = function (text, first, second) {
  return text.match(new RegExp(`(?<=\\b${first} ${second} )[a-z]+`, 'g')) || [];
};

var text1 = 'alice is a good girl she is a good student'
var first1 = 'a'
var second1 = 'good'
var a1 = findOcurrences1(text1, first1, second1); console.log('a1', a1)

var text2 = 'we will we will rock you'
var first2 = 'we'
var second2 = 'will'
var a2 = findOcurrences2(text2, first2, second2); console.log('a2', a2)