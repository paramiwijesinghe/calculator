function functionForNum0(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+0;
}

function functionForNum1(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+1;
}

function functionForNum2(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+2;
}

function functionForNum3(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+3;
}

function functionForNum4(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+4;
}


function functionForNum5(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+5;
}

function functionForNum6(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+6;
}

function functionForNum7(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+7;
}

function functionForNum8(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+8;
}

function functionForNum9(){
    let previousInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previousInput+9;
}

function functionForErase(){
    let previousInput = document.getElementById("display").innerHTML;
     let deletePrevious = previousInput.slice(0,-1);
     document.getElementById("display").innerHTML = deletePrevious;

}

let op;
let firstInput;
function functionForADD(){
   firstInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = firstInput + "+";
    op="+";

}

function functionForSUB(){
    firstInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = firstInput + "-";
    op="-";

}

function functionForMUL(){
    firstInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = firstInput + "*";
    op="*";

}

function functionForDIV(){
    firstInput = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = firstInput + "/";
    op="/";

}

function functionForEQ(){
    let secondInput = parseFloat(document.getElementById("display").innerHTML.split(op)[1]);
    if(op=="+"){
        document.getElementById("display").innerHTML = parseFloat(firstInput) + secondInput;
    }

    else if(op=="-"){
        document.getElementById("display").innerHTML = parseFloat(firstInput) - secondInput;
    }

    else if(op=="*"){
        document.getElementById("display").innerHTML = parseFloat(firstInput) * secondInput;
    }

   else if(op=="/"){
        document.getElementById("display").innerHTML = parseFloat(firstInput) / secondInput;
    }


else{
    document.getElementById("display").innerHTML = "Invalid.";

}
    
}

function functionForCLEAR(){
    document.getElementById("display").innerHTML = "0";
    op="";

}