function tabuada() {
  var num = document.getElementById('txtn')
  var res = document.getElementById('res')
  if (num.value.length == 0 || num.value == 0) {
    window.alert('Insira um valor válido!')
  } else {
    res.innerHTML = ''
    let tab = Number(num.value)
    for (let c = 1; c <= 10; c++) {
      res.innerHTML += `<option>${tab} x ${c} = ${tab * c}</option>`
    }
  }
}
