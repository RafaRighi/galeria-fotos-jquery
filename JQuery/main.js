$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        
        const novoItem = $('<li style="display: none"></li>');
        $('<img>').attr('src', enderecoDaNovaImagem).appendTo(novoItem);
        
        const overlayDiv = $('<div class="overlay-imagem-link"></div>');
        $('<a>')
            .attr('href', enderecoDaNovaImagem)
            .attr('target', '_blank')
            .attr('title', 'Ver imagem em tamanho real.')
            .text('Ver imagem em tamanho real.')
            .appendTo(overlayDiv);
        
        overlayDiv.appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        
        $('#endereco-imagem-nova').val('');
    })
})