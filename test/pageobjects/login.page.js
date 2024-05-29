import BasePage from './basePage.js';


class LoginPage extends BasePage {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get logo () {
        return $('[class="app_logo"]')
    }

    get error () {
        return $('[data-test="error"]')
    }

    async login ({username, password})  {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }

    Login () {
        return this.btnSubmit.click()
    }
}

export default new LoginPage();
