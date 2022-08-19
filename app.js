const express = require ('express')
const bodyparser = require ('body-parser')
const mysql = require ('mysql')
const handlebars = require ('express-handlebars')

const app = express();
const urlEncodeParser = bodyparser.urlencoded({extended:false});
const sql = mysql.createConnection({
    host: 'localHost',
    user: 'root',
    password: '941784',
    port: 3306
});
sql.query("use login");

app.use('/img', express.static('img'));
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));

//Template Engine
app.engine("handlebars", handlebars.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Routes
app.get("/", function(req,res){res.render('index');})

//Start Server
app.listen(3000, function(req, res){
    console.log('servidor ativo!')
})