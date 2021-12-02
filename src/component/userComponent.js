//burası ekran çıktısı 
//genel ekran

import UserService from "../services/userService.js"
//.. bir üst klasöre git
//userservice e git.

console.log("User component yüklendi")

let userService = new UserService()
userService.add()
userService.getById(1)
userService.list()