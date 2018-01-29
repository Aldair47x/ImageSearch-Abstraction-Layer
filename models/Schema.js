const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema(
    {
        searchValue : String,
        searchDate : Date
    },
    {timestamps : true}
);

const ModelClass = mongoose.model('searchTerm', searchSchema);
module.exports = ModelClass;
