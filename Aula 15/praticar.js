let num = [5,8,2,9,3]
let tamanhoInicial = num.length
for (i = 0; i<=tamanhoInicial; i++){
    if (num.indexOf(i) == -1){
        num.push(i)
    }
}
num.sort()
console.log(num)