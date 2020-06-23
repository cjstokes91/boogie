const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let boogieSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, default: 'Soft Top' },
    type: { type: String, required: true },
    price: { type: Number, default: 0 },
}, {
    timestamps: true
});

module.exports = mongoose.model('Boogie', boogieSchema);