const input = document.querySelector('.block4 .switch input');
const yearly = document.querySelector('.block4 .yearly')
const monthly = document.querySelector('.block4 .monthly')
const block = document.querySelector('.block1');


const layer1 = document.querySelector('.layer .layer1');
const check1 = layer1.querySelector('.layer input');

check1.addEventListener('change', () => {
    if(check1.checked) {
        layer1.classList.add('checked');
    } else {
        layer1.classList.remove('checked');
    }
})

const layer2 = document.querySelector('.layer .layer2');
const check2 = layer2.querySelector('.layer input');

check2.addEventListener('change', () => {
    if(check2.checked) {
        layer2.classList.add('checked');
    } else {
        layer2.classList.remove('checked');
    }
})

const layer3 = document.querySelector('.layer .layer3');
const check3 = layer3.querySelector('.layer input');

check3.addEventListener('change', () => {
    if(check3.checked) {
        layer3.classList.add('checked');
    } else {
        layer3.classList.remove('checked');
    }
})





const step2Switch = (checkboxValue) => {
    const blocks = document.querySelectorAll('.block');
    const block1 = document.querySelector('.block1 h3');
    const block2 = document.querySelector('.block2 h3');
    const block3 = document.querySelector('.block3 h3');
    if(checkboxValue === 'yearly') {
        blocks.forEach(b => {
            console.log(b.children[3].textContent = '2 months free');
        })
        block1.textContent = '$90/yr';
        block2.textContent = '$120/yr';
        block3.textContent = '$150/yr';
    } else {
        block1.textContent = '$9/mo';
        block2.textContent = '$9/mo';
        block3.textContent = '$9/mo';
        
        blocks.forEach(b => {
            console.log(b.children[3].textContent = '');
        })
        

    }
}


const step3Switch = (checkboxValue) => {
    const price = document.querySelectorAll('.layer .price h3');
    if(checkboxValue === 'yearly') {
        price[0].textContent = '+$10/yr';
        price[1].textContent = '+$20/yr';
        price[2].textContent = '+$20/yr';
    } else {
        price[0].textContent = '+$1/mo';
        price[1].textContent = '+$2/mo';
        price[2].textContent = '+$2/mo';
    }
}




const step4Switch = (checkboxValue) => {
    const price = document.querySelectorAll('.summary .price h3');
    const total = document.querySelector('.total .price h1');
    if(checkboxValue === 'yearly') {
        price[0].textContent = '+$90/yr';
        price[1].textContent = '+$10/yr';
        price[2].textContent = '+$20/yr';
        total.textContent = '+$120/yr';
    } else {
        price[0].textContent = '+9/mo';
        price[1].textContent = '+$1/mo';
        price[2].textContent = '+$2/mo';
        total.textContent = '+$12/mo';
    }
}



const switchers = (checkboxValue) => {

    if(checkboxValue === 'yearly') {
        yearly.classList.add('highlight');
        monthly.classList.remove('highlight');
    } else {
        yearly.classList.remove('highlight');
        monthly.classList.add('highlight');
    }

}



input.addEventListener('change', e => {
    const checkboxValue = e.target.checked ? 'yearly' : 'monthly';
    
    switchers(checkboxValue);
    step2Switch(checkboxValue);
    step3Switch(checkboxValue);
    step4Switch(checkboxValue);
})