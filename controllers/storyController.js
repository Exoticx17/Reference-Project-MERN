const { json } = require('express');
const { ObjectId } = require('mongodb');
const Story = require('../models/storyModel')

const storyGet = async(req,res) => {
    try {
        
        const page = req.query.p || 0
        const booksPerPage = 12

        const story = await Story.find().sort({ createdAt: -1}).skip(page* booksPerPage).limit(booksPerPage)
        res.status(200).json(story)

    } catch (err) {
       res.status(500).json(err)
    }
}

const storyGetOne = async(req,res) => {
    try {
        
        if(ObjectId.isValid(req.query.id)) {
            const story = await Story.findById(req.query.id)
            res.status(200).json(story)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        } 
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const storyGetSearch = async(req,res) => {
    const genre = req.query.genre
    const title = req.query.title
    const page = req.query.p || 0
    const booksPerPage = 12
    try {
        
        if(!genre && title) {

            const story = await Story.find({$text: { $search: title}}).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(story)
        }
        else if(genre && title){

            const story = await Story.find({$text: { $search: title}, genre: genre}).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(story)

        } else if(genre && !title){

            const story = await Story.find({ genre: genre }).sort({ createdAt: -1}).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(story)
        }
    } catch (err) {
       res.status(500).json(err)
    }
}

 const storyGetGenres = async(req,res) => {
    const type = req.query.type;
    const id = req.query.id;
    const genre = req.query.genre;
    try {
        
        if(type == 'all'){
            //Get All Genres
            const science = await Story.find({genre: "Science"}, {_id: 1, genre: 1}).count()
            const technology = await Story.find({genre: "Technology"}, {_id: 1, genre: 1}).count()
            const business = await Story.find({genre: "Business"}, {_id: 1, genre: 1}).count()
            const sports = await Story.find({genre: "Sports"}, {_id: 1, genre: 1}).count()
            const food = await Story.find({genre: "Food"}, {_id: 1, genre: 1}).count()
            const travel = await Story.find({genre: "Travel"}, {_id: 1, genre: 1}).count()
            const politics = await Story.find({genre: "Politics"}, {_id: 1, genre: 1}).count()
            const entertainment = await Story.find({genre: "Entertainment"}, {_id: 1, genre: 1}).count()
            const history = await Story.find({genre: "History"}, {_id: 1, genre: 1}).count()
            const news = await Story.find({genre: "News"}, {_id: 1, genre: 1}).count()
            res.status(200).json({ science: science, technology: technology, business:  business, sports: sports, food: food, travel: travel, politics: politics,entertainment: entertainment, history: history, news: news})     
        } 
        else if (type == 'one'){
            //Skip One Get Rest
            if(ObjectId.isValid(id)) {   
                const science = await Story.find({$and: [{_id: {$ne: id}},{genre: "Science"}]}).count()
                const technology = await Story.find({$and: [{_id: {$ne: id}},{genre: "Technology"}]}).count()
                const business = await Story.find({$and: [{_id: {$ne: id}},{genre: "Business"}]}).count()
                const sports = await Story.find({$and: [{_id: {$ne: id}},{genre: "Sports"}]}).count()
                const food = await Story.find({$and: [{_id: {$ne: id}},{genre: "Food"}]}).count()
                const travel = await Story.find({$and: [{_id: {$ne: id}},{genre: "Travel"}]}).count()
                const politics = await Story.find({$and: [{_id: {$ne: id}},{genre: "Entertainment"}]}).count()
                const entertainment = await Story.find({$and: [{_id: {$ne: id}},{genre: "Science"}]}).count()
                const history = await Story.find({$and: [{_id: {$ne: id}},{genre: "History"}]}).count()
                const news = await Story.find({$and: [{_id: {$ne: id}},{genre: "News"}]}).count()
                res.status(200).json({ science: science, technology: technology, business:  business, sports: sports, food: food, travel: travel, politics: politics,entertainment: entertainment, history: history, news: news})
            }
        }
        else if(type == 'only'){
            //Get Only The Specific Genre
            if(ObjectId.isValid(id)){
                const science = await Story.find({$and: [{_id: {$eq: id}},{genre: "Science"}]}).count()
                const technology = await Story.find({$and: [{_id: {$eq: id}},{genre: "Technology"}]}).count()
                const business = await Story.find({$and: [{_id: {$eq: id}},{genre: "Business"}]}).count()
                const sports = await Story.find({$and: [{_id: {$eq: id}},{genre: "Sports"}]}).count()
                const food = await Story.find({$and: [{_id: {$eq: id}},{genre: "Food"}]}).count()
                const travel = await Story.find({$and: [{_id: {$eq: id}},{genre: "Travel"}]}).count()
                const politics = await Story.find({$and: [{_id: {$eq: id}},{genre: "Entertainment"}]}).count()
                const entertainment = await Story.find({$and: [{_id: {$eq: id}},{genre: "Science"}]}).count()
                const history = await Story.find({$and: [{_id: {$eq: id}},{genre: "History"}]}).count()
                const news = await Story.find({$and: [{_id: {$eq: id}},{genre: "News"}]}).count()
                res.status(200).json({ science: science, technology: technology, business:  business, sports: sports, food: food, travel: travel, politics: politics,entertainment: entertainment, history: history, news: news})
            }
        }
        else if(type == 'both'){
                //Skip Only That Ones Genre
                const science = await Story.find({$and: [{genre: {$ne: genre}},{genre: "Science"}]}).count()
                const technology = await Story.find({$and: [{genre: {$ne: genre}},{genre: "Technology"}]}).count()
                const business = await Story.find({$and: [{genre: {$ne: genre}},{genre: "Business"}]}).count()
                const sports = await Story.find({$and: [{genre: {$ne: genre}},{genre: "Sports"}]}).count()
                const food = await Story.find({$and: [{genre: {$ne: genre}},{genre: "Food"}]}).count()
                const travel = await Story.find({$and: [{genre: {$ne: genre}},{genre: "Travel"}]}).count()
                const politics = await Story.find({$and: [{genre: {$ne: genre}},{genre: "Politics"}]}).count()
                const entertainment = await Story.find({$and: [{genre: {$ne: genre}},{genre: "Entertainment"}]}).count()
                const history = await Story.find({$and: [{genre: {$ne: genre}},{genre: "History"}]}).count()
                const news = await Story.find({$and: [{genre: {$ne: genre}},{genre: "News"}]}).count()
                res.status(200).json({ science: science, technology: technology, business:  business, sports: sports, food: food, travel: travel, politics: politics,entertainment: entertainment, history: history, news: news})
        }
        

    } catch (err) {
        res.status(500).json(err)
    }
 }

const storyPost = async(req,res) => {
    try {
        const story = await Story.create(req.body)
        story.save()
        res.status(200).json(story)
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const storyEdit = async(req,res) => {
    const updates = req.body
    try {
        
        if(ObjectId.isValid(req.params.id)) {
            const story = await Story.updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
            res.status(500).json(story)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const storyDelete = async(req,res) => {
    try {
        
        if(ObjectId.isValid(req.params.id)) {       
            const story = await Story.deleteOne({_id: ObjectId(req.params.id)})
            res.status(500).json(story)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
        
    } catch (err) {
       res.status(500).json(err)
    }
}

module.exports = {
    storyGet,
    storyGetOne,
    storyGetSearch,
    storyGetGenres,
    storyPost,
    storyEdit,
    storyDelete
}