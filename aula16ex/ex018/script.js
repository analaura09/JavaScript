var num = document.querySelector('input#fnum')
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
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}


function Finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores para finalizar!')
    }else{
        var total = valores.length
        var soma = 0
        var media = 0
        var maior = valores[0]
        var menor = valores[0]
        valores.sort()

        for (var pos in valores){
            soma += valores[pos]
            if(valores[pos] >maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
    
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>o menor número é ${menor}</p>`
        valores.sort((a,b) => b-a)
        res.innerHTML += `<p> o maior número é ${valores[0]}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}