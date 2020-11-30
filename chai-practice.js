const { title } = require('process');

const expect = require('chai').expect;

function titleCase(string) {
  const words = string.split(' ');
  const titleCasedWords = words.map( word => word[0].toUpperCase() + word.substring(1) );

  return titleCasedWords.join(' ');
 
}

expect(titleCase('the island')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('hello')).to.equal('Hello');

expect(titleCase('the island')).to.equal('The Island')