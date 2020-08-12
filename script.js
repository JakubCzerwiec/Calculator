/* Setting variables */

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');


/* Looping number buttons to add event listener */

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}


/* Event listener on equal button */

equalBtn.addEventListener('click', function() {

    if(screen.value === '') {
        alert('Input is empty')
    } else {let value = eval(screen.value);
        screen.value = value;
    }

})


/* Event listener on clear button */

clearBtn.addEventListener('click', function() {
    screen.value = '';
})