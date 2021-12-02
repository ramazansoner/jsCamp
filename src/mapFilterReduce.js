let cart = [
    {id:1,productName:"Telefon",quantity:4,unitPrice:4000},
    {id:2,productName:"Bilgisayar",quantity:2,unitPrice:5000},
    {id:3,productName:"Şarj aleti",quantity:5,unitPrice:50}
]
//state management: spa: dataların kontrol edildiği yer.

cart.push({id:4,productName:"Gözlük",quantity:1,unitPrice:550})
console.log(cart[0])

function addToCart(sepet) {
    sepet.push({id:5,productName:"mouse",quantity:5,unitPrice:100})
}
addToCart(cart)
console.log(cart)

let sayi =10
let number = 20
function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
console.log(sayi)

cart.map(product=>console.log(product.productName))//Takma isim
//product: takma isim.
//Sepeti dolaş. her bir product için dolaş.
//product => anlamı : her bir product için devamındaki işi kodu çalıştır.
cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice * product.quantity)

})

let quantityOver = cart.filter(product =>product.quantity>2 & product.unitPrice<1000)
console.log(quantityOver)
//herbir productı gez şarta göre yani quantity>2 olanları getir.

let total = cart.reduce((acc,product)=> acc +product.unitPrice * product.quantity,0)
console.log(total)
//ürünü birim fiyatını acc ye aktarıyor.acc: ilk başlangıç değeri = 0
//Her bir değeri array olarak görür ve sırayla değerleri gezer.


