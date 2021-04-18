import { Request, Response, NextFunction } from 'express';
import User from '../model/User';

// Display list of all User.
export const userList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await User.find({}).lean();
    res.status(200).json({
      status: 'success',
      message: 'Display list of all users',
      data: { users },
    });
    return;
  } catch (error) {
    next(error);
  }
};

// Display detail page for a specific User.
export const userDetail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await User.findById(req.params.id).lean();

    res.status(200).json({
      status: 'success',
      message: 'Display detail page for a specific user',
      data: {
        user,
      },
    });

    return;
  } catch (error) {
    next(error);
  }
};
