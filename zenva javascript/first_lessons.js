var i = 5;
console.log(i);
//this is part of the zenva course section 6

//this is part 7
var age =22;


//arrays
var shoppinglist = ["kappa","fuck","shit"];
shoppinglist[0] = "";
console.log(shoppinglist);

//if statements
var a = 5;
var b = 6;
if(a == b){
    a +=1;
}else{
    console.log("You've figured this out years ago!")
}
var numberCount = [];
var counter = 0;
while(counter<=100){
    numberCount.push(counter);
    counter = counter +1;

}
console.log(numberCount);

/* for(var i = 0; i<=100;i++){
    console.log(i);
} */

function kappa (a,b){
    return a+b;
}
var y = 5;
var x = 5;
console.log(kappa(y,x));

//class

var kappa = {
    name: "kappa",
    age: 25
};

