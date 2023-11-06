const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs'); 

app.get('/', (req, res)=>{
    res.render('index');
})

app.post("/sum", (req, res)=>{
    
    const {num1, num2} = req.body;
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid input' });
    }
    
     res.json({ result:  Number(num1)+Number(num2)});
})


app.listen(3000, ()=>{

    console.log(`Server started...`)

});

module.exports = app;