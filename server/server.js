//express using 4.x API 
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));   //to customize app server

//to serve up the public folder elements, like create expense etc
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});   

app.listen(port, () => {
    console.log('Server is up!')
});