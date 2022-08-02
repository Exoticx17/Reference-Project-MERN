const { json } = require('express');
const { ObjectId } = require('mongodb');
const Pole = require('../models/poleModel')

const poleGet = async(req,res) => {
    try {
        const page = req.query.p || 0
        const booksPerPage = 12

        const pole= await Pole.find().sort({ createdAt: -1}).skip(page* booksPerPage).limit(booksPerPage)
        res.status(200).json(pole)
    } catch (err) {
       res.status(500).json(err)
    }
}

const poleGetOne = async(req,res) => {
    try {
        
        if(ObjectId.isValid(req.query.id)) {
            const pole = await Pole.findById(req.query.id)
            res.status(200).json(pole)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        } 
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const poleGetSearch = async(req,res) => {
    const subject = req.query.subject
    const title = req.query.title
    const page = req.query.p || 0
    const booksPerPage = 12
    try {
        
        if(!subject && title) {

            const pole = await Pole.find({$text: { $search: title}}).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(pole)
        }
        else if(subject && title){

            const pole = await Pole.find({$text: { $search: title}, subject: subject}).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(pole)

        } else if(subject && !title){

            const pole = await Pole.find({ subject: subject }).sort({ createdAt: -1}).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(pole)
        }
    } catch (err) {
       res.status(500).json(err)
    }
}

 const poleGetSubjects = async(req,res) => {
    const type = req.query.type;
    const id = req.query.id;
    const subject = req.query.subject;
    try {
        
        if(type == 'all'){
            //Get All subjects
            const science = await Pole.find({subject: "Science"}, {_id: 1, subject: 1}).count()
            const technology = await Pole.find({subject: "Technology"}, {_id: 1, subject: 1}).count()
            const math = await Pole.find({subject: "Math"}, {_id: 1, subject: 1}).count()
            const english = await Pole.find({subject: "English"}, {_id: 1, subject: 1}).count()
            const writing = await Pole.find({subject: "Writing"}, {_id: 1, subject: 1}).count()
            const geography = await Pole.find({subject: "Geography"}, {_id: 1, subject: 1}).count()
            const art = await Pole.find({subject: "Art"}, {_id: 1, subject: 1}).count()
            const PE = await Pole.find({subject: "P.E"}, {_id: 1, subject: 1}).count()
            res.status(200).json({ Science: science, Technology: technology, Math:  math, English: english, Writing: writing, Geography: geography, Art: art,PE: PE})     
        } 
        else if (type == 'one'){
            //Skip One Get Rest
            if(ObjectId.isValid(id)) {   
                const science = await Pole.find({$and: [{_id: {$ne: id}},{subject: "Science"}]}).count()
                const technology = await Pole.find({$and: [{_id: {$ne: id}},{subject: "Technology"}]}).count()
                const math = await Pole.find({$and: [{_id: {$ne: id}},{subject: "Math"}]}).count()
                const english = await Pole.find({$and: [{_id: {$ne: id}},{subject: "English"}]}).count()
                const writing = await Pole.find({$and: [{_id: {$ne: id}},{subject: "Writing"}]}).count()
                const geography = await Pole.find({$and: [{_id: {$ne: id}},{subject: "Geography"}]}).count()
                const art = await Pole.find({$and: [{_id: {$ne: id}},{subject: "P.E"}]}).count()
                const PE = await Pole.find({$and: [{_id: {$ne: id}},{subject: "Science"}]}).count()

                res.status(200).json({ Science: science, Technology: technology, Math:  math, English: english, Writing: writing, Geography: geography, Art: art,PE: PE})
            }
        }
        else if(type == 'only'){
            //Get Only The Specific subject
            if(ObjectId.isValid(id)){
                const science = await Pole.find({$and: [{_id: {$eq: id}},{subject: "Science"}]}).count()
                const technology = await Pole.find({$and: [{_id: {$eq: id}},{subject: "Technology"}]}).count()
                const math = await Pole.find({$and: [{_id: {$eq: id}},{subject: "Math"}]}).count()
                const english = await Pole.find({$and: [{_id: {$eq: id}},{subject: "English"}]}).count()
                const writing = await Pole.find({$and: [{_id: {$eq: id}},{subject: "Writing"}]}).count()
                const geography = await Pole.find({$and: [{_id: {$eq: id}},{subject: "Geography"}]}).count()
                const art = await Pole.find({$and: [{_id: {$eq: id}},{subject: "P.E"}]}).count()
                const PE = await Pole.find({$and: [{_id: {$eq: id}},{subject: "Science"}]}).count()

                res.status(200).json({ Science: science, Technology: technology, Math:  math, English: english, Writing: writing, Geography: geography, Art: art,PE: PE})
            }
        }
        else if(type == 'both'){
                //Skip Only That Ones subject
                const science = await Pole.find({$and: [{subject: {$ne: subject}},{subject: "Science"}]}).count()
                const technology = await Pole.find({$and: [{subject: {$ne: subject}},{subject: "Technology"}]}).count()
                const math = await Pole.find({$and: [{subject: {$ne: subject}},{subject: "Math"}]}).count()
                const english = await Pole.find({$and: [{subject: {$ne: subject}},{subject: "English"}]}).count()
                const writing = await Pole.find({$and: [{subject: {$ne: subject}},{subject: "Writing"}]}).count()
                const geography = await Pole.find({$and: [{subject: {$ne: subject}},{subject: "Geography"}]}).count()
                const art = await Pole.find({$and: [{subject: {$ne: subject}},{subject: "Art"}]}).count()
                const PE = await Pole.find({$and: [{subject: {$ne: subject}},{subject: "P.E"}]}).count()
                res.status(200).json({ Science: science, Technology: technology, Math:  math, English: english, Writing: writing, Geography: geography, Art: art,PE: PE})
        }
        

    } catch (err) {
        res.status(500).json(err)
    }
 }

const polePost = async(req,res) => {
    try {
        const pole = await Pole.create(req.body)
        pole.save()
        res.status(200).json(pole)
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const poleEdit = async(req,res) => {
    const updates = req.body
    try {
        
        if(ObjectId.isValid(req.params.id)) {
            const pole = await Pole.updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
            res.status(500).json(pole)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
        
    } catch (err) {
       res.status(500).json(err)
    }
}

const poleDelete = async(req,res) => {
    try {
        
        if(ObjectId.isValid(req.params.id)) {       
            const pole = await Pole.deleteOne({_id: ObjectId(req.params.id)})
            res.status(500).json(pole)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
        
    } catch (err) {
       res.status(500).json(err)
    }
}

module.exports = {
    poleGet,
    poleGetOne,
    poleGetSearch,
    poleGetSubjects,
    polePost,
    poleEdit,
    poleDelete
}