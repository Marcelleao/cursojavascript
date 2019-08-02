let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true   
    }else {
        return false
    }
}

function onLoad(){
    num.focus()
}
function maiorNum(v){
    v.sort()
    return valores[valores.length - 1]
}
function menorNum(v){
    v.sort()
    return valores[0]
}
function somaNum(v){
    let soma = 0
    for (i = 0; i < v.length; i++){
        soma += v[i]

    }
    return soma
}
function mediaNum(v){
    let soma = somaNum(v)
    return soma / v.length

    
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione pelo menos um número antes!')
        
    } else {
        let tot = valores.length
        /*let maior = maiorNum(valores)
        let menor = menorNum(valores)
        let resultSoma = somaNum(valores)
        let resultMedia = mediaNum(valores)*/
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML +=`<p>O maior é ${maiorNum(valores)}</p>`
        res.innerHTML +=`<p>O menor é ${menorNum(valores)}</p>`
        res.innerHTML += `<p>A soma dos números é ${somaNum(valores)}</p>`
        res.innerHTML += `<p>A média dos números é ${mediaNum(valores)}</p>`
        
    }
    num.focus()
}

