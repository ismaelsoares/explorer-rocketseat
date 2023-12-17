function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light')

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto ismael de oculos no zoológico")
    } else {
        img.setAttribute("src", "https://github.com/ismaelsoares.png")
        img.setAttribute("alt", "Foto Ismael sentado no trono de ferro")
    }
}


//se estiver light mode, adicionar a imagem ligh

// se tiver sem light mode, manter a imagem normal

//substituir a imagem 

