const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/ajax', (req, res) => {
    setInterval(function () {
        res.end('1987');
    },5000)
});


app.listen(3000,(err) => {
    if(!err) console.log('服务器启动成功···')
    else console.log(err)
});