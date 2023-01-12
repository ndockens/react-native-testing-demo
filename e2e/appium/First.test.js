import { remote } from 'webdriverio';

const capabilities = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:deviceName': 'iPhone 13',
};

const wdOpts = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

let driver;

describe('First Appium Test Suite', () => {
    beforeAll(async () => {
        driver = await remote(wdOpts);
    });
  
    // it('should show login screen', async () => {
    //     try {
    //         const batteryItem = await driver.$('//*[@text="Battery"]');
    //         await batteryItem.click();
    //     } finally {
    //         await driver.pause(1000);
    //         await driver.deleteSession();
    //     }
    //   await expect(element(by.id('login_screen'))).toBeVisible();
    // });
  });
  