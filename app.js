const express = require ('express')
const bodyparser = require ('body-parser')
const mysql = require ('mysql2')
const handlebars = require ('express-handlebars')
const bcrypt = require('bcrypt')

const app = express();

const salt = bcrypt.genSaltSync(10)

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
app.get("/cadastro", function(req, res){res.render('cadastro')})
app.post("/controllerForm", urlEncodeParser, function(req, res){
    try{
    sql.query('SELECT email FROM user WHERE EXISTS (SELECT email FROM user WHERE email =?)',[req.body.email], function(err, result){
    if(result == ''){
        var criptografar = bcrypt.hashSync(req.body.password, salt)
        sql.query('insert into user values (?,?,?,?,?)', [req.body.id, req.body.name, req.body.user, req.body.email, criptografar])
        res.render('controllerForm')
        console.log(criptografar)
    }else{
        res.render('erro')}
    })
    }catch{
        res.render()
    }
})

//Start Server
app.listen(3000, function(req, res){
    console.log('servidor ativo!')
})