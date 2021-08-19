function contar(){
    var ini = document.getElementById('txtin')
    var fi = document.getElementById('txtfi')
    var pa = document.getElementById('txtpa')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fi.value.length == 0 || pa.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML= 'contando:'
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pa.value)

        for (var c = i; c <= f; c+=p){
            res.innerHTML += ` ${c} \u{1F603} `
        }
        res.innerHTML
    }
}