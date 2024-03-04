'use strict';

require('dotenv').config(); 

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser'); 
let path = require('path');
let app = express();
app.use(bodyParser.urlencoded({extenden:false}));
app.use(bodyParser.json());

async function main() {

    const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.sziidtc.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`; 
    
    console.log(uri)
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
        
      
        app.use(express.static(__dirname + '/public/'));
        app.use('/assets', express.static(path.join(__dirname, 'assets')));
        app.set('view engine', 'ejs');
        app.set('views', __dirname + '/views/');
        app.use('/', require('./router/rutas'));
        app.use('/pokemon', require('./router/pokemon'));

        app.use((req, res) => {
            res.status(404).render("404", {
                titulo: "ERROR 404",
                description: "Page not found"
            });
        });

        app.listen(4000, () => {
            console.log('Iniciando Express en el puerto 4000');
        });
    } catch (error) {
        console.error(error);
    }
}

main().catch(err => console.log(err));