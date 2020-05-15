function checkCashRegister(price, cash, cid) {
  var values = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  var change = ((cash * 100) - (price * 100)) / 100;
  
  var registerTotal = 0;
  for (var i = 0; i < cid.length; i++) {
    registerTotal += (cid[i][1] * 100);
  }
  registerTotal = registerTotal / 100;

  if (change > registerTotal) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (change == registerTotal) {
    return {status: "CLOSED", change: cid};
  } else {
    var arr = [];
    for (var i = cid.length-1; i >= 0; i--) {
      var currentTotal = cid[i][1];
      var currentValue = values[i][1];
      if (currentTotal == change) {
        arr.push(cid[i]);
        change = ((change * 100) - (currentTotal * 100)) / 100;
      } else if (currentTotal > 0 && currentValue <= change) {
        var count = Math.floor((change * 100) / (currentValue * 100));
        var value = count * currentValue;
        if (value > currentTotal) {
          count = currentTotal / currentValue;
          value = count * currentValue;
        }
        change = Math.round((change * 100) - (value * 100)) / 100;
        arr.push([cid[i][0], value]);
      }
    }
    if (change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: arr};
    }
  }
}
