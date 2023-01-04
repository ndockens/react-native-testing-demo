describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show login screen', async () => {
    await expect(element(by.id('login_screen'))).toBeVisible();
  });

  it('should show profile screen after tapping login button', async () => {
    await element(by.id('login_button')).tap();
    await expect(element(by.id('profile_screen'))).toBeVisible();
  });
});
