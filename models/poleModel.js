const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poleSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
        enum: ['English','Science', 'Math', 'Art', 'History', 'Geography', 'P.E', 'Technology', 'Writing']
    }
},{timestamps: true})

const Pole = mongoose.model('Pole', poleSchema)
module.exports = Pole;
