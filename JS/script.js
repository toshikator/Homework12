
function helloSayer(){
    const inText = document.querySelector('#inputName');
    let spanHello = document.querySelector('#spanHello');
    spanHello.textContent = 'Hello ' + inText.value;
}

function identityChecker() {
    const pass1 = document.querySelector('#inputPasswd');
    const pass2 = document.querySelector('#confirmPasswd');
    const identitySpan = document.querySelector('#identitySpan');
    if (pass1.value === pass2.value){
        identitySpan.textContent = 'Equal';
    }
    else{
        identitySpan.textContent = 'Not Equal';
    }
}

function randomGenerator(){
    const date = new Date();
    let time = date.getTime();
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    randomSpan = document.querySelector('#randomSpan');
    randomSpan.textContent = getRandomInt(time);
}

document.getElementById("testID").onmouseover = function() {mouseOver()};
document.getElementById("testID").onmouseout = function() {mouseOut()};

function mouseOut() {
    document.getElementById("testID").style.backgroundColor = "white";
}

function mouseOver() {
        const date = new Date();
        let max = date.getTime() / 6700000000;
        let r = 0, g = 0, b = 0;
        r = Math.floor(Math.random() * max);
        g = Math.floor(Math.random() * max);
        b = Math.floor(Math.random() * max);
        let checkerColor = document.getElementsByClassName('identityChecker');
        let string = 'rgb(' + r + ',' + g + ',' + b + ')';
        console.log(string);
        document.getElementById("testID").style.backgroundColor = string;
}







