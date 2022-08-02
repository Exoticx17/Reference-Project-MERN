const express = require('express')
const blogController = require('../controllers/blogsController')


const router = express.Router()

router.get('/', blogController.blogGet)
router.get('/search', blogController.blogSearch)
router.get('/category', blogController.categoryGet)
router.get('/category/count', blogController.categoryCount)
router.post('/', blogController.blogPost)
router.patch('/:id', blogController.blogPatch);
router.delete('/:id', blogController.blogDelete)
router.get('/one', blogController.blogGetOne)



module.exports = router;