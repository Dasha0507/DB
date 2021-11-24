const Router = require('express');
const categoriesRouter = require('./categoriesRouter');
const newsRouter = require('./newsRouter');
const subscriptionsRouter = require('./subscriptionsRouter');
const userPostsRouter = require('./userPostsRouter');
const userRouter = require('./userRouter');
const router = new Router();

router.use('/user', userRouter);
router.use('/subscriptions', subscriptionsRouter);
router.use('/categories', categoriesRouter);
router.use('/news', newsRouter);
router.use('/posts', userPostsRouter );

module.exports = router