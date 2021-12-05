import User from "./users.js";

export default class Customer extends User{
    constructor(id, firstName,lastName,city, age,creditCard){
        super(id,firstName,lastName,city,age) // userdaki bilgileri al buraya uyarla.
        this.creditCart = creditCart
    }
}