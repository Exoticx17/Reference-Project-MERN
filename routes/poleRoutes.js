const express = require('express')
const poleController = require('../controllers/poleController')

const router = express.Router()

router.get('/', poleController.poleGet)
router.get('/one', poleController.poleGetOne)
router.get('/search', poleController.poleGetSearch)
router.get('/subject/', poleController.poleGetSubjects)
router.post('/', poleController.polePost)
router.patch('/:id', poleController.poleEdit);
router.delete('/:id', poleController.poleDelete)



module.exports = router;