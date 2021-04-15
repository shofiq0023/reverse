let input = document.querySelector('input');
let output = document.querySelector('#output');

const validateText = () => {
    if (output.innerText == ""){
        output.innerText = "result here";
    }
}

const reverse = () => {
    let inputVal = input.value;
    inputVal = inputVal.split('').reverse().join('');
    output.innerText = inputVal;
    output.style.textTransform = 'capitalize';
    validateText();
}

input.addEventListener('keyup', reverse);