const input = document.querySelector('.block4 .switch input');
const yearly = document.querySelector('.block4 .yearly')
const monthly = document.querySelector('.block4 .monthly')
const block = document.querySelector('.block1');



const layer1 = document.querySelector('.layer .layer1');
const check1 = layer1.querySelector('.layer input');
const online = document.querySelector('.online');


check1.addEventListener('change', () => {
    if(check1.checked) {
        layer1.classList.add('checked');
        online.style.visibility = 'visible';
        
    } else {
        layer1.classList.remove('checked');
        online.style.visibility = 'hidden';
    }
})



const layer2 = document.querySelector('.layer .layer2');
const check2 = layer2.querySelector('.layer input');
const storage = document.querySelector('.storage');

check2.addEventListener('change', () => {
    if(check2.checked) {
        layer2.classList.add('checked');
        storage.style.visibility = 'visible';
    } else {
        layer2.classList.remove('checked');
        storage.style.visibility = 'hidden';
    }
})

const layer3 = document.querySelector('.layer .layer3');
const check3 = layer3.querySelector('.layer input');
const customize = document.querySelector('.customize');

check3.addEventListener('change', () => {
    if(check3.checked) {
        layer3.classList.add('checked');
        customize.style.visibility = 'visible';
    } else {
        layer3.classList.remove('checked');
        customize.style.visibility = 'hidden';
    }
})




const step2Switch = (checkboxValue) => {
    const blocks = document.querySelectorAll('.block'); 
    const block1__text = document.querySelector('.block1 h3');
    const block2__text = document.querySelector('.block2 h3');
    const block3__text = document.querySelector('.block3 h3');

   
    if(checkboxValue === 'yearly') {
        blocks.forEach(b => {
            b.children[3].textContent = '2 months free';
        })
        block1__text.textContent = '$90/yr';
        block2__text.textContent = '$120/yr';
        block3__text.textContent = '$150/yr';
    } else {
        block1__text.textContent = '$9/mo';
        block2__text.textContent = '$12/mo';
        block3__text.textContent = '$15/mo';
        
        blocks.forEach(b => {
            b.children[3].textContent = '';
        })

    }


    
}


const blocks = document.querySelectorAll('.block'); 
const block1 = document.querySelector('.grid-layout .block1');
const block2 = document.querySelector('.grid-layout .block2');
const block3 = document.querySelector('.grid-layout .block3');


blocks.forEach(p => {
    const display = document.querySelector('.summary .arcade .text h3 .promo-plan');
    
    p.addEventListener('click', e => {
        if(e.target.classList.contains('block1')) {
            block1.classList.add('highlight-plan');
            block2.classList.remove('highlight-plan');
            block3.classList.remove('highlight-plan');
            display.textContent = 'Arcade';
        } else if(e.target.classList.contains('block2')) {
            block2.classList.add('highlight-plan');
            block1.classList.remove('highlight-plan');
            block3.classList.remove('highlight-plan');
            display.textContent = 'Advanced';
        } else if(e.target.classList.contains('block3')) {
            block3.classList.add('highlight-plan');
            block1.classList.remove('highlight-plan');
            block2.classList.remove('highlight-plan');
            display.textContent = 'Pro';
        }
        
    })
})


const plan = (checkboxValue) => {

    const planPrice = document.querySelector('#form-container > div.form-container.form-4 > div.summary-container > div > div.arcade > div.price > h3 > span.value')
    blocks.forEach(p => {
        p.addEventListener('click', e => {
            if(checkboxValue === 'yearly') {
                if(e.target.classList.contains('block1')) {
                    planPrice.textContent = '$90'
                } else if(e.target.classList.contains('block2')) {
                    planPrice.textContent = '$120'
                } else if(e.target.classList.contains('block3')) {
                    planPrice.textContent = '$150'
                }
            } else if(checkboxValue === 'monthly') {
                if(e.target.classList.contains('block1')) {
                    planPrice.textContent = '$9'
                } else if(e.target.classList.contains('block2')) {
                    planPrice.textContent = '$12'
                } else if(e.target.classList.contains('block3')) {
                    planPrice.textContent = '$15'
                }
            } 

         })
    })
}
    

const step3Switch = (checkboxValue) => {
    const price = document.querySelectorAll('.layer .price h3');
    const duration = document.querySelector('.arcade .price h3 .duration-1');

    if(checkboxValue === 'yearly') {
        price[0].textContent = '+$10/yr';
        price[1].textContent = '+$20/yr';
        price[2].textContent = '+$20/yr';
        duration.textContent = '/yr';
    } else if(checkboxValue === 'monthly') {
        price[0].textContent = '+$1/mo';
        price[1].textContent = '+$2/mo';
        price[2].textContent = '+$2/mo';
        duration.textContent = '/mo';
    }


    
}



const price = document.querySelectorAll('.summary .price h3');
price.forEach(e=> {
    console.log(e)
})

const step4Switch = (checkboxValue) => {
    const price = document.querySelectorAll('.summary .price h3');
    const totalDur = document.querySelector('#form-container > div.form-container.form-4 > div.total > div.price > h1 > span.duration-2')
    const totalSpan = document.querySelector('.total .text h3 span');
    const span = document.querySelector('.summary .arcade .text h3 .duration');
    
    if(checkboxValue === 'yearly') {
        price[1].textContent = '+$10/yr';
        price[2].textContent = '+$20/yr';
        price[3].textContent = '+$20/yr';
        span.textContent = '(Yearly)';
        totalDur.textContent = '/yr';
        totalSpan.textContent = '(per year)';
    } else if (checkboxValue === 'monthly') {
        price[1].textContent = '+$1/mo';
        price[2].textContent = '+$2/mo';
        price[3].textContent = '+$2/mo';
        span.textContent = '(Monthly)';
        totalDur.textContent = '/mo';
        totalSpan.textContent = '(per month)';
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




const submitTotal = (checkboxValue) => {
    const submit = document.querySelector('#form-container > div.form-container.form-3.hide-form > div.submit-section-3 > div.btn-2 > button');
    const total = document.querySelector('#form-container > div.form-container.form-4 > div.total > div.price > h1 > span.value-2')
    
    submit.addEventListener('click', () => {

        if(checkboxValue === 'yearly') {
            if(block1.classList.contains('highlight-plan')) {   //ARCADE
                if(layer1.classList.contains('checked') ) {
                    total.textContent = '+$100';
                } else if(layer2.classList.contains('checked') || layer3.classList.contains('checked') ) {
                    total.textContent = '+$110';
                } 

            } else if(block2.classList.contains('highlight-plan')) {   //ADVANCED
                if(layer1.classList.contains('checked') ) {
                    total.textContent = '+$130';
                } else if(layer2.classList.contains('checked') || layer3.classList.contains('checked') ) {
                    total.textContent = '+$140';
                } 

            } else if(block3.classList.contains('highlight-plan')) {   //PRO
                if(layer1.classList.contains('checked') ) {
                    total.textContent = '+$160';
                } else if(layer2.classList.contains('checked') || layer3.classList.contains('checked') ) {
                    total.textContent = '+$170';
                } 

            }

        } else if(checkboxValue === 'monthly') {
            if(block1.classList.contains('highlight-plan')) {   //ARCADE
                if(layer1.classList.contains('checked') ) {
                    total.textContent = '+$10';
                } else if(layer2.classList.contains('checked') || layer3.classList.contains('checked') ) {
                    total.textContent = '+$11';
                } 

            } else if(block2.classList.contains('highlight-plan')) {   //ADVANCED
                if(layer1.classList.contains('checked') ) {
                    total.textContent = '+$13';
                } else if(layer2.classList.contains('checked') || layer3.classList.contains('checked') ) {
                    total.textContent = '+$14';
                } 

            } else if(block3.classList.contains('highlight-plan')) {   //PRO
                if(layer1.classList.contains('checked') ) {
                    total.textContent = '+$16';
                } else if(layer2.classList.contains('checked') || layer3.classList.contains('checked') ) {
                    total.textContent = '+$17';
                } 

            }

        } 
    })


}   



input.addEventListener('change', e => {
    const checkboxValue = e.target.checked ? 'yearly' : 'monthly';

    plan(checkboxValue)
    switchers(checkboxValue);
    step2Switch(checkboxValue);
    step3Switch(checkboxValue);
    step4Switch(checkboxValue);
    submitTotal(checkboxValue);
    
})


