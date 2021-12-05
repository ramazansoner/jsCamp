//exxport: dışardan import eedileceği yani çağırılabileceği anlamına geliyor.

import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

//default: ben userSErvice import edersem bu classı default olarak import et.
export default class UserService {

    constructor() {

        this.employees = []
        this.customers = []

        this.loggerService = []
        this.errors = []

    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    this.customers.push(user)
                    break;
                case "employee":
                    this.employees.push(user)
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
            
        }
    }

    add(user) { //ekleme fonksiyonu
        //    this.users.push(user)
        //this.loggerService.log(user)
        //console.log(user)
        //this.loggerService.log(user) 
    }

    //fonksiyonları grupladık.

    list() {
        //  return this.users
    }
    getById(id) {

        //return this.users.find(u=>u.id ===id)


    }
}


//sepetle ilgili fonk. bir arada tutuyoruz.
//Class yapmakla biz bşka yerden istediğimiz fonk. çağırmış oluyoruz.
//kullanıcılarla ilgili fonk. burada bir arada tutuluyor.
//ortak operasyonlar eklendi.
//SErvicce: Method havuzu
