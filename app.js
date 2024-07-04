let number = Number(prompt('Please type number here'));

switch (number) {
    case 1:
        alert("One"); 
        break;
    case 0:
        alert("Zero"); 
        break;
    case -1:
        alert("Minus"); 
        break;
    default:
        alert("Invalid number"); 
        break;
}
console.log(`Number = ${number}`)
