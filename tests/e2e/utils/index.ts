import { Browser } from 'puppeteer';

// @ts-ignore
const getBrowser = () => global.__BROWSER_GLOBAL__ as Browser;

export { getBrowser };
