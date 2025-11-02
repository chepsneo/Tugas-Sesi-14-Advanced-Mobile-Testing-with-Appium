describe('Text Entry Dialog Test', () => {
  it('should fill name and password fields', async () => {
    await $('~App').click();
    await $('~Alert Dialogs').click();
    await $('~Text Entry dialog').click();

    const nameField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
    const passwordField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');

    await nameField.setValue('ChepsQA');
    await passwordField.setValue('123456');

    await $('android.widget.Button').click(); // Klik OK
  });
});