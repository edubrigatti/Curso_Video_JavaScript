function carregar() {
    var msg = window.document.getElementById("msg")
    
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
           msg.innerHTML = `Agora são ${hora}hs e ${minuto}min`
        if (hora >= 0 && hora < 12) {
            
            document.body.style.background = "#e0e5ed"
        } else if (hora >= 12 && hora < 18) {
            
            document.body.style.background = "#5c597a"
        } else {
           
            document.body.style.background = "#0b2c3c"
        }
    }
