import express from 'express';
import * as calcController from '../controllers/calcController';

const router = express.Router();

router.get('/add/:num1/:num2', calcController.addNumbers);
router.get('/sub/:num1/:num2', calcController.subNumbers);

export default router;
