import Express from 'express';

const router = Express.Router();

// @route  GET api/profile
// @desc   Test route
// @access Public
router.get('/', (req, res) => res.send('Profile route'));

export default router;
