//exxport: dışardan import eedileceği yani çağırılabileceği anlamına geliyor.
//default: ben userSErvice import edersem bu classı default olarak import et.
export default class UserService {

        constructor(){
           this.users = []
           
           this.loggerService = [] 
        
        }
    add(user){ //ekleme fonksiyonu
       this.users.push(user)
       this.loggerService.push(user)
       //console.log(user)
      //this.loggerService.log(user) 
    } 
 
    //fonksiyonları grupladık.

    list(){
        return this.users
    }
    getById(id){

        return this.users.find(u=>u.id ===id)
       
        
    }
}


//sepetle ilgili fonk. bir arada tutuyoruz.
//Class yapmakla biz bşka yerden istediğimiz fonk. çağırmış oluyoruz.
//kullanıcılarla ilgili fonk. burada bir arada tutuluyor.
//ortak operasyonlar eklendi.
//SErvicce: Method havuzu
