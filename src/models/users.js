//neden model diyoruz: kullanıcıya gönderdiğimiz veya kullanıcdan alıp apiye yansıttığımız kısım

export default class User {

    constructor(id, firstName, lastName, city, age) {
        //new işlemi yapıldığında buu blok çalışır.
        //this: User daki class demek.
        console.log("Kullanıcılar getirildi.")
        //class da firstName oluştur ve bu değeri parametreyle constructora gönderilen firstName gönder
        this.firstName = firstName
        this.id = id
        this.lastName = lastName
        this.city = city
        this.age = age
    }
    
}

/* export class Customer extends User {
    constructor(id,firstName,lastName,city, creditCard){
        console.log("Müşteriler getirildi.")
        //class da firstName oluştur ve bu değeri parametreyle constructora gönderilen firstName gönder
       super(id,firstName,lastName,city)
       this.creditCard = creditCard
    }
}  */