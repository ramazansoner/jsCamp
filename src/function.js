function addToCart(quantity,productName="Elma"){ //Default değer olrak elma olur.
    console.log("Sepete eklendi: " + productName + " " + quantity)
}
addToCart("Bilgisayar",20)
addToCart("Ayakkabı",10)
addToCart() // elma gelir feault olarak.
addToCart(10) // elma yukarıda tanımlıydı.O nedenle sadece sayıyı yazmak istediğimde 10 rakamını elmanın yerimne ilk parametreye atıyor.
 //Bu nedenle fonk. yazarken default parametereyi sona yazıyoruz.
addToCart("ayakkabı",25)

//--------------------------------
function addCustomer(customer){
    console.log("Müşteri eklendi: " + customer)
}
addCustomer("Ramazan")

let sayHello=()=>{ // değişkeni tanımlıyoruz diyoruz ki sen bir fonk.sun ve bu senin değerin
    console.log("Say Hello")
}
sayHello()