// const measureKelvin = function(){
//     const measurement = {
//         type: "temp",
//         unit: "celsius",
//         value: Number(prompt('Degrees celsius'))
//     }

//     console.log(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// // identify BUG
// console.log(measureKelvin())

//using a debugger
const calcTempAmplitudeBug = function (t1, t2){

    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp != 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;

    }

    console.log(max, min);
    return max - min;

}

const aplitudeBug = calcTempAmplitudeBug([3,5,1], [9,4,5]);
//identify
console.log(aplitudeBug)