const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cookieParser());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://ritikkohli:eJ9TDANLzfmCixVu@cluster0.gd4mqlp.mongodb.net/project1", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});

