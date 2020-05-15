function telephoneCheck(str) {
  var er = /^(1 ?)?(\d{3}|\(\d{3}\) ?)(-| )?\d{3}(-| )?\d{4}$/;
  return er.test(str);
}
