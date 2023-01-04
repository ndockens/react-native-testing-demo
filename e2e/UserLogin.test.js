describe('User Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show login screen', async () => {
    await expect(element(by.id('login_screen'))).toBeVisible();
  });

  it('should show profile screen after entering valid credentials and tapping login button', async () => {
    await element(by.id('username_input')).typeText('jdoe');
    await element(by.id('password_input')).typeText('1234');
    await element(by.id('login_button')).tap();
    await expect(element(by.id('profile_screen'))).toBeVisible();
  });

  it('should show login screen after tapping logout button', async () => {
    await element(by.id('logout_button')).tap();
    await expect(element(by.id('login_screen'))).toBeVisible();
  });
});
