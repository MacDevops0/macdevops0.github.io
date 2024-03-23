Este é um projeto simples sugerido pela Alura que consiste na criação de uma aplicação web para criptografar um texto original e em seguida poder descriptogra-lo de volta ao original.
Observe que essa é apenas uma implementação simples da cifra de César para fins de exemplo. Em aplicações reais, você pode querer usar algoritmos de criptografia mais seguros e robustos.

Aqui está a lógica por trás das funções encodeText e decodeText:

    A função encodeText recebe o texto a ser codificado como entrada.
    É definido um deslocamento fixo de 3 posições no alfabeto (shift = 3).
    Um loop percorre cada caractere do texto.
    Para cada caractere, verificamos se é uma letra (maiúscula ou minúscula) usando uma expressão regular /[a-z]/i.

    Se for uma letra, obtemos o código ASCII do caractere usando charCodeAt.
    Dependendo se é uma letra maiúscula ou minúscula, aplicamos a fórmula da cifra de César para obter o novo código ASCII deslocado shift posições no alfabeto.
    Convertemos o novo código ASCII de volta para um caractere usando String.fromCharCode.
    O caractere codificado é adicionado à string encoded.
    Após o loop, a string encoded contém o texto codificado.
    A função decodeText segue a mesma lógica, mas com a fórmula de deslocamento invertida para decodificar o texto.

Com essa implementação, quando você digitar um texto no campo de entrada e clicar em "Codificar", o texto será codificado usando a cifra de César com um deslocamento de 3 posições no alfabeto.
Ao clicar em "Descodificar", o texto codificado será decodificado de volta ao texto original.

As alterações feitas no JavaScript são:

    Após a codificação do texto, o campo de entrada é limpo com inputText.value = '';.
    Após a descodificação do texto, o campo de saída é limpo com outputText.value = ''; e o texto descodificado é exibido no campo de entrada com inputText.value = decodeText(text);.

    E na linha:
    
            const text = isEncoded ? outputText.value : inputText.value;

            Essa linha verifica se o texto está codificado (isEncoded é true) e,
            nesse caso, obtém o texto do campo de saída (outputText.value). Caso 
            contrário, obtém o texto do campo de entrada (inputText.value).

Com essas alterações, o comportamento do aplicativo é o seguinte:

    Quando o botão "Codificar" é clicado, o texto no campo de entrada é codificado e exibido no campo de saída. O campo de entrada é limpo.
    Quando o botão "Descodificar" é clicado, o texto codificado no campo de saída é decodificado e exibido no campo de entrada. O campo de saída é limpo.

Dessa forma, o campo de entrada sempre exibe o texto original ou descodificado, e o campo de saída é usado apenas para exibir o texto codificado temporariamente.

O path para stylesheet utilizado nesse projeto: ./scripts/node_modules/animate.css/animate.css
O path para stylesheet alternativo: https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css