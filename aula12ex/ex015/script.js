function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] verifique os dados e tente novamente!`)
    }else{
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','HC.jpg')
            }else if (idade < 21){
                //adolescente
                img.setAttribute('src','AA.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','HA.jpg')
            }else{
                //idoso
                img.setAttribute('src','HI.jpg')
            }
        }else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','MC.jpg')
            }else if (idade < 21){
                //adolescente
                img.setAttribute('src','MA.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','MAd.jpg')
            }else{
                //idoso
                img.setAttribute('src','MI.jpg')
            }
        }
        res.style.textAlign = 'center'
        
        res.innerHTML = `você é ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}