let names = [
  'Alexey','Andrey','Artem','Vadim','Vladimir','Vladislav','Dmitry',
  'Evgeny','Ivan','Kirill','Maxim','Mikhail','Nikita','Pavel','Sergey', 
  'Oleg', 'Anna', 'Victoria', 'Darya', 'Ekaterina', 'Elizaveta', 'Ksenia', 
  'Maria', 'Marina', 'Nadezhda', 'Natalya', 'Olga', 'Polina', 'Svetlana', 
  'Sofia', 'Tatyana', 'Yulia',
];

let input = document.getElementById('input');
let button = document.querySelector('.button');
let greetingText = document.querySelector('.greeting-text');
let greetingAdvice = document.querySelector('.greeting-advice');
let hint = document.querySelector('.hint');

function getRandomIndex(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

hint.addEventListener('click', function () {
  input.value = 'nothing';
})

button.addEventListener('click', function () {
  let value = input.value;
  
  if (value.toLowerCase() === "nothing") {
    let random = `${getRandomIndex(names)}`;
    
    hint.style.display = 'none';
    greetingAdvice.style.display = 'block';
    greetingText.style.cursor = 'pointer';

    button.textContent = 'click';
    greetingText.textContent = `Okay, maybe ${random}, or...`;

    greetingText.addEventListener('click', function () {
      input.value = random;
    })

  } else if (!isNaN(value)) {
    hint.style.display = 'block';
    greetingAdvice.style.display = 'none';

    button.textContent = '-->';
    greetingText.textContent = ``;

  } else {
    input.value = '';
    
    greetingAdvice.style.display = 'none';
    hint.style.display = 'block';

    button.textContent = '-->';
    greetingText.textContent = `Hello, ${value}`;
  }
});


