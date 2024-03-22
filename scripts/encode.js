const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const codeBtn = document.getElementById('code-btn');

let isEncoded = false;

codeBtn.addEventListener('click', () => {
  const text = isEncoded ? outputText.value : inputText.value;
  if (isEncoded) {
    inputText.value = decodeText(text);
    outputText.value = '';
    codeBtn.textContent = 'Codificar';
    inputText.placeholder = 'Digite ou cole aqui o texto a ser codificado';
    isEncoded = false;
  } else {
    outputText.value = encodeText(text);
    inputText.value = '';
    codeBtn.textContent = 'Descodificar';
    inputText.placeholder = 'Veja o texto codificado no lado direito. Se quiser retornar ao texto original, aperte o botão "Descodificar".';
    isEncoded = true;
  }
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
