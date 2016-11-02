describe('Enthusiasm', function() {
  it('should allow you to set text', function(){
    var text = 'I like tuttles!'
    var e = new Enthusiasm(text);
    expect(e).to.have.property('text');
    expect(e.text).to.eq(text);
  });

  it('can find an instance of a certain word', function(){
    var text = 'I heart Fabio.';
    var e = new Enthusiasm(text);
    expect(e.wordCount('Fabio')).to.eq(1);
  });

  xit('handles no matches', function(){
    var text = 'Oh hey.';
    var e = new Enthusiasm(text);
    expect(e.wordCount('Fabio')).to.eq(0);
  });

  xit('can count multiple, case insensitive instances of a certain name', function(){
    var text = 'Fabio is the greatest fabio of all the FabiOs';
    var e = new Enthusiasm(text);
    expect(e.wordCount('Fabio')).to.eq(3);
    // Helpful things to know:
      // Syntax for creating a new RegExp is: new RegExp(pattern[, flags])
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  });

  xit('can count all sentences ending in exclamation points', function(){
    var text = 'WOW! The fans are into these!!!'
    var e = new Enthusiasm(text);
    expect(e.exclamatorySentences()).to.eq(2);
  });

  xit('can count only sentences ending in multiple exclamation points', function(){
    var text = 'WOW! The fans are into these!!!'
    var e = new Enthusiasm(text);
    expect(e.superExclamatorySentences()).to.eq(1);
  });

  xit('can count how many words are in all caps', function(){
    var text = 'email goes to webmaster - NOT to FABIO!';
    var e = new Enthusiasm(text);
    expect(e.capslockCount()).to.eq(2);
  });

  xit('does not partially match capslock', function(){
    var text = 'Kevin McAllister!';
    var e = new Enthusiasm(text);
    expect(e.capslockCount()).to.eq(0);
  });

  xit('it handles capslock edge cases', function(){
    var text = 'WHAT! A challenge! I accept!';
    var e = new Enthusiasm(text);
    expect(e.capslockCount()).to.eq(1);
  });

  xit('can count known enthusiastic words', function(){
    var text = 'Wow wow wow like omg';
    var e = new Enthusiasm(text);
    expect(e.usageOfKnownEnthusiasmWords()).to.deep.eq(['Wow', 'wow', 'wow', 'omg']);
  });

  xit('will avoid partially matching known enthusiastic words', function(){
    var text = 'Wowasdfeawowasdfe';
    var e = new Enthusiasm(text);
    expect(e.usageOfKnownEnthusiasmWords()).to.deep.equal([]);
  });
});