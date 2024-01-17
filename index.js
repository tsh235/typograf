const form = document.forms['form'];
const outputText = document.querySelector('.output__text');

const getTypografText = (text) => {
  const pattern = /(^|\s)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)\s/gi;

  return text.replace(pattern, '$1$2&nbsp;')
      .replace(/#|№/g, '&#8470;')
      .replace(/[©]/g, '&#169;')
      .replace(/"([^"]+)"/g, '&laquo;$1&raquo;')
      .replace(/[«]/g, '&laquo;')
      .replace(/[»]/g, '&raquo;')
      .replace(/(\s|^)-\s|\s-(\s|$)/g, ' &#151; ');
};

form['textarea'].addEventListener('input', () => {
  const button = document.querySelector('button');
  button.disabled = !form['textarea'].value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = form['textarea'].value;
  outputText.textContent = getTypografText(text);
});
