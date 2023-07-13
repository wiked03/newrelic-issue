import exampleService from './example.service.js';

export default {
  doTest: async (req, res, next) => {
    try {
      await exampleService.doTest();
      return res.send('Hello World!');
    } catch (err) {
      return next(err);
    }
  },
};
