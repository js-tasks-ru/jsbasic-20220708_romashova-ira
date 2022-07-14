function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    return str.substring(0, maxlength - 1) + "…";
   }
    return str;
}
