function calcTaxiFee(km) {
  const openingFee = 10000;
  const first30KmRate = 11000;
  const after30KmRate = 9500;

  let fare = openingFee;

  if (km <= 30) {
    fare = fare + km * first30KmRate;
  } else {
    fare = fare + 30 * first30KmRate;
    fare = fare + (km - 30) * after30KmRate;
  }
  return fare;
}
console.log(calcTaxiFee(31));
