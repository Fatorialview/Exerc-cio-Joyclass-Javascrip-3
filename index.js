const numerosDaSorte = [37, 14, 26, 5, 94, 87];  

for (let i = 0; i < numerosDaSorte.length; i++){
  const n = numerosDaSorte[i];


if (n % 2 === 0 && n < 50) {
  console.log('${n} é par e menor que 50')
}
else if (n < 50) {
  console.log('${n} é menor que 50')
}
else {
  console.log('${n} é maior que 50')
}


}
