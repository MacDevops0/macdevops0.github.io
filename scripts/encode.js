const inputText  = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const codeBtn    = document.getElementById('code-btn');
const decodeBtn  = document.getElementById('decode-btn');

let encryptedText = '';
let isEncrypted = false;
let isPasted = false; // Variável para rastrear se o texto foi colado

// Adicionando um EventListener para detectar colagem de texto
inputText.addEventListener('paste', (event) => {
    isPasted = true; // Define como verdadeiro quando o texto é colado
});

codeBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text && text !== encryptedText) {
        outputText.value = encodeText(text);
        encryptedText = outputText.value;
        inputText.value = '';
        inputText.disabled = true; // Desabilita o campo de entrada
        inputText.placeholder = "Aperte o botão 'Descodificar' para voltar ao texto original ou toque no texto criptografado para copiar para a área de transferência do Windows e depois enviar a uma amigo.";
        outputText.placeholder = "O texto voltou ao original."
        isEncrypted = true; // Define o estado como criptografado
    }
});

decodeBtn.addEventListener('click', () => {
    let text = inputText.value.trim();
    
    if (!text) {
        text = outputText.value.trim();
    }
    if (text) {
        inputText.value = decodeText(text);
        outputText.value = '';
        encryptedText = '';
        inputText.disabled = false; // Habilita o campo de entrada
        inputText.placeholder = 'Digite ou cole aqui o texto a ser codificado ou descodificado...';
        /*outputText.placeholder = 'Essa é a mensagem origina!';*/
        isEncrypted = false; // Define o estado como não criptografado
    }
    if (isPasted) { // Verifica se o texto foi colado antes de pressionar o botão
        outputText.placeholder = "Pronto! O texto foi descodificado.";
    }
    isPasted = false; // Redefine para falso após o clique no botão
});

function encodeText(text) {
    const shift = 3;
    let encoded = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        encoded += char;
    }
    return encoded;
}

function decodeText(text) {
  const shift = 3;
  let decoded = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
      }
    }
    decoded += char;
  }
  return decoded;
}

// Função para copiar o texto ao selecionar no campo de saída com o mouse
outputText.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString();
  if (selectedText) {
    navigator.clipboard.writeText(selectedText);
  }
});
//  Função que verifica clique do mousea
outputText.addEventListener('click', () => {
    // Obter o texto inteiro do campo de saída
    const entireText = outputText.value;
  
    // Copiar o texto inteiro para a área de transferência do Windows
    navigator.clipboard.writeText(entireText)
      .then(() => {
        // Exibir uma mensagem de alerta
        alert('Texto copiado para a área de transferência!');
      })
      .catch((error) => {
        console.error('Erro ao copiar o texto:', error);
      });
  });