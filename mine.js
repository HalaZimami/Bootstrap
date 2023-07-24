var keys = document.querySelectorAll('#calculator span');

for (i = 0; i < keys.length; i++) {
    keys[i].onclick = function () {
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btn = this.innerHTML;
        input.innerHTML += btn;

        if (btn == 'C') {
            input.innerHTML = ''
        }
        else if (btn == '=') {
            var equation = inputVal;
            let lastChar = equation[equation.length -1];

            if(lastChar == '.' || lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/')
            equation = equation.replace(/.$/, '');
            
            if (equation != '')
            input.innerHTML = eval(equation);
        }
    }
}