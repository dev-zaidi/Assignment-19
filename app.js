// chapter 21-25

var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName= firstName + " "+ lastName;
alert("Hello "+fullName)

var favPhone= prompt("Enter your favourite mobile phone model");
console.log("Length of string:  "+favPhone.length);

var word= "Pakistani";
document.write(`String: ${word}`);
document.write("</br>"+`Index of "n": `+ word.indexOf("n"));

var word2= "Hello World";
document.write("</br>"+"</br>"+`String: ${word2}`);
document.write("</br>"+`Last Index of "l": `+ word2.lastIndexOf("l"));

var word= "Pakistani";
document.write("</br>"+"</br>"+`String: ${word}`);
document.write("</br>"+`Character at index 3: `+ word[3]);

var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName= firstName.concat(lastName);
alert ("Hello "+ fullName);

var city="Hyderabad";
document.write("</br>"+"</br>"+`City: ${city}`);
document.write("</br>"+`After replacement: `+ city.replace("Hyder","Islam"));

var message= "Ali and Sami are best friends. They play cricketand football together";
document.write("</br>"+"</br>"+`Message: ${message}`);
document.write("</br>"+`After replacement: `+ message.replaceAll("and","&"));

var number="472";
document.write("</br>"+"</br>"+`Value: ${number}`);
document.write("</br>"+`Type:`+ typeof(number));
document.write("</br>"+`Value:`+ parseInt(number));
document.write("</br>"+`Type:`+ typeof(parseInt(number)));

var userInput= prompt("Enter anything");
document.write("</br>"+"</br>"+`User Input: ${userInput}`);
document.write("</br>"+`Upper case: `+ userInput.toUpperCase());

var userInput2= prompt("Enter anything");
var first=userInput2[0].toUpperCase();
document.write("</br>"+"</br>"+`User Input: ${userInput2}`);
document.write("</br>"+`Title case: `+ userInput2.replace(userInput2[0],first));

var num=35.36;
document.write("</br>"+"</br>"+`Number: ${num}`);
num=document.write("</br>"+`Result: `+ num.toString().replace(".",""));

var userName1= prompt("Enter a User Name");
flag=false;
for (i=0;i<userName1.length;i++){
    if (userName1[i].charCodeAt===33||44||46||64){
        flag=true;
    }
}
if (flag=true){
    document.write("</br>"+"</br>"+`Username Invalid: ${userName1}`);
}

var A=["cake","apple pie","cookie","chips","patties"];
var userInput3= prompt("Enter the product");
var userInput3=userInput3.toLowerCase();
flag===false;
for (i=0;i<A.length;i++){
    if(A[i]===userInput3){
        document.write("</br>"+"</br>"+` ${userInput3} is Available at index `+i);
        flag=true;

    }
}
if (flag===false){
    document.write("</br>"+`Sorry, ${userInput3} is currently UnAvailable`)
}

var password=prompt("Enter a password");
var alphabet=false;
var number=false;
var numberAtStart=false;

for (i=0;i<password.length;i++){

}

var university="University  of Karachi ";
document.write(university.split("   "));

var userInput4=prompt("Enter anything");
var lastCharacter=userInput4.length-1;
document.write(userInput4[lastCharacter]);

var occurence =0;
var sentence="the quick little brown fox jumps over the lazy dog."
for (var i=0;i<sentence.length;i++){
        if (sentence.slice(i,i+3)==="the"){
            occurence=occurence+1;
        }}
document.write("Text: "+sentence);
document.write("</br>"+`There are ${occurence} occurence(s) of word "THE".`);



// chapter 26-30

var numberInput=+prompt("Enter a positive integer");
document.write("</br>"+"</br>"+`Number : `+ numberInput);
document.write("</br>"+"</br>"+`Round off value : `+ Math.round(numberInput));
document.write("</br>"+"</br>"+`Floor value : `+ Math.floor(numberInput));
document.write("</br>"+"</br>"+`Ceil valie : `+ Math.ceil(numberInput));

var numberInput2=+prompt("Enter a negative floating point number");
document.write("</br>"+"</br>"+`Number : `+ numberInput2);
document.write("</br>"+"</br>"+`Round off value : `+ Math.round(numberInput2));
document.write("</br>"+"</br>"+`Floor value : `+ Math.floor(numberInput2));
document.write("</br>"+"</br>"+`Ceil valie : `+ Math.ceil(numberInput2));

var numberInput3=prompt("Enter a number to get absolute value");
document.write("</br>"+"</br>"+`The absolute value of `+ numberInput3+` is `+Math.abs(numberInput3));

document.write("</br>"+`Random dice value `+ Math.round(Math.random()*6));


var game=Math.round(Math.random()*2);
if (game === 1){
    document.write("</br>"+game +` Random coin value heads `);
}
else if (game === 2){
    document.write("</br>"+game +` Random coin value tails`);
}

var randomNumber= Math.round(Math.random()*100);
document.write("</br>"+`random number bwtween 1 and 100:` + randomNumber);

var randomNumber= Math.round(Math.random()*10);
var randNum= prompt("enter a number");
if (randomNumber=== randNum){
    document.write("</br>"+"Congratulations!!!!");
}
else (
    document.write("</br>"+`secret number `+randomNumber+"</br>"+`user input ` +randNum)
);