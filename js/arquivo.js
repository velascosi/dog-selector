// "Quando a janela for carregada, quero chamar esta função/executar esta atividade"
window.onload = function(){
    carregarCaes();
}
// Estas informações foram passadas pelo cliente
var caes = [false, true, false, true, true, false, true, false];

// Nesta função irá carregar os caes disponíveis ou indisponíveis
function carregarCaes(){
    var imagens = document.getElementsByTagName("img");
    for (var i=0; i<imagens.length; i++){
        if(caes[i]){
            imagens[i].src = "img/caes.png";
        } else {
            imagens[i].src = "img/caes_indisponivel.png"
        }
    }
} 
// Esta função dará a opção ao usuário escolher seu cão
function selecionarCaes(){
    var imagens = document.getElementsByTagName("img");
    for(var i=0; i<caes.length; i++){
        if(caes[i]){
            imagens[i].src = "img/cao_selecionado.png";

            var quer = confirm("Você deseja selecionar este cão?");
            if (quer){
                break;
            } else {
                imagens[i].src = "img/caes.png";
            }
        }
    }
}