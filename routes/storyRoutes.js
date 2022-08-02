const express = require('express')
const storyController = require('../controllers/storyController')

const router = express.Router()

router.get('/', storyController.storyGet)
router.get('/one', storyController.storyGetOne)
router.get('/search', storyController.storyGetSearch)
router.get('/genre/', storyController.storyGetGenres)
router.post('/', storyController.storyPost)
router.patch('/:id', storyController.storyEdit);
router.delete('/:id', storyController.storyDelete)



module.exports = router;