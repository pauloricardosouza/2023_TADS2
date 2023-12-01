function toggleEpisodeInfo(episodeId) {
    var description = document.getElementById(episodeId);
    var image = document.getElementById('image' + episodeId.slice(2)); // Obtém o elemento da imagem correspondente
    var arrow = document.querySelector('#' + episodeId + ' .arrow');

    if (description.classList.contains('episode-description-hidden')) {
        description.classList.remove('episode-description-hidden');
        image.classList.remove('episode-image-hidden');
        arrow.textContent = '▼';
    } else {
        description.classList.add('episode-description-hidden');
        image.classList.add('episode-image-hidden');
        arrow.textContent = '▶';
    }
}

function exibirMensagem(formId) {
    
}