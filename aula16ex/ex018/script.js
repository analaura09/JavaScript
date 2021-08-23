var num = document.querySelector('input#txtn')
var lista = document.querySelector('select#add')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != - 1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if (isNumero(num.value) && !inlista(num.value, valores)){

    }else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}


function Finalizar(){

}