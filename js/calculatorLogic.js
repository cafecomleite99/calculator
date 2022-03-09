const history = document.querySelector('.history')
const display = document.querySelector('#display')

/** Show in display */
function showInDisplay(ele) {
    let btnPressed = ele.textContent

    switch (btnPressed) {
        case 'C':
            display.innerHTML = ''
            history.innerHTML = ''
            break;
        case 'AC':
            display.innerHTML = ''
            history.innerHTML = ''
            break;

        case '+':
            history.innerHTML += display.innerHTML + ' + '
            display.innerHTML = ""
            break;

        case '-':
            history.innerHTML += display.innerHTML + ' - '
            display.innerHTML = ""
            break;

        case 'x':
            history.innerHTML += display.innerHTML + ' * '
            display.innerHTML = ""
            break;

        case '/':
            history.innerHTML += display.innerHTML + ' / '
            display.innerHTML = ""
            break;

        case '←':
            display.innerHTML = display.innerHTML.slice(0, -1)
            break;

        case '=':
            let equation = history.innerHTML + display.innerHTML
            const lastChar = equation[equation.length - 2]

            if (lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == '*') {
                history.innerHTML = history.innerHTML.slice(0, -2)
            }

            display.innerHTML = eval(history.innerHTML + display.innerHTML)
            history.innerHTML = ""
            break;

        default:
            display.innerHTML += btnPressed
            break;

    }
}
