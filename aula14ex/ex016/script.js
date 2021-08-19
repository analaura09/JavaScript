function contar(){
    var ini = document.getElementById('txtin')
    var fi = document.getElementById('txtfi')
    var pa = document.getElementById('txtpa')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fi.value.length == 0 || pa.value.length == 0){
        res.innerHTML = 'Impossíel contar'
    }else{
        res.innerHTML= 'contando:'
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pa.value)

        if(p <= 0){
            window.aler
        }
        if(i < f){
            for (var c = i; c <= f; c+=p){
            res.innerHTML += ` ${c} \u{1F449} `
        }
        }
        else{
            for(var c=i; c>=f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}