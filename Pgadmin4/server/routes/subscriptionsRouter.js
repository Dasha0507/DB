const Router = require('express');
const router = new Router();
const subscriptionsController = require('../controllers/subscriptionsController')

router.post('/', subscriptionsController.create)
router.get('/', subscriptionsController.getAll)
router.get('/:id', subscriptionsController.getOne)

module.exports = router