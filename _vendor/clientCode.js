$(document).ready(function(){
  var commitString = payloadData.join('\n ');
  var e = new Enthusiasm(commitString);

  var pooCount = e.wordCount('shit');
  $('.poo span').text(pooCount);

  var fix = e.wordCount('fix');
  $('.fix span').text(fix);

  var merge = e.wordCount('merge');
  $('.merge span').text(merge);

  var create = e.wordCount('create');
  $('.create span').text(create);

  var numEnthusiasticCommits = e.exclamatorySentences();
  $('.enth').text(numEnthusiasticCommits);

  var numSUPEREnthusiasticCommits = e.superExclamatorySentences();
  $('.super-enth').text(numSUPEREnthusiasticCommits);

  var capslockAbuse = e.capslockCount();
  $('.caps span').text(capslockAbuse);

  var enthusiasm = e.usageOfKnownEnthusiasmWords() || [];
  $('.enth-words span').text(enthusiasm.join(', '));
});