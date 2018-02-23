function palindrome() {
  var word = prompt ('¿cual es tu Palindromo?')
  word = word.toLowerCase();
  word = word.replace(/\s/g, '');
  NewWord = word.split('').reverse(). join('');
  if (word == NewWord) {
      console.log('tienes un palindromo');
      alert   ('tienes un palindromo')
  }else {
    console.log('no es un palindromo');
    alert ('no es un palindromo')
  }
  console.log(word);
  console.log(NewWord);



}
function pyramid(){
  var floors = parseInt (prompt('pisos de la piramide'));
  var space ='';
  var bricks ='';
  for(var i =0; i<floors; i+1){
    space= ' '.repeat(floors - i);
    bricks = bricks + '*';
    console.log(space + bricks + bricks)
  }

}
