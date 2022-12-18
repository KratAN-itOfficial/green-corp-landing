//константа для задания скорости анимации
const INCREASE_NUMBER_ANIMATION_SPEED = 50;

//создаём функцию
//i — счетчик анимации. Он будет принимать значение от 0 до 5000 и каждый кадр анимации увеличиваться на 1.
//element — html-элемент тега с числом. За один кадр анимации значение внутри element мы будем менять на i.
//endNumber — значение, когда анимация остановится. В нашем случае — 5000.

function increaseNumberAnimationStep (i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }

      i+=100;

      setTimeout(function() {
        increaseNumberAnimationStep(i, element, endNumber);
      }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
  }

function initIncreaseNumberAnimation() {
  const element = document.querySelector('.features__clients-count');
  
  increaseNumberAnimationStep(0, element, 5000);
}


//15.12.2022 --
//--

//document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  //console.log(event);
//});

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input'); // Задание 1
 
    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text"; // Задание 2
      
    formContainer.appendChild(input);
    document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit')); // Задание 3
  }
 
  const otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && otherInput) { // Задание 5
  document.querySelector('.form form').removeChild(otherInput); // Задание 4
  }
});


//15.12.2022

//16.12.22

window.addEventListener('scroll', updateScroll);

function updateScroll() {
  if (window.scrollY > 0) {
    // ...
    document.querySelector('header');
    header.classList.add('header__scrolled');
  } else {
    // ...
    document.querySelector('header');
    header.classList.remove('header__scrolled');
  }

//4_5
// Запуск анимации увеличения числа
let windowBottomPosition = window.scrollY + window.innerHeight;
let countElementPosition = document.querySelector('.features__clients-count').offsetTop;

if (windowBottomPosition >= countElementPosition && !animationInited){
  initIncreaseNumberAnimation(); //16/12/22
  let animationInited = true;
}


}

//16.12.22


//18/12/22
//В функции addSmoothScroll для элемента link сделайте функцию onLinkClick обработчиком события click. 4.7
function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
 //С помощью метода document.querySelectorAll с аргументом a[href^="#"] получите коллекцию всех тегов a, а затем для каждого элемента из этой коллекции вызовите функцию addSmoothScroll. Для этого можно воспользоваться методом forEach.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector('.more-button'));
//
//

function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled');
  } else {
    document.querySelector('header').classList.remove('header__scrolled');
  }
 
  // Запуск анимации увеличения числа
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}
 
window.addEventListener('scroll', updateScroll);


//18/12/22