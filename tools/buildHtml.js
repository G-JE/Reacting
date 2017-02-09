fs = require('fs');
cheerio = require('cheerio');
colors = require('colors');


fs.readFile('src/index.html', 'utf8', (e, markup) =>{
  if(e) return console.log(e);

  const $ = cheerio.load(markup);
  $('head').prepend('');

  fs.writeFile('public/index.html', $.html(), 'utf8', function(e){
    if(e) return console.log(e);

    console.log('index.html written to /public'.green);
  });
});