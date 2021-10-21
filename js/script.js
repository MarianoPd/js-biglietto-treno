
const juniorAgeMax = 17;
const seniorAgeMin = 66;
const pricePerKm = 0.21;
const discount20 = 'SCONTO20';

let userKm = prompt('Insert the number of Km');
console.log(userKm);


/* so che non abbiamo fatto ancora i cicli ma volevo divertirmi un po'*/
while(isNaN(userKm)){
    userKm = prompt('That is not a number dumbass. Insert the NUMBER of KM');
    console.log(userKm);
}
while(userKm <= 0){
    userKm = prompt('Try to  be serius please. Insert A CORRECT number of KM');
    console.log(userKm);
}

let userAge = prompt('Insert your Age');
console.log(userAge);

while(isNaN(userAge)){
    userAge = prompt('You are really shure that THAT is your age? Insert your Age you Moron');
    console.log(userAge);
}
while(userAge < 0){
    userAge = prompt('You are getting on my nerve now. Insert a POSSIBLE Age ');
    console.log(userAge);
}
while(userAge > 150){
    userAge = prompt('Of course... Say "Hi" for me to the dynosaurs and INSERT YOUR REAL AGE ');
    console.log(userAge);
}

let discountCode = prompt('Insert a Discount Code');

let allertS;
if(discountCode !== discount20){
    allertS = 'Invalid discount code';
    document.getElementById('allert').innerHTML = allertS;
}
if((discountCode === discount20) && userAge > 20){
    allertS = 'Discount code not usable for your age';
    document.getElementById('allert').innerHTML = allertS;
}

let initialPrice = userKm * pricePerKm;
console.log(initialPrice);
let finalPrice = initialPrice;
let actualDiscount = 0;



if(userAge <= juniorAgeMax){
    finalPrice = (initialPrice / 100) * 80;
    actualDiscount = 20;
}

else if(userAge >= seniorAgeMin){
    finalPrice = (initialPrice / 100) * 60;
    actualDiscount = 40;
}

else if(((userAge <= 20) && (userAge >= 18)) && discountCode === discount20){
    finalPrice =(initialPrice / 100) * 80;
    actualDiscount = 20;
}


console.log(finalPrice);

const displayablePrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(finalPrice);

console.log(displayablePrice);


let outputS =
`
    <span>The number of Km you selected is ${userKm}</span><br>
    <span>The Age you selected is ${userAge}</span><br>
    <span> Based on your Age you will recive a discount of ${actualDiscount}% </span>
    <p>The price you'll pay is: ${displayablePrice} </p>  

`
document.getElementById('output').innerHTML = outputS;
