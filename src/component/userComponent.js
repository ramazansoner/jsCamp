//burası ekran çıktısı 
//genel ekran
//Bu ekranda bütün olayları ekrana yansıtabileceğimiz yer.
//Syafadaki böümlere component diyoruz. 

import { BaseLogger, ElasticLogger, MongoDb } from "../crossCuttingConcerns/logging/logger.js"
import   User from "../models/users.js"
import UserService from "../services/userService.js"
//.. bir üst klasöre git
//userservice e git.

//console.log("User component yüklendi")
// User içindeki constructor çalıştı. ve içineki cons.log() çalıştı.
let logger2 = new ElasticLogger()
let logger1 = new MongoDb()

let userService = new UserService()
//slet customer1 = new Customer(1,"ramazan","soner","ankara","22323")
//userSservice i burada kullanabilmek için newledik
let user1=new User(1," Ramazan"," Söner"," Düzce")
let user2=new User(2," Esra"," Söner"," Yığılca")
//userService.add("Müşteri şehri: "+customer1.city)

//userService.add(logger1.log(customer1.firstName))

//logger2.log(customer1.city)
// User ı burada kullabilmek için newledik.
userService.add(user1) //user1 e ait bütün verileri getirir.
userService.add(user2) //user2 e ait bütün verileri getirir.
console.log("------------------------------")
//userService i add metodunu kullanıyorduk. içine newlenen user ı koyarak ekleme işlemi yapıyoruz.
//console.log(userService.getById(2)) //id si 2 olan user a ait verileri getirir 
//console.log("---------------------------")
//console.log(userService.list()) // user daki bütün verileri getirir


userService.load()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)

/* let customer = { id:1,firstName:"Ramazan"}
//prototyping:sonradan ekleme yapılabilir.
customer.lastName = "Söner"
console.log(customer.lastName) */