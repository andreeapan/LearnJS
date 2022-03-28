/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 

*/


let MarksHeight = 1.69 ;
let MarksMass = 78;
let JohnsHeight = 1.95;
let JohnsMass = 92;

let BMIMark = MarksMass/MarksHeight ** 2
let BMIJohn = JohnsMass/JohnsHeight ** 2
if(BMIMark > BMIJohn ){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`)
} else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mike's BMI (${BMIMark})`)
}