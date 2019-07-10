let number1 =parseInt (prompt ("Введите первый операнд"));
    //while (isNaN(a)) {
       // alert( 'Число пожалуйста!');
      //  break;
//}   
let number2 = parseInt (prompt ("Введите второй операнд"));
  //  while (isNaN(a)) {
    //    alert( 'Число пожалуйста!');
        
let action = prompt ("Выберите действие: 1=* 2=/ 3=+ 4=- 5=% ");
let res;
if (action==="1"){
    res = number1*number2;
} 
else if(action==="2"){
    res = number1/number2;
} 
else if (action==="3"){
    res = number1+number2;
} 
else if (action==="4"){
    res = number1-number2;
} 
else if (action==="5"){
    res = number1%number2;
} 

alert ("Результат равен: " + res);
