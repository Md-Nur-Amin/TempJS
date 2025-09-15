const transmission = "pQwErT123ZxY"; // given value
console.log(transmission.length); // check

function analyzeFluxEvents(transmission) { // given function name
    let n = 0; 
    for (let i = 0; i < transmission.length; i++) { // loop through each character
        const ascii = transmission[i]; //
        if (ascii >= "A" && ascii <= "Z") { // conditions check with uppercase and lowercase, if I use lowercase the output shows more than 5, so I assume it's uppercase only
            n++ ; // increment n value
        }
    }
    if(n>0){
        return `Detected ${n} high-voltage anomalies in signal stream.` ;
    }
    else{
        return  "Stream stable: no dominant flux events recorded." ;
    }
}

console.log(analyzeFluxEvents(transmission));