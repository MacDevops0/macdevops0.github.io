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

*******************************************************************************************************************
03:30h 24/3/2024 ENCODE.JS

Aqui está uma explicação detalhada do código:

Obtenção dos elementos HTML:
inputText é o campo de entrada de texto onde o usuário insere o texto a ser codificado/decodificado.
outputText é o campo de saída onde o texto codificado/decodificado é exibido.
codeBtn é o botão para codificar/decodificar o texto.
decodeBtn é o botão que você mencionou para descriptografar (decodificar) o texto.
Variável de estado:
isEncoded é uma variável booleana que mantém o estado de codificação do texto. Se true, o texto está codificado; se false, o texto está decodificado.
Manipulação do botão de codificação/decodificação:
Um evento de clique é adicionado ao botão codeBtn.
Quando o botão é clicado, a função de manipulação verifica o estado atual de isEncoded.
Se isEncoded for true, o texto no campo outputText é decodificado usando a função decodeText e exibido no campo inputText. O campo outputText é limpo, o texto do botão é alterado para "Codificar", e isEncoded é definido como false.
Se isEncoded for false, o texto no campo inputText é codificado usando a função encodeText e exibido no campo outputText. O campo inputText é limpo, o texto do botão é alterado para "Descodificar", e isEncoded é definido como true.
Funções de codificação e decodificação:
A função encodeText codifica o texto fornecido usando uma cifra de deslocamento com um deslocamento de 3 posições. Ela percorre cada caractere do texto e, se for uma letra (maiúscula ou minúscula), desloca o caractere 3 posições no alfabeto.
A função decodeText decodifica o texto fornecido usando uma cifra de deslocamento com um deslocamento de 3 posições. Ela percorre cada caractere do texto e, se for uma letra (maiúscula ou minúscula), desloca o caractere 3 posições no sentido oposto no alfabeto.

*******************************************************************************************************************
04:00h 24/3/2024
No evento de clique do botão "Codificar" (codeBtn), obtém-se o valor do campo de entrada (inputText.value). Se o valor não for vazio, o texto é codificado usando a função encodeText, e o resultado é exibido no campo de saída (outputText.value). Em seguida, o campo de entrada é limpo (inputText.value = '').
No evento de clique do botão "Descodificar" (decodeBtn), obtém-se o valor do campo de saída (outputText.value). Se o valor não for vazio, o texto é decodificado usando a função decodeText, e o resultado é exibido no mesmo campo de saída (outputText.value). Em seguida, o campo de entrada é limpo (inputText.value = '').

*******************************************************************************************************************
04:59h 24/3/2024
Aqui estão as alterações feitas:

Adicionei uma variável encryptedText para armazenar o texto criptografado.
No evento de clique do botão "Codificar" (codeBtn):
Removi os espaços em branco extras do início e fim do texto usando inputText.value.trim().
Verifiquei se o texto não está vazio e se é diferente do texto criptografado armazenado em encryptedText. Isso evita que o mesmo texto seja criptografado novamente.
Após criptografar o texto, armazenei o texto criptografado em encryptedText e limpei o campo de entrada (inputText.value = '').
Adicionei outputText.style.overflowY = 'hidden'; para ocultar a barra de rolagem vertical no campo de saída.
No evento de clique do botão "Descodificar" (decodeBtn):
Removi os espaços em branco extras do início e fim do texto usando outputText.value.trim().
Verifiquei se o texto não está vazio.
Decodifiquei o texto usando a função decodeText e exibi o resultado no campo de entrada (inputText.value).
Limpei o campo de saída (outputText.value = '').
Resetei a variável encryptedText para uma string vazia.
Adicionei outputText.style.overflowY = 'auto'; para restaurar a barra de rolagem vertical no campo de saída quando necessário.
Com essas alterações, o comportamento do aplicativo será:

Ao clicar em "Codificar", o texto no campo de entrada será criptografado e exibido no campo de saída, sem barra de rolagem vertical. O campo de entrada será limpo.
Se o mesmo texto for criptografado novamente, nada acontecerá.
Ao clicar em "Descodificar", o texto criptografado no campo de saída será decodificado e exibido no campo de entrada. O campo de saída será limpo e a barra de rolagem vertical será restaurada, se necessário.

*******************************************************************************************************************
05:12h 24/3/2024

Após criptografar o texto , nao é permitido que nenhum outro texto seja digitado ou colado no campo de entrada até que o botao de descriptografar seja apertado ou clicado pelo usuario.

Aqui estão as alterações feitas:

Adicionei uma variável isEncrypted para rastrear se o texto está criptografado ou não.
No evento de clique do botão "Codificar" (codeBtn):
Após criptografar o texto e exibi-lo no campo de saída, adicionei a linha inputText.disabled = true; para desabilitar o campo de entrada.
Defini isEncrypted como true para indicar que o texto está criptografado.
No evento de clique do botão "Descodificar" (decodeBtn):
Após decodificar o texto e exibi-lo no campo de entrada, adicionei a linha inputText.disabled = false; para habilitar o campo de entrada novamente.
Defini isEncrypted como false para indicar que o texto não está mais criptografado.
Com essas alterações, o comportamento do aplicativo será:

Ao clicar em "Codificar", o texto no campo de entrada será criptografado e exibido no campo de saída. O campo de entrada será limpo e desabilitado, impedindo que o usuário digite ou cole qualquer texto nele.
Quando o campo de entrada estiver desabilitado, o usuário ainda poderá selecionar e copiar o texto no campo de saída.
Ao clicar em "Descodificar", o texto criptografado no campo de saída será decodificado e exibido no campo de entrada. O campo de saída será limpo, e o campo de entrada será habilitado novamente, permitindo que o usuário digite ou cole um novo texto.

*******************************************************************************************************************
06:12h 24/3/2024

Enquanto texto criptografado está no campo de saída de texto, e o campo de entrada desabilitado, quero que apareça no campo de entrada de texto a mensagem de placeholder: "Agora toque na tela ou clique com mouse no botão 'Descodificar' para o texto voltar ao original."

Aqui estão as alterações feitas:

No evento de clique do botão "Codificar" (codeBtn), após desabilitar o campo de entrada (inputText.disabled = true;), adicionei a linha:

inputText.placeholder = "Agora toque na tela ou clique com mouse no botão 'Descodificar' para o texto voltar ao original.";
(Essa linha define o texto de placeholder do campo de entrada para a mensagem desejada.)

No evento de clique do botão "Descodificar" (decodeBtn), após habilitar o campo de entrada (inputText.disabled = false;), adicionei a linha:

inputText.placeholder = 'Digite ou cole aqui o texto a ser codificado';
(Essa linha restaura o texto de placeholder padrão do campo de entrada.)

Com essas alterações, o comportamento do aplicativo será:

Ao clicar em "Codificar", o texto no campo de entrada será criptografado e exibido no campo de saída. O campo de entrada será limpo, desabilitado e exibirá a mensagem de placeholder: "Agora toque na tela ou clique com mouse no botão 'Descodificar' para o texto voltar ao original.".
Quando o campo de entrada estiver desabilitado, o usuário ainda poderá selecionar e copiar o texto no campo de saída.
Ao clicar em "Descodificar", o texto criptografado no campo de saída será decodificado e exibido no campo de entrada. O campo de saída será limpo, e o campo de entrada será habilitado novamente, exibindo o placeholder padrão: "Digite ou cole aqui o texto a ser codificado".

*******************************************************************************************************************








