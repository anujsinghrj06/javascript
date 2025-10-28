function userData(username, islogedin, islogincount) {
    this.username = username;
    this.islogedin = islogedin;
    this.islogincount = islogincount;
    return this
}

const userOne = new userData("hitesh", "logedin", 12);
console.log(userOne);
