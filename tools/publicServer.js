express = require('express');
path = require('path');
open = require('open');
compression = require('compression');


const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('public'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function(e){
  if (e) console.log(e);
  else open(`http://localhost:${port}`);
});