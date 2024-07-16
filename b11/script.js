//bai toan cho va ga
// var soGa = 2 * chanGa;
// var soCho = 4 * chanCho;

function timSogaCho(soCon, soChan) {
  for (var soGa = 0; soGa < soCon; soGa++) {
    var soCho = soCon - soGa;
    if (2 * soGa + 4 * soCho == soChan) {
      console.log(`Số Gà Chó là:${soGa},${soCho}`);
    }
  }
}
timSogaCho(30, 100);
