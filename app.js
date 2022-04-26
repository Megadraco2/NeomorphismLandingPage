const text = ['Desenvolvedor front-end - Web/Mobile'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if (count === text.length) {
    count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    
    setTimeout(type, 100);

}());