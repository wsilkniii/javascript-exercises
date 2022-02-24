const ftoc = function(far) {
  conv = (far - 32) * 5/9;
  return (parseInt(conv.toPrecision(1)));
};

const ctof = function(cel) {
  conv = (cel * 9/5) + 32;
  return (parseInt(conv.toPrecision(1)));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
