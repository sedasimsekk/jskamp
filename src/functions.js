function addToCart(quantity,productName="elma"){
    console.log("Sepete Eklendi :"+" ürün : "+productName+" adet :"+quantity)
}
addToCart(10,"karpuz")
addToCart(15,"yumurta")
addToCart(19)



let sayHello= ()=>{
    console.log("Hello World")
}
sayHello()
let sayHello2=function(){
    console.log("Hello World")
}
sayHello2()



function addToCart2(productName,quantity,unitPrice){
    //böyle parametre göndermek yerine obje göndermek daha mantıklı
}

let product1={productName:"Elma",unitPrice:10,quantity:5}
 function addToCart3(product){
    //obje gönderiyoruz
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
 }



 addToCart3(product1)
 let product2={productName:"Elma",unitPrice:10,quantity:5}
 let product3={productName:"Elma",unitPrice:10,quantity:5}
 product2=product3 //adres eşitlendi tek bir tane 
 product2.productName="Karpuz"
 console.log(product3.productName)
 //obje array referans tip string referans
 //int vs değer tip



 function addToCart4(x){
          console.log(x)
 }

 let products=[
     {productName:"Elma",unitPrice:10,quantity:5},
     {productName:"Armut",unitPrice:10,quantity:5},
     {productName:"Karpuz",unitPrice:10,quantity:5}
 ]

 addToCart4(products)




//rest operatörü  toparlar ... array yapıyor gönderilenleri restler son parametre olmalı
 function add(bisey,...numbers){
     let total=0
 for (let i = 0; i < numbers.length; i++) {
     total += numbers[i];
 }
 console.log(total)
 console.log(bisey)
 }

 add(20,30,40)



 //spread ayrıştırır 
 let numbers=[30,10,500,600,120]
 console.log(Math.max(...numbers))




 //destructing ,destructing içinde destructing yapılabilir 
 let [icAnadolu,marmara,karadenizi,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]]=[
     {name:"İç Anadolu",population:"20M"},
     {name:"Marmara",population:"30M"},
     {name:"Karadeniz",population:"10M"},
     [
         ["Ankara","Konya"],
         ["İstanbul","Bursa"],
         ["Sinop","Trabzon"]
     ]
 ]

 console.log(icAnadolu.name)
 console.log(icAnadolu.population)
 console.log(icAnadoluSehirleri[0])//destructing içinde destructing yaptığımız yapı

 //obje versiyonu ----------
 let newproductName,newunitPrice,newQuantity
 ({ productName:newproductName,unitPrice:newunitPrice,quantity:newQuantity}=
 { productName:"Elma",unitPrice:10 ,quantity:5 })

 console.log(newproductName)




