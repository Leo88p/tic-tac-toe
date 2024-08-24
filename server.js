const mongoose = require('mongoose');
const express = require('express'); 
const app = express();
const port = process.env.PORT || 5000; 
const bodyParser = require('body-parser')
app.use( bodyParser.json() )
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/app');

const Count = mongoose.model('counts', mongoose.Schema({
    totalCount: Number,
    xCount: Number,
    oCount: Number,
    drawCount: Number
  }));

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


app.get('/express_backend', async (req, res) => { 
    const result = await Count.findOne({});
    res.send(result); 
}); 

app.post('/result', async (req, res) => { 
    body = await req.body;
    const result = await Count.findOne({});
    console.log(result);
    result.totalCount = body.totalCount;
    result.xCount = body.xCount;
    result.oCount = body.oCount;
    result.drawCount = body.drawCount;
    await result.save();
})