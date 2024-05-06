const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    data: { type: String, require: true },
    user: { type: Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('extension', mySchema);