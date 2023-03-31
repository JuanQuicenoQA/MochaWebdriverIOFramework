import LoginPage from '../page-objects/login-page';
import ProductPage from '../page-objects/product-page';

before(async () => {
});

beforeEach(async () => {
    await LoginPage.open();
});

after(async () => {
    await browser.refresh();
});

afterEach(async () => {
});

describe('Login Feature', () => {
    it('Failed Login into the WebApp', async () => {
        await LoginPage.validInputUsername;
        await LoginPage.notValidPassword;
        await LoginPage.clickBtnSubmit;

        const errorTxt = await LoginPage.loginErrorMessage.getText();
        await expect(errorTxt).toEqual("Epic sadface: Username and password do not match any user in this service");
    });

    it('Successfully Login into the WebApp', async () => {
        await LoginPage.validInputUsername;
        await LoginPage.validPassword;
        await LoginPage.clickBtnSubmit;

        const productsTitle = await ProductPage.productPageTitle.getText();
        await expect(productsTitle).toEqual("Products");
    });
});
