
//    function level(Num) {




function level(form){
  var Num= form. rango. value
  console.log(form. rango. value);
  var t = 100
  var w = 80
  var x = 65
  var y = 50
  var z = 40
  var a = 30
  var b = 20
  var c = 10
  var d = 0
  if (Num == d) {
    document.querySelector('.level').innerHTML= 'novato';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/novato.jpg"
  }
  else if (Num <= c) {
    document.querySelector('.level').innerHTML= 'aprendiz';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/aprendiz.jpg"
  }
  else if (Num >= c && Num < b) {
    document.querySelector('.level').innerHTML= 'escudero';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/escudero.jpg"
  }
  else if (Num >= b && Num < a) {
    document.querySelector('.level').innerHTML= 'Caballero';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/caballero.jpg"
  }
  else if (Num >= a && Num < z) {
    document.querySelector('.level').innerHTML= 'Principe';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/principe.jpg"
  }
  else if (Num >= z && Num < y) {
    document.querySelector('.level').innerHTML= 'Brujo';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/brujo.jpg"
  }
  else if (Num >= y && Num < x) {
    document.querySelector('.level').innerHTML= 'Virrey';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/virrey.jpg"
  }
  else if (Num >= x && Num < w) {
    document.querySelector('.level').innerHTML= 'Rey';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/rey.jpg"
  }
  else if (Num >= w && Num < t) {
    document.querySelector('.level').innerHTML= 'PAPA';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/papa.jpg"
  }
  else {
    document.querySelector('.level').innerHTML= '!DIOS¡';
    document.querySelector('.character-image'). src ="../Nivel y Fibonacci/imagenes/dios.jpg"
  }
}


  function fibo(form){
  var size =  form.sucesión.value
  console.log(form. sucesión. value);

  var first = 0 ;
  var second = 1;
  var serie = [];
  for (var i = 0; i < size ; i++) {
    serie.push(' ' + first)
    second = first + second;
    first = second - first ;
  }
  document.querySelector('.fibo'). innerHTML = serie;
}
