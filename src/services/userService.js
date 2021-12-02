export default class UserService {
    add(){ //ekleme fonksiyonu
        console.log("Kullanıcı eklendi")
    } 

    //fonksiyonları grupladık.

    list(){
        console.log("Kullanıcılar listelendi.")
    }

    getById(id){
        console.log("Kullanıcı getirildi.")
    }
}