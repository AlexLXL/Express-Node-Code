const express = require('express');
const app = express();

app.get('/jsonp', (req, res) => {
    const { callback } = req.query;         // 1.获取页面发过来的请求，并获取查询字符串
    const result = `${callback}(${JSON.stringify({name: 'alex', age: 18})})`; // 2.设置函数调用，并res返回
    res.end(result);
});

app.get('/cors', (req, res) => {
    res.set('access-control-allow-origin','*'); // 1.设置响应头信息，access-control-allow-origin: *
    res.end('cors跨域success')
});

app.listen(3000,(err) => {
    if(!err) console.log('服务器启动成功···');
    else console.log(err)
});