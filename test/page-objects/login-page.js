import { faker } from '@faker-js/faker';

class LoginPage {
  open() {
    return browser.url("/");
  }

  get validInputUsername() {
    return $("#user-name").setValue("standard_user");
  }

  get validPassword() {
    return $("#password").setValue("secret_sauce");
  }

  get notValidInputUsername() {
    return $("#user-name").setValue(faker.name.firstName("male"));
  }

  get notValidPassword() {
    return $("#password").setValue(faker.random.alphaNumeric(10));
  }

  get clickBtnSubmit() {
    return $('#login-button').click();
  }

  get loginErrorMessage(){
    return $("//h3[@data-test='error']");
  }
}

export default new LoginPage();
