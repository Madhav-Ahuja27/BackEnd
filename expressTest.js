express = require('express');

app = express();

app.use(express.json());

function middleware(req, res, next){
    console.log("This is from middleware");
    // res.send("This is from middleware");

    next();
}

app.use(middleware);

app.get('/', (req,res) => {res.send("This is / route");})

app.get('/profile',(req,res) => {res.send("This is from /profile route");})


const port = 5000;
app.listen(port,() => {console.log("Running at http://localhost:${port}")});