const express = require('express');
const db = require('./db');
const Cities = require('./models/cities');

const app = express();

(async () => {
    await db;

    app.use(express.static('public'));

    //省
    app.get('/province', async (req, res) => {
        const result = await Cities.find({ level: 1 },{ name: 1, province: 1,_id: 0 });
        res.json({ code: 0, data: result })
    });

    //市
    app.get('/city', async (req, res) => {
        const { province } = req.query;
        const result = await Cities.find({ level: 2, province },{ name: 1, city: 1,_id: 0 });
        res.json({ code: 0, data: result })
    });

    //区
    app.get('/county', async (req, res) => {
        const { province, city } = req.query;
        const result = await Cities.find({ level: 3, province, city },{ name: 1, county: 1,_id: 0 });
        res.json({ code: 0, data: result })
    });

})();




app.listen(3000,(err) => {
    if(!err) console.log('服务器启动成功···');
    else console.log(err)
});