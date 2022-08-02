const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
        enum: ["Science", "Technology", "Business", "Sports", "Travel", "Politics", "Food", "Entertainment", "History", "News"]
    }
},{timestamps: true})

const Story = mongoose.model('Story', storySchema)
module.exports = Story;
