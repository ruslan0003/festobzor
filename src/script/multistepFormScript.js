// <!-- Created By CodingNepal -->
const slidePage = document.querySelector('.multistep-form__slide-page');
const nextBtnFirst = document.querySelector('.multistep-form__firstNext');
const prevBtnSec = document.querySelector('.multistep-form__prev-1');
const nextBtnSec = document.querySelector('.multistep-form__next-1');
const prevBtnThird = document.querySelector('.multistep-form__prev-2');
const nextBtnThird = document.querySelector('.multistep-form__next-2');
const prevBtnFourth = document.querySelector('.multistep-form__prev-3');
const submitBtn = document.querySelector('.multistep-form__submit');
const progressText = document.querySelectorAll('.multistep-form__step p');
const progressCheck = document.querySelectorAll('.multistep-form__step .multistep-form__check');
const bullet = document.querySelectorAll('.multistep-form__step .multistep-form__bullet');
let current = 1;

nextBtnFirst.addEventListener('click', function(event){
  event.preventDefault();
  slidePage.style.marginLeft = '-25%';
  bullet[current - 1].classList.add('multistep-form__active');
  progressCheck[current - 1].classList.add('multistep-form__active');
  progressText[current - 1].classList.add('multistep-form__active');
  current += 1;
});
nextBtnSec.addEventListener('click', function(event){
  event.preventDefault();
  slidePage.style.marginLeft = '-50%';
  bullet[current - 1].classList.add('multistep-form__active');
  progressCheck[current - 1].classList.add('multistep-form__active');
  progressText[current - 1].classList.add('multistep-form__active');
  current += 1;
});
nextBtnThird.addEventListener('click', function(event){
  event.preventDefault();
  slidePage.style.marginLeft = '-75%';
  bullet[current - 1].classList.add('multistep-form__active');
  progressCheck[current - 1].classList.add('multistep-form__active');
  progressText[current - 1].classList.add('multistep-form__active');
  current += 1;
});
submitBtn.addEventListener('click', function(){
  bullet[current - 1].classList.add('multistep-form__active');
  progressCheck[current - 1].classList.add('multistep-form__active');
  progressText[current - 1].classList.add('multistep-form__active');
  current += 1;
  setTimeout(function(){
    alert('Your Form Successfully Signed up');
    //location.reload();
  },800);
});

prevBtnSec.addEventListener('click', function(event){
  event.preventDefault();
  slidePage.style.marginLeft = '0%';
  bullet[current - 2].classList.remove('multistep-form__active');
  progressCheck[current - 2].classList.remove('multistep-form__active');
  progressText[current - 2].classList.remove('multistep-form__active');
  current -= 1;
});
prevBtnThird.addEventListener('click', function(event){
  event.preventDefault();
  slidePage.style.marginLeft = '-25%';
  bullet[current - 2].classList.remove('multistep-form__active');
  progressCheck[current - 2].classList.remove('multistep-form__active');
  progressText[current - 2].classList.remove('multistep-form__active');
  current -= 1;
});
prevBtnFourth.addEventListener('click', function(event){
  event.preventDefault();
  slidePage.style.marginLeft = '-50%';
  bullet[current - 2].classList.remove('multistep-form__active');
  progressCheck[current - 2].classList.remove('multistep-form__active');
  progressText[current - 2].classList.remove('multistep-form__active');
  current -= 1;
});