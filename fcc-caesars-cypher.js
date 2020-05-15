function rot13(str) {
  var map = new Map([['A', 'N'], ['B', 'O'], ['C', 'P'], ['D', 'Q'], ['E', 'R'], ['F', 'S'], ['G', 'T'], ['H', 'U'], ['I', 'V'], ['J', 'W'], ['K', 'X'], ['L', 'Y'], ['M', 'Z'], ['N', 'A'], ['O', 'B'], ['P', 'C'], ['Q', 'D'], ['R', 'E'], ['S', 'F'], ['T', 'G'], ['U', 'H'], ['V', 'I'], ['W', 'J'], ['X', 'K'], ['Y', 'L'], ['Z', 'M']]);

  var re = /[A-Z]/;
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (re.test(str.charAt(i))) {
      newStr += map.get(str.charAt(i));
    } else {
      newStr += str.charAt(i);
    }
  }
  return newStr;
}
