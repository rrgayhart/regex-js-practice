var knownEnthusiasmWords = ['wow', 'yay', 'yeah', 'omg', 'kittens'];

function Enthusiasm(text){
  this.text = text;
}

Enthusiasm.prototype.wordCount = function(name){
  var re = new RegExp(name)
  var match = this.text.match(re);
  return match ? match.length : 0;
  // this solution will get one test passing but not all... see the test for halp
}

Enthusiasm.prototype.exclamatorySentences = function(){
  return '(=^..^=)';
}

Enthusiasm.prototype.superExclamatorySentences = function(){
  return '(=^..^=)';
}

Enthusiasm.prototype.capslockCount = function(){
  var re = /([^a-z]+)/g;
  // This regex will NOT cover edge cases! Or most cases! Warning!
  var match = this.text.match(re)
  return match ? match.length : 0;
}

Enthusiasm.prototype.usageOfKnownEnthusiasmWords = function(){
  return [];
}