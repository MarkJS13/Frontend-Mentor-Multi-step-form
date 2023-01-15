// shaded numbers 
const shade1 = document.querySelector('.img-display .numbers .one .number h1');
const shade2 = document.querySelector('.img-display .numbers .two .number h1');
const shade3 = document.querySelector('.img-display .numbers .three .number h1');
const shade4 = document.querySelector('.img-display .numbers .four .number h1');



// form-1

const form1 = document.querySelector('.form-1');
const btn = form1.querySelector('.btn button');

btn.addEventListener('click', () => {
    form1.classList.add('hide-form');
    form2.classList.remove('hide-form');
    shade1.classList.remove('shade');
    shade2.classList.add('shade');
})

const form1_form = form1.querySelector('form');
form1_form.addEventListener('submit', e => e.preventDefault())

// form-2

const form2 = document.querySelector('.form-2');
const backForm2 = form2.querySelector('.submit-section .back');
const btn2 = form2.querySelector('.submit-section .btn-2');

btn2.addEventListener('click', () => {
    form2.classList.add('hide-form');
    form3.classList.remove('hide-form');
    shade2.classList.remove('shade');
    shade3.classList.add('shade');
})

backForm2.addEventListener('click', () => {
    form1.classList.remove('hide-form')
    form2.classList.add('hide-form')
    shade1.classList.add('shade');
    shade2.classList.remove('shade');
})

// form-3
const form3 = document.querySelector('.form-3');
const btn3 = form3.querySelector('.submit-section-3 .btn-2');
const backForm3 = form3.querySelector('.submit-section-3 .back');

btn3.addEventListener('click', () => {
    form3.classList.add('hide-form');
    form4.classList.remove('hide-form');
    shade3.classList.remove('shade');
    shade4.classList.add('shade');
})
backForm3.addEventListener('click', () => {
    form2.classList.remove('hide-form');
    form3.classList.add('hide-form');
    shade2.classList.add('shade');
    shade3.classList.remove('shade');
})

// form-4

const form4 = document.querySelector('.form-4');
const btn4 = form4.querySelector('.submit-section-3 .btn-2');
const backForm4 = form4.querySelector('.submit-section-3 .back');


btn4.addEventListener('click', () => {
    form4.classList.add('hide-form');
    form5.classList.remove('hide-form');
    shade3.classList.remove('shade');
    shade4.classList.add('shade');
})
backForm4.addEventListener('click', () => {
    form3.classList.remove('hide-form');
    form4.classList.add('hide-form');
    shade3.classList.add('shade');
    shade4.classList.remove('shade');
})


// form-5

const form5 = document.querySelector('.form-5');