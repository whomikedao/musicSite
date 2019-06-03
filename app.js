let express = require('express');
let app = express();
let port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require('./routes/index'));

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})