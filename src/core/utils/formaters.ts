/**
 * Capitalize each word in string
 */
const capitalize = (source: string) =>
  source
    .split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.substring(1))
    .join(' ');

export { capitalize };
