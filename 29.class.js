class user {
    constructor(username,email,password){

           this.username = username 
           this.email = email
           this.password  =  password
}
        encryptPassword(){
         return (this.password)
        }
    }
    const data   = new user("anuj","example@gmail.com","abc123")
    console.log(data.encryptPassword());