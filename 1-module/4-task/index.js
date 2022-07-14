function checkSpam(str) {
  // ваш код...
  str = str.toString().toLowerCase();
  return str.includes('xxx') || str.includes('1xbet') || false;
}
