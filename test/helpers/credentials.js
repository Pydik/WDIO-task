class Credentials {
    accountInfo = {
        standard: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
       
    };

    getUserCredentials(accountType){
        return this.accountInfo[accountType];
    }

}
export default new Credentials();