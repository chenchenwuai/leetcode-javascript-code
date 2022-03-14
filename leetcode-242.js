
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  if (s === t) return true
  var hashObj = {}
  var letter = ''
  for (let i = 0; i < s.length; i++) {
    letter = s[i];
    if (!hashObj[letter]) {
      hashObj[letter] = 1
    } else {
      hashObj[letter]++
    }
  }
  for (let i = 0; i < t.length; i++) {
    letter = t[i];
    if (typeof hashObj[letter] === 'undefined' || hashObj[letter] <= 0) {
      return false
    } else {
      hashObj[letter]--
    }
  }
  return true
};

var params = [
  ['anagram', 'nagaram'],
  ['aacc', 'ccac']
]
var res1 = isAnagram(...params[0])
console.log('res1', res1)
var res2 = isAnagram(...params[1])
console.log('res2', res2)