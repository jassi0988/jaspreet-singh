'use strict'

const SENTENCE = 'The strength of JavaScript is that you can do anything. The weakness is that you will.'

console.log('The whole sentence:', SENTENCE);

console.log('The length of the string:', SENTENCE.length)

console.log('The position of the word "JavaScript":', SENTENCE.indexOf("JavaScript"))

console.log('The position of the last \'is\':', SENTENCE.lastIndexOf("is"))

console.log('The last sentence only:', SENTENCE.substr(SENTENCE.indexOf(".") + 2, SENTENCE.lastIndexOf(".")))

console.log('The 10 characters starting from the 17th character:', SENTENCE.substr(17, 10))

console.log('The number of words in the whole phrase:', SENTENCE.split(' ').length)

console.log('The 61st character:', SENTENCE.slice(61, 62))

console.log('Replace \'you\' with \'I\' in the whole phrase:', SENTENCE.replace("you", "i"))