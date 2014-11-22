var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoConfig = require('../config.js').mongo;

var patentSchema = new Schema({
    "class": {
        "ipc": [{
            "code": {
                "section": String
            }
        }]
    }
});
var Patent = mongoose.model('Patent', patentSchema);
mongoose.connect(['mongodb://', mongoConfig.host ,'/', mongoConfig.db ].join(''));

module.exports = {
    'Patent': Patent
};