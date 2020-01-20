import Express from 'express';

const router = Express.Router();

// @route  GET api/auth
// @desc   Test route
// @access Public
router.get('/', (reeq, res) => res.send('Auth route'));

export default router;
