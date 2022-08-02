const { ObjectId } = require('mongodb');
const Blog = require('../models/blogModel')


const blogGet = async(req,res) => {

    const page = req.query.p || 0
    const booksPerPage = 12

    try{
            const blog = await Blog.find().sort({ createdAt: -1}).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(blog)
        }
    catch (err){
        res.status(500).json(err)
    }
}

const blogGetOne = async(req,res) => {
    try {
            if(ObjectId.isValid(req.query.id)) {
                const blog = await Blog.findById(req.query.id)
                res.status(200).json(blog)
            } else {
                res.status(500).json({error: 'Not a Valid Doc Id'})
            } 
        }
    catch (err) {
        res.status(500).json(err)
    }
}

const blogSearch = async(req,res) => {
    const category = req.query.category
    const title = req.query.title
    const page = req.query.p || 0
    const booksPerPage = 12
    
    try {

        if(!category && title){

            const blog = await Blog.find({$text: { $search: title}}).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(blog)
            
        } else if(category && title){

            const cblog = await Blog.find({ $text: { $search: title}, category: category }).skip(page* booksPerPage).limit(booksPerPage)
            res.status(200).json(cblog)
        } else if(category && !title){

            const blog = await Blog.find({category: req.query.category})
            res.status(200).json(blog)
        }

    } catch (err) {
        res.status(500).json(err)
    }
}

const categoryGet = async(req,res) => {
    try {
        const blog = await Blog.find({category: req.query.category})
        res.status(200).json(blog)

    } catch (err) {
        res.status(500).json(err)
    }
}

const categoryCount = async(req,res) => {
    try {
        const blogs = await Blog.find({}, {category:1, _id:1})
        res.status(200).json(blogs)
    } catch (err) {
        res.status(500).json(err)
    }
}

const blogPost = async(req,res) => {
    try {
        const blog = await Blog.create(req.body)
        blog.save()
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json(err)
    }

}


const blogPatch = async(req,res) => {
    const updates = req.body
    try {
        if(ObjectId.isValid(req.params.id)) {
            const blog = await Blog.updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
            res.status(500).json(blog)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }

    } catch (err) {
        res.status(500).json(err)
    }
}

const blogDelete = async(req,res) => {
    try {
        if(ObjectId.isValid(req.params.id)) {       
            const blog = await Blog.deleteOne({_id: ObjectId(req.params.id)})
            res.status(500).json(blog)
        } else {
            res.status(500).json({error: 'Not a Valid Doc Id'})
        }
    } catch (err) {
        res.staus(500).json(err)
    }
}


module.exports = {
    blogGet,
    blogGetOne,
    blogSearch,
    categoryGet,
    categoryCount,
    blogPost,
    blogPatch,
    blogDelete
}