import Express from 'express';
import authMiddleware from '../../middleware/auth';
import RequestUser from '../../interface/requestWithUser.interface';

const router = Express.Router();

// @route  GET api/auth
// @desc   Test route
// @access Public
router.get('/', authMiddleware, (req: RequestUser, res: Response) =>
  res.send('Auth route'),
);

export default router;
