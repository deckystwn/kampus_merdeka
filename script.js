function angka1() {
  let frm = document.getElementById("formulir");
  frm.a1.value = "";
}

function angka2() {
  let frm = document.getElementById("formulir");
  frm.a2.value = "";
}

function kosongAll() {
  let frm = document.getElementById("formulir");
  frm.a1.value = "";
  frm.a2.value = "";
  frm.hasil.value = "";
}

function hitung(value) {
  let frm = document.getElementById("formulir");
  let angka1 = frm.a1.value;
  let angka2 = frm.a2.value;
  let operasi = value;

  //inputan salah
  if (isNaN(angka1) || isNaN(angka2) || angka1 == "" || angka2 == "" || !/^[0-9]+$/.test(angka1) || !/^[0-9]+$/.test(angka2)) {
    alert("harap isi data berupa angka");
  } else {
    //inputan benar
    if (operasi == "+") {
      let total = parseFloat(angka1) + parseFloat(angka2);
      frm.hasil.value = total;
    } else if (operasi == "-") {
      let total = angka1 - angka2;
      frm.hasil.value = total;
    } else if (operasi == "x") {
      let total = angka1 * angka2;
      frm.hasil.value = total;
    } else if (operasi == "÷") {
      let total = angka1 / angka2;
      frm.hasil.value = total;
    } else {
      let total = Math.pow(angka1, angka2);
      frm.hasil.value = total;
    }
  }
}

function batal() {
  let frm = document.getElementById("formulir");
  frm.a1.value = "";
  frm.a2.value = "";
}
