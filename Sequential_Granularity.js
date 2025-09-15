const temporalCode = 20240628;

const sequence = temporalCode.toString().split('');
let LayeredDepth = sequence.length;

console.log(sequence);
console.log(sequence.length);
console.log(sequence.join(''));

if (LayeredDepth>=11){
    console.log("Security Level: Omega");
}
else {
    console.log("Security Level: Sigma");
}