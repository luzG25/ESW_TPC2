const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render('404', { 
      pageTitle: 'Página não encontrada', 
      path: '/' 
    });
});

const port = 3001;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`Servidor executado em http://${host}:${port}`);
});
