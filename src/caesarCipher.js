export default function caesarCipher(str, shift) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'a' && char <= 'z') {
      const code = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
      result += String.fromCharCode(code);
    } else if (char >= 'A' && char <= 'Z') {
      const code = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
      result += String.fromCharCode(code);
    } else {
      result += char;
    }
  }
  return result;
}
