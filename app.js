const path = require('path');
const envs = require('./util/config')

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const conexaoBD = require('./util/database')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

conexaoBD.authenticate() // promise
.then(() => { //caso o promise deu certo
    console.log(`Conectou corretamente na base de dados de ${envs.DB}`)
    
    conexaoBD.sync({force: true}) // para recriar a tabela no DB
    .then( () => {
        console.log("Modelos sincronizados com sucesso!")
        app.listen(8000);
    })
    .catch((erro) => {
        console.log(erro.message)
        process.exit(1); //terminar app
    })

    
})
.catch((erro) => { //caso o promise deu um erro, para tratar esse erro
    console.log(erro.message)
    process.exit(1); //terminar app
})
