// animation texte page accueil

redimentionFen = function () {
    var largEcran = window.innerWidth;
    var hautEcran = window.innerHeight;
    if (window.innerWidth <= 1024) {
      largEcran = window.innerWidth;
    }
    if (window.innerHeight >= 800) {
      hautEcran = window.innerHeight;
    }
  };
  
  var position = 0;
  var msg =
    "Je t'envoie cette e-carte pour t'inviter  à mon incroyable anniversaire qui ce déroulera le 13/02/2021 dés 18h couvre feu oblige ... ça a déjas commencé  ca va être la chimamelure 👻! ...  ";
  var msg = " " + msg;
  var long = msg.length;
  var fois = 76 / msg.length + 1;
  for (i = 0; i <= fois; i++) {
    msg += msg;
  }
  function textdefil() {
    document.form1.deftext.value = msg.substring(position, position + 76);
    position++;
    if (position == long) position = 0;
    setTimeout("textdefil()", 250);
  }
  window.onload = textdefil;