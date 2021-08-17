function carregar(){
    var msg= window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src= "rato1.jpg"
        document.body.style.background = '#e2baba'
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src ="rato2.jpg"
        document.body.style.background = '#a27c4d'
    }else{
        //Boa noite
        img.src = "rato3.jpg"
        document.body.style.background = '#b7c1c0'
    }
}
