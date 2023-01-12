// import { remote } from 'webdriverio';

// const capabilities = {
//   'platformName': 'iOS',
//   'appium:platformVersion': '15.0',
//   'appium:automationName': 'XCUITest',
//   'appium:deviceName': 'iPhone 13',
//   'appium:app': 'org.reactjs.native.example.ReactNativeTestingDemo',
// };

// const wdOpts = {
//   host: process.env.APPIUM_HOST || 'localhost',
//   port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
//   logLevel: 'info',
//   capabilities,
// };

// let driver;

// describe('First Appium Test Suite', () => {
//     beforeAll(async () => {
//         driver = await remote(wdOpts);
//     });
  
//     it('should do something', async () => {
//         try {
//             const loginButton = await driver.$('~login_button');
//             await loginButton.click();
//             const profileScreen = await driver.$('~profile_screen');
//             await expect(profileScreen).toBeVisible();
//         } finally {
//             await driver.pause(1000);
//             await driver.deleteSession();
//         }
//     });
//   });

describe('Login Process', () => {
  it('should show the profile screen when login button is clicked', async () => {
      await $('~login_button').click();
      await expect($('~profile_screen')).toBeExisting();
  });
});
