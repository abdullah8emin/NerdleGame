
const bt1 = document.getElementById("1");
const bt2 = document.getElementById("2");
const bt3 = document.getElementById("3");
const bt4 = document.getElementById("4");
const bt5 = document.getElementById("5");
const bt6 = document.getElementById("6");
const bt7 = document.getElementById("7");
const bt8 = document.getElementById("8");
const bt9 = document.getElementById("9");
const bt0 = document.getElementById("0");

const btadd = document.getElementById("+");
const btsub = document.getElementById("-");
const btmult = document.getElementById("*");
const btdiv = document.getElementById("/");
const btequal = document.getElementById("=");
const btenter = document.getElementById("enter");
const btdel = document.getElementById("delete");

const buttons = document.querySelectorAll(".btns");


buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        buttons.forEach(function (btn) {
            btn.classList.remove('clicked');
        });
        button.classList.add('clicked');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        if (event.target === document.body) {
            buttons.forEach(function (button) {
                button.classList.remove("clicked");
                selectedIndex = null;
            })
        }
    });
});



var id;

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var buttonIndex = Array.from(buttons).indexOf(event.target);
        console.log("Tıklanan butonun indeksi: ", buttonIndex);
        var rn1 = Math.ceil((buttonIndex + 1) / 8);
        var rn2 = (buttonIndex + 1) - 8 * (rn1 - 1);

        id = "row" + rn1 + "-" + rn2;
        console.log(id);
        return id;
    });
});


let selectedIndex = null;

buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        selectedIndex = index;
    });
});


document.addEventListener("keydown", function (event) {
    if (event.key.match(/[0-9+\-*\/]/)) {
        if (selectedIndex !== null) {
            buttons[selectedIndex].textContent += event.key;
        }
    }
});


function selectNextButton() {
    if (selectedIndex !== null && selectedIndex < buttons.length - 1) {
        buttons[selectedIndex].classList.remove("clicked");
        selectedIndex++;
        buttons[selectedIndex].focus();
        buttons[selectedIndex].classList.add("clicked");
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key.match(/[0-9+\-*\/]/)) {
        selectNextButton();
    }
});


function bt1e() {
    document.getElementById(id).textContent = 1;
}

function bt2e() {
    document.getElementById(id).textContent = 2;
}

function bt3e() {
    document.getElementById(id).textContent = 3;
}

function bt4e() {
    document.getElementById(id).textContent = 4;
}

function bt5e() {
    document.getElementById(id).textContent = 5;
}

function bt6e() {
    document.getElementById(id).textContent = 6;
}

function bt7e() {
    document.getElementById(id).textContent = 7;
}

function bt8e() {
    document.getElementById(id).textContent = 8;
}

function bt9e() {
    document.getElementById(id).textContent = 9;
}

function bt0e() {
    document.getElementById(id).textContent = 0;
}

function btadde() {
    document.getElementById(id).textContent = "+";

}

function btsube() {
    document.getElementById(id).textContent = "-";
}

function btmulte() {
    document.getElementById(id).textContent = "*";
}

function btdive() {
    document.getElementById(id).textContent = "/";
}

function bteqe() {
    document.getElementById(id).textContent = "=";
}

function btentere() {
    alert("enter butonu çalışıyor");
}

function btdeletee() {
    document.getElementById(id).textContent = " ";
}

bt1.addEventListener("click", bt1e);
bt2.addEventListener("click", bt2e);
bt3.addEventListener("click", bt3e);
bt4.addEventListener("click", bt4e);
bt5.addEventListener("click", bt5e);
bt6.addEventListener("click", bt6e);
bt7.addEventListener("click", bt7e);
bt8.addEventListener("click", bt8e);
bt9.addEventListener("click", bt9e);
bt0.addEventListener("click", bt0e);

btadd.addEventListener("click", btadde);
btsub.addEventListener("click", btsube);
btmult.addEventListener("click", btmulte);
btdiv.addEventListener("click", btdive);
btequal.addEventListener("click", bteqe);
btenter.addEventListener("click", btentere);
btdel.addEventListener("click", btdeletee);



function evaluateExpression(expression) {
    try {
        return Function('"use strict";return (' + expression + ')')();
    } catch (error) {
        return "Hata: Geçersiz denklem";
    }
}

const check = document.getElementById("check");

const equationArray = ["8*7-47=9", "8*7-49=7", "9*20=180", "100/5=20", "50+49=99", "2*5+4=14"];
var rNum = Math.floor(Math.random() * 6);

var secretEq = equationArray[rNum];
console.log(secretEq);

var state = {
    tries: 1,
    rID: ""
}
function updateRID() {
    state.rID = "row" + state.tries + "-";
}
updateRID();


var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["+", "-", "*", "/", "="];
function func_check() {
    const equation = document.getElementById("equation").value;
    addToList(equation);

    const eqArr = equation.split("=");
    var result = evaluateExpression(eqArr[0]);
    if (result !== Number(eqArr[1])) {
        alert("Equation is wrong!");
    }
    else {
        for (var i = 1; i < 9; i++) {
            let x = state.rID + i;
            let a = equation.split("")[i - 1];
            document.getElementById(x).textContent = equation.split("")[i - 1];
            if (a === secretEq.split("")[i - 1] && numbers.includes(a)) {
                document.getElementById(x).classList.add("correct");
                document.getElementById(a).classList.add("correct");
            }
            else if (a === secretEq.split("")[i - 1] && symbols.includes(a)) {
                document.getElementById(x).classList.add("correct");
                document.getElementById(a).classList.add("correct");
            }
            else if (secretEq.includes(a) && numbers.includes(a)) {
                document.getElementById(x).classList.add("include");
                document.getElementById(a).classList.add("include");
            }
            else if (secretEq.includes(a) && symbols.includes(a)) {
                document.getElementById(x).classList.add("include");
                document.getElementById(a).classList.add("include");
            }
            else {
                document.getElementById(x).classList.add("notinclude");
                document.getElementById(a).classList.add("notinclude");
            }

        }
        state.tries++;
        updateRID();
    }

    state.tries--;
    updateRID();
    let endGame = false;

    for (let i = 1; i < 9; i++) {
        let x = state.rID + i;
        if (document.getElementById(x).classList.contains("correct")) {
            endGame = true;
        }
        else {
            endGame = false;
            break;
        }
    }

    state.tries++;
    updateRID();

    if (endGame) {
        myFunction();
    }
    else if (state.tries === 7 && endGame === false) {
        myFunction2();
    }
}

check.addEventListener("click", func_check);

function addToList(x) {
    var newLi = document.createElement("li");
    var newGuess = document.createTextNode(x);
    newLi.appendChild(newGuess);

    document.getElementById("guessList").appendChild(newLi);
}


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
}

function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.add("show");
}
