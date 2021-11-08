/*1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz 
bir fonksiyon yazınız.
 Bu fonksiyona gönderdiğiniz her sayı için 
 çıktı olarak asal olup olmadığını yazınız. 
(Araştırma konusu : şart blokları : if )*/

function findPrime(...numbers){
    let bayrak=0
   

    for(let i=0;i<numbers.length;i++)
    {

        if(numbers[i]==1 || numbers[i]==0)
        {
            bayrak=1
        }
        for(let j=2;j<(numbers[i]-1);j++){
            if(numbers[i]%j==0){
               bayrak=1
            }
        }

        if(bayrak==0)
        {
           console.log("Sayı asaldır")
        }else if(bayrak==1)
        {
          console.log("Sayı asal değildir")
        }
        bayrak=0
       
    }
}

findPrime(1,5,10,0,2)


/*2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını
 bulan programı yazınız.
 (Arkadaş sayılar için google)*/


 function friendNumber(sayi1,sayi2)
 {
     let total1=1
     let total2=1
     for(let i=2;i<(sayi1-1);i++){
        if(sayi1%i==0) 
        {
            total1 +=i
        }

     }
     for(let j=2;j<(sayi2-1);j++){
        if(sayi2%j==0) 
        {
            total2 +=j
        }

     }

     if(total1==sayi2 && total2==sayi1)
     {
         console.log(sayi1+" "+sayi2+" "+"Arkadaş sayı")
     }else{
         console.log(sayi1+" "+sayi2+" "+"Arkadaş sayı değil")
     }

 }

 friendNumber(220,284)


 /*3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.*/

 function perfectNumber()
 {
     let total=0
     for(let i=1;i<1000;i++){

        for(let j=0;j<(i-1);j++)
        if(i%j==0) 
        {
            total +=j
        }

        if(total==i)
        {
         console.log(i+" "+"Mükemmel sayı")
        }
        total=0
     }

 }
 perfectNumber()


 /*4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.*/

 function Prime(){
     let bayrak=0
    for(let i=0;i<1000;i++){

        if(i==1 || i==0)
        {
            bayrak=1
        }
        for(let j=2;j<i;j++)
        {
            if(i%j==0)
            {
                bayrak=1
            }
        }
        if(bayrak==0)
        {
           console.log(i+" "+"Sayı asaldır")
        }
        bayrak=0
        
    }
}
Prime()
