class Credentials {
    accountInfo = {
        standard: {
            username: 'standard_user',
            password: 'secret_sauce'
        },

        invalidPassword: {
            username: 'standard_user',
            password: 'r@nd0m__us#r.'
        },

        invalidLogin: {
            username: 'r@nd0m__us#r',
            password: 'secret_sauce'
        }
    };

    getUserCredentials(accountType) {
        return this.accountInfo[accountType];
    }
}
export default new Credentials();
