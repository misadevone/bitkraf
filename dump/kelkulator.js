//calculator app

var total;
var acceptable = ['0','1','2','3','4','5','6','7','8','9'];
var operator = ['+','-']
var n1 = 0;
var a1 = "Please enter your math eg: 20+20 and press calculate, have fun <br><input type='text' id='calculatorInput'/> <input type='button' value='calculate' onclick='calcCalculate(this)'><h1>The Answer IS:<span id='calcAns'></span></h1>";
var a = document.getElementById('content-calculator');

loadCalculator();

function loadCalculator() {
    console.log(a);
    a.append(a1);

    a.innerHTML = a1;
}

function calcCalculate(e) {
    var total;
    var t = 0;
    var n1 = document.getElementById('calculatorInput').value;
    // console.log(n1);
    // console.log(n1.length);
    var n2 = document.getElementById('calcAns');
    n2.innerHTML = n1;

    for(let i=0; i < n1.length; i++){
        // console.log(n1[i]);
        if(acceptable.includes(n1[i])){
            console.log(n1[i]);
            total[t] = total[t]+n1[i];
        }
        
        if(n1[i] == '+'){
            t++;
            // total = total+n1[i];
        }

        if(n1[i] == '-'){
            t++;
            // total = total-n1[i];
        }

    }
    console.log('and the final calculation iszzz:'+total+t);
}