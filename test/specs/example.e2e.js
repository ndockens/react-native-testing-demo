describe('My Login application', () => {
    // it('should login with valid credentials', async () => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`);

    //     await $('#username').setValue('tomsmith');
    //     await $('#password').setValue('SuperSecretPassword!');
    //     await $('button[type="submit"]').click();

    //     await expect($('#flash')).toBeExisting();
    //     await expect($('#flash')).toHaveTextContaining(
    //         'You logged into a secure area!');
    // });

    it('should show the profile screen when login button is clicked', async () => {
        await $('~login_button').click();
        await expect($('~profile_screen')).toBeExisting();
    });
});
