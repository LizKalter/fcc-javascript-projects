function convertToRoman(num) {
  var numerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  function convert(num) {
    for (var i = 0; i < numerals.length; i++) {
      if (num >= numerals[i][1]) {
        return numerals[i][0] + convertToRoman(num - numerals[i][1]);
      }
      if (num == 0) {
        return '';
      }
    }
  }

  return convert(num);
}
