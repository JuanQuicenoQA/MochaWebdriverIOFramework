import LoginPage from '../page-objects/login-page';
import ProductPage from '../page-objects/product-page';
import AllureReporter from '@wdio/allure-reporter';

beforeEach(async () => {
    await LoginPage.open();
});

describe('Login Feature', () => {
    it('Failed Login with no valid Username into the WebApp', async () => {
        AllureReporter.addStory("Failed Navigation");
        await LoginPage.notValidInputUsername;
        await LoginPage.validPassword;
        await LoginPage.clickBtnSubmit;

        const errorTxt = await LoginPage.loginErrorMessage.getText();
        await expect(errorTxt).toEqual("Epic sadface: Username and password do not match any user in this service");
    });

    it('Failed Login with no valid Password into the WebApp', async () => {
        AllureReporter.addStory("Failed Navigation");
        await LoginPage.validInputUsername;
        await LoginPage.notValidPassword;
        await LoginPage.clickBtnSubmit;

        const errorTxt = await LoginPage.loginErrorMessage.getText();
        await expect(errorTxt).toEqual("Epic sadface: Username and password do not match any user in this service");
    });

    it('Successfully Login into the WebApp', async () => {
        AllureReporter.addStory("Successfully Navigation");
        await LoginPage.validInputUsername;
        await LoginPage.validPassword;
        await LoginPage.clickBtnSubmit;

        const productsTitle = await ProductPage.productPageTitle.getText();
        await expect(productsTitle).toEqual("Products");
    });
});
