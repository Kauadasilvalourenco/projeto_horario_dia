var corFundo = document.querySelector("div#cor_de_fundo")
var horasDoDia = document.querySelector("p#horas_do_dia")
var imagemManha = document.querySelector("img#imagem_manha")
var imagemTarde = document.querySelector("img#imagem_tarde")
var imagemNoite = document.querySelector("img#imagem_noite")
var horaSistema = new Date()
var horas = horaSistema.getHours()

if (horas < 12) {
    horasDoDia.innerHTML = `Agora são ${horas} horas da Manhã <br> Bom Dia!`
    imagemManha.style.display = "block"
    corFundo.style.backgroundColor = "navajowhite"
}
else {
    if (horas >= 12 && horas < 19) {
        horasDoDia.innerHTML = `Agora são ${horas} horas da Tarde <br> Boa Tarde!`
        imagemManha.style.display = "none"
        imagemTarde.style.display = "block"
        corFundo.style.backgroundColor = "burlywood"
    }
    else {
        horasDoDia.innerHTML = `Agora são ${horas} horas da Noite <br> Boa Noite!`
        imagemManha.style.display = "none"
        imagemTarde.style.display = "none"
        imagemNoite.style.display = "block"
        corFundo.style.backgroundColor = "darkslategray"
    }
}