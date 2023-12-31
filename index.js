const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by adsoft');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work-experience', (req, res, next) =>{
	res.sendfile("assets/work-experience.json");
})

app.get('/skills', (req, res, next) =>{
	res.sendfile("assets/skills.json");
})

app.get('/certificaciones', (req, res, next) =>{
	res.sendfile("assets/certificaciones.json");
})

app.get('/intereses', (req, res, next) =>{
	res.sendfile("assets/intereses.json");
})

app.listen(port,  () => 
	console.log('listening on port ' + port
));