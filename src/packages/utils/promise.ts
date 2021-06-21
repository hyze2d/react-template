const sleep = (duration: number) =>
  new Promise(res => setTimeout(res, duration));

export { sleep };
