/**
 * Copy to clipboard
 */
const copyToClipboard = (value: string | number) => {
  const input = document.createElement('input');

  document.body.append(input);

  input.style.position = 'fixed';
  input.style.left = '-100000%';
  input.value = value.toString() || '';
  input.select();
  input.setSelectionRange(0, input.value.length + 1);

  document.execCommand('copy');
  document.body.removeChild(input);

  input.remove();
};

export { copyToClipboard };
