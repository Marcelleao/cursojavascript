var numeroObj = document.getElementById('numero')
var listObj = document.getElementById('list')
var listArray = [2, 3, 4]


function addNumber(){   
    if (numeroObj.value <=0 || numeroObj.value > 100 || numeroObj.lenght == 0){
        window.alert('Número inválido')
    if(listArray.indexOf(numeroObj.value) == -1){
            listArray.push(numeroObj.value)
            var addItem = document.createElement('option')
            addItem.text = `Valor ${numeroObj.value} adicionado`
            listObj.appendChild(addItem)
        }else {
            console.log(`O número ${numeroObj.value} já foi inserido`)
        }
    }    
}
function analyze(){
    
}



