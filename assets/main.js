const imagensCarrossel = document.getElementsByClassName("img-carrossel");
const botaoAvancar = document.getElementById("avancar")
function mostrarImagem(indice){
    imagensCarrossel[indice].setAttribute("class", "img-carrossel display-block")
}
function esconderImagens(){
    for(let i=0; i<=imagensCarrossel.length-1; i++){
        imagensCarrossel[i].setAttribute("class", "img-carrossel display-none")   
    }
}
let indice=0
window.onload=()=>{
    esconderImagens()
    mostrarImagem(1)
}
