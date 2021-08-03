function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 4 && hora < 12) {
        // Bom dia!
        img.src = './img/imgmanha.png'
        document.body.style.background = '#dbc58b'
        alert('Bom dia!')
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = './img/imgtarde.png'
        document.body.style.background = '#729786'
        alert('Boa tarde!')
    } else {
        // Boa noite
        img.src = './img/imgnoite.png'
        document.body.style.background = '#05555e'
        alert('Boa noite')
    }
}


