import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import RequestWithUser from '../interface/requestWithUser.interface';
import userModel from '../models/User';

async function authMiddleware(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) {
  // Get token from header
  const token = req.header('x-auth-token');

  // check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = (decoded as any).user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

export default authMiddleware;
