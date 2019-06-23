const mongoose = require('mongoose');

//约束条件
const citiesSchema = new mongoose.Schema({
    code: String,
    province: String,
    city: String,
    county: String,
    name: String,
    level : Number
});

//创建这个集合（文档对象）
module.exports = mongoose.model('cities', citiesSchema);