const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/ajax', (req, res) => {
    res.send('收到ajax请求');
});

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.json({ name: 'alex', age: 18 });
});

app.listen(3000,(err) => {
    if(!err) console.log('服务器启动成功···');
    else console.log(err)
});

/*注释：测试git reset*/