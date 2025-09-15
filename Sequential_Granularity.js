const temporalCode = 20240628;

const sequence = temporalCode.toString().split(''); // Convert to string and split into array
let LayeredDepth = sequence.length; // Initial length of the sequence to check further conditions, 

console.log(sequence); // check
console.log(LayeredDepth); // check2
console.log(sequence.join('')); // check3: join back to string checking if it maches original or not, don't wanna take any chances

if (LayeredDepth>=11){ // 2 digit highest binary is 11, so if length is 11 or more, it's Omega
    console.log("Security Level: Omega");
}
else {
    console.log("Security Level: Sigma"); // else it's Sigma
}