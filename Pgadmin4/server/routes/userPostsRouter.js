const Router = require('express');
const router = new Router();
const userPostsController = require('../controllers/userPostsController');

router.post('/', userPostsController.create);
router.get('/', userPostsController.getAll);
router.get('/:id', userPostsController.getOne);

module.exports = router