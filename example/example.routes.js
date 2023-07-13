import express from 'express';
import exampleController from './example.controller.js';

const router = express.Router();

router.get('/route/test', exampleController.doTest);

export default router;
