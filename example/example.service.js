const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default {
  doTest: async () => {
    await sleep(Math.floor(Math.random() * 1000));
  },
};
