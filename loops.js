//1- Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
//2- Request two numbers and find only their largest common divisor.
//3- Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
//4- Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
//5- Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 
//6- Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. The loop continues until the user refuses. 
//7- Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).
//8- Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.
//9- Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 
//10- “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it in the following way: every loop iteration needs to divide the range
// of numbers in half, you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. 
// So the starting range is 0 to 100, divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 



 //1
/*
 let nr = prompt('Enter the number: ')*1;
 let sum=0;
 for(let i=1; i<=nr; i++){
     sum=sum + i;
 }
 console.log(`The summation of every number from 1 to ${nr} is ${sum}`);
*/


//2
/*
 let number1 = prompt('Enter the first number: ')*1;
 let number2 = prompt('Enter the second number: ')*1;
 if(number1 < number2) {
     for(let i=1; i<=number1; i++) {
         if(number1%i==0 && number2%i==0) {
             largestCommonDivisor=i;
         }
     }
 } else {
     for(let i=1;i<=number2;i++) {
         if(number1%i==0 && number2%i==0) {
             largestCommonDivisor=i;
         }
     }
 }
 console.log(`The largest common divisor for ${number1} and ${number2} is ${largestCommonDivisor}`);
 */


//3
/*
 let number = prompt('Enter the number: ')*1;
     for(let i=2;i<=number;i++){
         if(number%i==0){
             console.log(i);
         }
     }
*/


//4
/*
 let number = prompt('Enter the number: ')*1;
 let digits=0;
 while(number > 0){
     number = (number - number % 10) / 10;
     digits++;
 }
 console.log(`The given number has ${digits} digits`);
 */

 //9
/*
 for(let i=1;i<=10;i++) 
 {
     for(let j=1;j<=10;j++)
     console.log(`${i}*${j}=${i*j}`);
 }
 */


//5
/*
 let positive=0;
 let negative=0;
 let zero=0;
 let even=0;
 let odd=0;
 let notNumbers=0;
 for(let i=1; i<=10; i++){
     let number = prompt('Enter the number: ')*1;
     if(number>0) {
         positive++;
         if(number % 2==0)
         even++;
         else
         odd++;
     }
     else if(number<0) {
         negative++;
         if(number % 2==0)
         even++;
         else
         odd++;
     }
     else if (number==0){
     zero++;}else{
         notNumbers++;
     }
 }
 console.log(`There are: ${positive} positive numbers, ${negative} negative numbers, ${zero} zero numbers, ${even} even numbers, ${odd} odd numbers and ${notNumbers} invalid inputs`);
 */


//6
/*
 let answer=true;
 do{
     let number1 = prompt('Enter first number: ')*1; 
     let number2 = prompt('Enter second number: ')*1; 
     let operator = prompt('Enter operator: ');
     switch(operator) {
        case '+':
            console.log(number1 + number2);
           break;

       case '-':
       console.log(number1 - number2);
           break;

       case '*':
              console.log(number1 * number2);
             break;

       case '/':
              console.log(number1/number2);
             break;

        default:
              console.log("Not a valid operator");
             break;
     }  
 }
 while(answer);
 */

