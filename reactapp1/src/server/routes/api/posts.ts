import Express from 'express';

const router = Express.Router();

// @route  GET api/posts
// @desc   Test route
// @access Public
router.get('/', (reeq, res) => res.send('Posts route'));

export default router;
