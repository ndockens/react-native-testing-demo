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

xdescribe('Multi-device Testing', () => {
  it('should work', async () => {
      await chromeBrowser.url('https://www.google.com');
      await chromeBrowser.$('aria/Search').setValue('appium');
      await chromeBrowser.$('aria/Google Search').click();
      await expect(chromeBrowser.$('#search')).toHaveChildren();

      await iosDevice.$('~username_input').setValue('jdoe');
      await iosDevice.$('~password_input').setValue('1234');
      await iosDevice.$('~login_button').click();
      await expect(iosDevice.$('~profile_screen')).toBeExisting();
  });
});

describe('Todo Screen', () => {
  beforeAll(async () => {
      // Log in to app
      await iosDevice.$("~username_input").setValue("jdoe");
      await iosDevice.$("~password_input").setValue("1234");
      await iosDevice.$('~login_button').click();
  });

  it('should display list of todo items', async () => {
      await expect(iosDevice.$('~todo_list')).toHaveChildren();
  });

  it('should add todo item when button is clicked', async () => {
      const initialItemCount = await iosDevice.$$('~todo-item').length;
      await iosDevice.$('~new_todo_item_button').click();
      await expect(iosDevice.$$('~todo-item')).toBeElementsArrayOfSize(initialItemCount + 1);
  });
});