
$(document).ready(function () {
    // Adicione eventos de clique nos botões "Adicionar ao Carrinho" nos cards
    $('.btn-primary').click(function () {
        // Obtenha os detalhes do produto a partir do card
        var productName = $(this).closest('.card').find('.card-title').text();
        var productPrice = $(this).closest('.card').find('.card-text').eq(1).text().replace('Preço: R$', '');

        // Adicione o item ao carrinho
        addToCart(productName, parseFloat(productPrice));
    });

    function updateCartTotal() {
        var total = 0;

        // Percorra todos os itens no carrinho e some seus totais
        $('#cart-items tr').each(function () {
            var itemTotal = parseFloat($(this).find('.total').text().replace('R$', ''));
            total += itemTotal;
        });

        // Exiba o total calculado
        $('#cart-total').text('R$' + total.toFixed(2));
    }

    // Chame a função ao carregar a página para exibir o total inicial
    updateCartTotal();

    // Função para adicionar itens ao carrinho
    function addToCart(productName, productPrice) {
       var existingItem = $('#cart-items').find('tr:contains("' + productName + '")');

        if (existingItem.length > 0) {
            // Atualize a quantidade e o total se o item já estiver no carrinho
            var quantity = parseInt(existingItem.find('.quantity').text());
            var total = parseFloat(existingItem.find('.total').text().replace('R$', ''));

            quantity++;
            total += productPrice;

            existingItem.find('.quantity').text(quantity);
            existingItem.find('.total').text('R$' + total.toFixed(2));
        } else {
            // Adicione um novo item ao carrinho
            var newRow = $('<tr><td>' + productName + '</td><td>R$' + productPrice.toFixed(2) + '</td><td class="quantity">1</td><td class="total">R$' + productPrice.toFixed(2) + '</td><td><button class="btn btn-danger btn-sm remove-item">Remover</button></td></tr>');

            $('#cart-items').append(newRow);
        }

        // Exiba a mensagem de sucesso e atualize o total
        var successMessage = 'Produto "' + productName + '" adicionado ao carrinho!';
        $('#cart-message').text(successMessage);
        
        // Atualize o total do carrinho
        updateCartTotal();
    }

    

    // Adicione eventos de clique nos botões "Remover" no carrinho
    $('#cart-items').on('click', '.remove-item', function () {
        $(this).closest('tr').remove();
    });

    //Funçao para limpar carrinho
    function clearCart() {
        $('#cart-items').empty(); // Limpa os itens do carrinho
        updateCartTotal(); // Zera o total do carrinho
        $('#cart-message').text('Carrinho limpo!');
    }

    // Adiciona um evento de clique ao botão "Limpar Carrinho"
    $('#clear-cart-btn').click(function () {
        clearCart();
    });
});
