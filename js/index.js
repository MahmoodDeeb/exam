
/*
number
string
boolean
undefined
null

object

alert("rest")
var username = "ahmed";

console.log(username)

alert("welcome : "+username)

var x = 5;
var y = "5";

if(x === y)
    {
        console.log("sa7");
    }
else
    {
        console.log("8alat");
    }

*/

$(".navbar a").click(function(){
    var ah=$(this).attr("href");
    var d =$(ah).offset().top-50;
    $("body").animate({scrollTop:d},2000)
    
})

$(".btn").click(function(){
    var ah=$(this).attr("href");
    var d =$(ah).offset().top-50;
    $("body").animate({scrollTop:d},2000)
    
})

















