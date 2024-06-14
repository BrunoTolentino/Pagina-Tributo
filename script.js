document.getElementById('botao').addEventListener('click', function() {
    var img = document.getElementById('imagem');
    var imagens = ['miucha1.jpg', 'miucha2.jpg', 'miucha3.jpg', 'miucha4.jpg', 'miucha5.jpg'];
    var currentSrc = img.src.split('/').pop(); // Obtém o nome do arquivo atual da imagem
    var currentIndex = imagens.indexOf(currentSrc); // Encontra o índice da imagem atual no array

    // Calcula o índice da próxima imagem
    var nextIndex = (currentIndex + 1) % imagens.length;

    // Define o novo src da imagem
    img.src = imagens[nextIndex];
});