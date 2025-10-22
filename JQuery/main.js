$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val().trim();
        
        // Verifica se o campo não está vazio
        if(enderecoDaNovaImagem === '') {
            alert('Por favor, insira uma URL válida para a imagem.');
            return;
        }
        
        // Cria o novo item da lista
        const novoItem = $('<li></li>');
        
        // Cria a imagem com tratamento de erro
        const novaImagem = $('<img>')
            .attr('src', enderecoDaNovaImagem)
            .attr('alt', 'Nova imagem adicionada')
            .on('error', function() {
                alert('Erro ao carregar a imagem. Verifique se a URL está correta.');
                $(this).attr('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVycm8gYW8gY2FycmVnYXI8L3RleHQ+PC9zdmc+');
            });
        
        novaImagem.appendTo(novoItem);
        
        // Cria o overlay com link
        const overlayDiv = $('<div class="overlay-imagem-link"></div>');
        $('<a>')
            .attr('href', enderecoDaNovaImagem)
            .attr('target', '_blank')
            .attr('title', 'Ver imagem em tamanho real.')
            .text('Ver imagem em tamanho real.')
            .appendTo(overlayDiv);
        
        overlayDiv.appendTo(novoItem);
        
        // Adiciona o novo item à lista
        $(novoItem).appendTo('ul');
        
        // Limpa o campo de input
        $('#endereco-imagem-nova').val('');
        
        // Esconde o formulário após adicionar
        $('form').slideUp();
        
        console.log('Nova imagem adicionada:', enderecoDaNovaImagem);
    })
})