import Express from 'express';

const router = Express.Router();

// @route  GET api/users
// @desc   Test route
// @access Public
router.get('/', (reeq, res) => res.send('User route'));

export default router;
