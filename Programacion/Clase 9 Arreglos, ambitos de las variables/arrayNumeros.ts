let num:number[] = [2,52,85,46,1,30];

for (let i:number = 0; i<6 ;i++){
    console.log(`el elemento en posiscion ${i}, es: ${num[i]}`);
}

console.log(`-----------------------------------------------------`)
console.log(`la cantida de elementos de mi array es: ${num.length}`)


// entonces podriamos crear el for asi

for (let i:number = 0; i<num.length ;i++){
    console.log(`el elemento en posiscion ${i}, es: ${num[i]}`);
}