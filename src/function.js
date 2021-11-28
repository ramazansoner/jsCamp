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
// first method using func.  
function addCustomer(customer){
    console.log("Müşteri eklendi: " + customer)
}
addCustomer("Ramazan")

//using second method in func
let sayHello=()=>{ // değişkeni tanımlıyoruz diyoruz ki sen bir fonk.sun ve bu senin değerin
    console.log("Hello Word")
}
sayHello()

//third method in func.
let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()


function addToCart2(productName,quantity,unitPrice){
console.log("sepette " + productName + " " + quantity +"adetin fiyatı "+unitPrice*quantity +" tutmaktadır.")
}
addToCart2("Karpuz",10,5)
//Fonksiyonalara sürekli böyle parametre göndermek neyi nerede tutulduğunu bilmek açısından zor olabilir.
//Bu nedenle objelerden yararlanıyoruz.
//Yukarıdaki 3 özelliği ayrı ayrı tanımlatan bir obje yaratıyoruz.
console.log("---------------------------------------------")
console.log("---------------------------------------------")
function addToCart3(product) { //Bana bir değer gönder ben ona Ürün diyecem.
     console.log("Ürün: " + product.productName)//bana bir veri gelecek ve bunun bir productName i olacak.
     console.log("Adet: " +product.quantity)
     console.log("Fiyat: "+product.unitPrice)   
    }
let product1 = {
productName:"Elma",
unitPrice:10,
quantity:5
}
addToCart3(product1)