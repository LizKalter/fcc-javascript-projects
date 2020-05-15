function palindrome(str) {
  var newStr = '';
  var re = /[a-z0-9]/;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (re.test(str.charAt(i))) { // strip non-alphanumeric chars
      newStr += str.charAt(i);
    }
  }
  var palLength = Math.floor(newStr.length / 2);
  var firstHalf = newStr.slice(0, palLength);
  firstHalf = firstHalf.split("").reverse().join(""); // reverse the string
  var secondHalf = newStr.slice(newStr.length - palLength);
  return firstHalf == secondHalf;
}
