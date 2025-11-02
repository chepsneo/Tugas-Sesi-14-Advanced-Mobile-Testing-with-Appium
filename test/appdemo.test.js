import { expect } from 'chai';

// Function to generate random string
function generateRandomString(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

describe('Appium DEMO App', () => {

  afterEach(async () => {
    // Terminate the app (if running)
    await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });

    // Short delay to ensure app is closed
    await browser.pause(1000);

    // Start the app again
    await browser.execute('mobile: activateApp', { appId: 'io.appium.android.apis' });
  });

  it('Klik elemen', async () => {
    // menu: home page
    const elemenKlik = await $(`//android.widget.TextView[@content-desc="Accessibility"]`);
    await elemenKlik.click();
  });
  
  it('Input ke elemen', async () => {
    // menu: App > Alert Dialogs > Text Entry dialog

    // locator-locator nya
    const appMenu = await $(`//android.widget.TextView[@content-desc="App"]`)
    const alertdialogMenu = await $(`//android.widget.TextView[@content-desc="Alert Dialogs"]`)
    const textentryMenu = await $(`//android.widget.Button[@content-desc="Text Entry dialog"]`)
    
    // action buat masuk ke popup nya 
    await appMenu.click();
    await alertdialogMenu.click();
    await textentryMenu.click();

    // press button back di device
    // await browser.back()
    
    

    // start input elemen
    // silahkan di inspect dulu ya, tugas nya ini 
    const nameField = await $('')
    const passField = await $('')

    const passwordRandom = generateRandomString(10);
    await nameField.setValue('admin_luki');
    await passField.setValue('1234567890');
  });
  
  it('Memastikan tulisan pada button', async() =>{
    // app > activity > animation
    const buttonApp = await $('//android.widget.TextView[@content-desc="App"]')
    const buttonActivity = await $('//android.widget.TextView[@content-desc="Activity"]')
    const buttonAnimation = await $('//android.widget.TextView[@content-desc="Animation"]')
    const buttonSatu = await $('//android.widget.Button[@index=1]')
    
    // masuk ke page nya dulu
    await buttonApp.click();
    await buttonActivity.click();
    await buttonAnimation.click();

    // ambil text di element nya
    const tulisanDiButton = await buttonSatu.getText()

    // validasi value nya
    expect(tulisanDiButton).to.equal("Fade")
  })

  it('Memastikan App bisa terbuka dan elemen tersedia', async () => {
    const accessibilityMenu = await $(`//android.widget.TextView[@content-desc="Accessibility"]`);

    // Wait, then click
    await accessibilityMenu.waitForDisplayed({ timeout: 10000 });
    const isVisible = await accessibilityMenu.isDisplayed();
    expect(isVisible).to.be.true;

    // contoh2 validasi yg lain
    // const nilai = 99999999999
    // expect(nilai).to.be.greaterThanOrEqual(10)

    const nama = "andi"
    expect(nama).to.equals("luki")
  });

  it.only('Scroll down', async () => {
    const viewsMenu = await $(`//android.widget.TextView[@content-desc="Views"]`);
    await viewsMenu.click();

    // scroll down
    const target = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Layouts"))`);
    await target.click();

  });
});
