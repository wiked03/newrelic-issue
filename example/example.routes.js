import express from 'express';
import exampleController from './example.controller.js';

const router = express.Router();

router.get('/looking/path', exampleController.doTest);

export default router;
