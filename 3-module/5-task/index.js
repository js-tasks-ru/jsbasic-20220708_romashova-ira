function getMinMax(str) {
  const res = {};
  str.replace(/\S+/g, (n) => {
    n = +n;
    (!("min" in res) || res.min > n) && (res.min = n);
    (!("max" in res) || res.max < n) && (res.max = n);
  });
  return res;
}
