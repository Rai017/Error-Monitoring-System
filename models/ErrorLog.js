const mongoose = require('mongoose');
const errorSchema = new mongoose.Schema({

message: String,
route: String,

severity: {
type: String,
default: 'low'
},

count: {
type: Number,
default: 1
},

lastOccurredAt: {
type: Date,
default: Date.now
}
});

module.exports = mongoose.model('ErrorLog', errorSchema);