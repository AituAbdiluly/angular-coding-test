import { NextFunction, Request, Response } from 'express';

const addNumbers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { num1, num2 } = req.params;

    // Parsing to int and adding
    const answer: number = +num1 + +num2;

    res.status(200).json({
      status: 'success',
      data: {
        answer,
      },
    });
  } catch (err) {
    next(err);
  }
};

const subNumbers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { num1, num2 } = req.params;

    const answer: number = +num1 - +num2;

    res.status(200).json({
      status: 'success',
      data: {
        answer,
      },
    });
  } catch (err) {
    next(err);
  }
};

export { addNumbers, subNumbers };
