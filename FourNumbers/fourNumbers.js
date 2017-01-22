/**
 * Created by user on 21/01/17.
 */

var myNumber = new Number(4);
var tbl=document.getElementById("tbl");
var rowCurrent;

var addBtn= document.getElementById("addBtn");
addBtn.setAttribute("disabled","true");
addBtn.onclick=function () {
    addRow();
}

var startBtn = document.getElementById("newGame");
startBtn.onclick=function() {
    myNumber.generateNewNumber(4);
    console.log(myNumber.toStr());
    addBtn.removeAttribute("disabled");
};

function sendOK (ans,i){
    ans.innerHTML=getAnswer(i);
    rowsDisable();
}
function rowsDisable() {
    var numberBtn = document.getElementsByClassName("btn");
    for (i=0; i<numberBtn.length; i++) {
        numberBtn[i].setAttribute("disabled","true");
    }
    return numberBtn.length;

    var numbersAnswer = rowCurrent.getElementsByClassName("number");
    // console.log(numbersAnswer);
    for (i=0; i<numbersAnswer.length; i++) {
        res.answer+=numbersAnswer[i].value;
        if (myNumber.getNumberForPosition(i)==numbersAnswer[i].value) {res.plus+=1;}
        for (j=0; j<numbersAnswer.length; j++) {
            if (myNumber.getNumberForPosition(j)==numbersAnswer[i].value) {res.minus+=1;}
        }
    }
    myNumber.setAnswer(res);



}
function generateTd(){
    var sel = document.createElement("select");
    sel.setAttribute("class",'number');
    var op1 = document.createElement("option");
    op1.innerHTML="1";
    var op2 = document.createElement("option");
    op2.innerHTML="2";
    var op3 = document.createElement("option");
    op3.innerHTML="3";
    var op4 = document.createElement("option");
    op4.innerHTML="4";
    var op5 = document.createElement("option");
    op5.innerHTML="5";
    var op6 = document.createElement("option");
    op6.innerHTML="6";
    var op7 = document.createElement("option");
    op7.innerHTML="7";
    var op8 = document.createElement("option");
    op8.innerHTML="8";
    var op9 = document.createElement("option");
    op9.innerHTML="9";
    var op0 = document.createElement("option");
    op0.innerHTML="0";
    sel.appendChild(op1);
    sel.appendChild(op2);
    sel.appendChild(op3);
    sel.appendChild(op4);
    sel.appendChild(op5);
    sel.appendChild(op6);
    sel.appendChild(op7);
    sel.appendChild(op8);
    sel.appendChild(op9);
    sel.appendChild(op0);
    return sel;
}
function addRow() {
    var cnt = rowsDisable()
    rowCurrent = document.createElement("TR");
    var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");
    var td4 = document.createElement("TD");
    td1.appendChild(generateTd())
    td2.appendChild(generateTd())
    td3.appendChild(generateTd())
    td4.appendChild(generateTd())

    rowCurrent.appendChild(td1);
    rowCurrent.appendChild(td2);
    rowCurrent.appendChild(td3);
    rowCurrent.appendChild(td4);

    var td5 = document.createElement("TD");
    var ok = document.createElement("button");
    ok.setAttribute("class", "btn");
    ok.innerHTML = "Ok"
    td5.appendChild(ok);
    rowCurrent.appendChild(td5);

    var td6 = document.createElement("TD");
    rowCurrent.appendChild(td6);

    ok.onclick = function () {
        sendOK(td6, cnt);
    }

    tbl.appendChild(rowCurrent);
}
function getAnswer(){
    res={answer:"",plus:0,minus:0};
    var numbersAnswer = rowCurrent.getElementsByClassName("number");
   // console.log(numbersAnswer);
    for (i=0; i<numbersAnswer.length; i++) {
        res.answer+=numbersAnswer[i].value;
        if (myNumber.getNumberForPosition(i)==numbersAnswer[i].value) {res.plus+=1;}
        for (j=0; j<numbersAnswer.length; j++) {
            if (myNumber.getNumberForPosition(j)==numbersAnswer[i].value) {res.minus+=1;}
        }
   }
    myNumber.setAnswer(res);
//    console.log(res);
    if (res.plus==numbersAnswer.length && res.plus==res.minus) {final();}

    return res.plus+"/"+res.minus;
}

function final(){
    var num1=document.getElementById("number1");
    var num2=document.getElementById("number2");
    var num3=document.getElementById("number3");
    var num4=document.getElementById("number4");
    num1.innerText=myNumber.getNumberForPosition("0");
    num2.innerText=myNumber.getNumberForPosition("1");
    num3.innerText=myNumber.getNumberForPosition("2");
    num4.innerText=myNumber.getNumberForPosition("3");
    addBtn.setAttribute("disabled","true");
}