setName();
function setName(){
name = "Joel";
var name;
console.log(name);
};

console.log("some text");
let avg = findAvg(2,2);
console.log('some text', avg);
function findAvg(a,b){
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
};

 let leastFav;
let fruits = ['apple','orange','bananas'];

function printFruits(){
    leastFav = fruits[1];
    let favFruit = fruits[2];
    console.log(fruits[0]);
    printFavFruit();
   
    function printFavFruit(){
        console.log(favFruit);
    }
    console.log(leastFav);
}
printFruits();

funTime();
function funTime(){
console.log("Hello Joel");
}


let varfunc = function(){
    alert("what's Up?")
}
varfunc();