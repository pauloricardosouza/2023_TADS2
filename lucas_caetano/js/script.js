
function flipTo(digit, n) {
    const current = digit.dataset['num'];
    digit.dataset.num = n;
    digit.querySelector('.front').dataset['content'] = current;
    digit.querySelector('.back').dataset['content'] = n;
    digit.querySelector('.under').dataset['content'] = n;
    digit.querySelectorAll('.flap').forEach((ele) => {
        ele.style.display = 'block';
    });

    setTimeout(() => {
        digit.querySelector('.base').innerText = n;
        digit.querySelectorAll('.flap').forEach((ele) => {
            ele.style.display = 'none';
        });
    }, 350);
}

function jumpTo(digit, n) {
    digit.dataset.num = n;
    digit.querySelector('.base').innerText = n;
}

function updateGroup(digit1, digit2, n, flip) {
    n = String(n);
    if (n.length == 1) n = '0' + n;
    const num1 = n.substr(0, 1);
    const num2 = n.substr(1, 1);

    if (digit1.dataset['num'] != num1) {
        if (flip) {
            flipTo(digit1, num1);
        } else {
            jumpTo(digit1, num1);
        }
    }

    if (digit2.dataset['num'] != num2) {
        if (flip) {
            flipTo(digit2, num2);
        } else {
            jumpTo(digit2, num2);
        }
    }
}

function setTime(flip) {
    const t = new Date();
    const hourDigit1 = document.querySelector('.tenhour');
    const hourDigit2 = document.querySelector('.hour');
    const minDigit1 = document.querySelector('.tenmin');
    const minDigit2 = document.querySelector('.min');
    const secDigit1 = document.querySelector('.tensec');
    const secDigit2 = document.querySelector('.sec');

    updateGroup(hourDigit1, hourDigit2, t.getHours(), flip);
    updateGroup(minDigit1, minDigit2, t.getMinutes(), flip);
    updateGroup(secDigit1, secDigit2, t.getSeconds(), flip);
}

setTime(false);
setInterval(() => {
    setTime(true);
}, 1000);
