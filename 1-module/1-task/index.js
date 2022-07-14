function factorial(n) {
  // ваш код...
  let startNum=1;

  if (n in [1,0]){return 1};

  for (let i=2; n >= i; i++) {startNum = startNum * i;}

  return startNum

}
