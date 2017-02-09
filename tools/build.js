webpack = require ('webpack');
webpackConfig = require('../webpack.config.prod');
colors = require('colors');


process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack...'.blue);

webpack(webpackConfig).run((e, stats)=>{
  if(e){console.log(e.bold.red); return 1;}

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map( e => console.log(e.red));
  }

  if(jsonStats.hasWarnings){
    console.log('Webpack generated the following warnings'.bold.yellow);
    jsonStats.warnings.map(warn => console.log(warn.yellow));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log('Your app is ready for production!');

  return 0;
});