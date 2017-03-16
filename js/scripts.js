/* ____________AULA 1

var firstname = "John";
var firstname = 90.1;
var names=["Steve", "John", "Mark"];
var num = 200;

num= num % 2;

document.write("\nhello" + names[0]);

document.write(num);


function sum(num1, num2){
    
    var result = num1 + num2;
    return result;
    document.write(result + "<br>");}

var colors = ["red", "green", "blue"];

for (var i = 0; i < colors.length; i++){
    document.write("<p>" + colors[i] + "</p>")
    
}

sum(10,1)

   
var res = sum(20, 10)
if( res>10){
    document.write(res+"\n");
} else {
  document.write("hello");
}
*/




/*____________AULA 2*/

$(document).ready (function() {
   // $('.list li').addClass('active')  COR NO FUNDO
                  
   // $('.btn').on('click', function() {
   //      $('.list li').addClass('active')
   // }) ____BOTAO   
    
   //$('.list li').on('click', function() { 
    // $(this).addClass('active')
   //}) DAR COR A CADA ITEM AO CLICK
   
    
  /*  $('.btn').on('click', function() { 
   $(this).text('hello')
   })
    */
    
    $('.btn').on('click', function() { 
        $('.list li').fadeToggle()
    })
 });



