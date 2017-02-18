var tbl=document.getElementById("tbl");
var rowCurrent;
var xhr = new XMLHttpRequest();
var ID = 0;

var addBtn= document.getElementById("addBtn");
addBtn.setAttribute("disabled","true");
addBtn.onclick=function () {
    // imagesDisable();
    addRow();
};
var images=[];
var imagesCurrent=[];

for (var i=0 ; i<10;i++){
    images[i]="images/n"+i+".png";
}
// function getNumberByImage(img){
//     return null;
// }

var statusEditing=true;

function newDivImage(){
    var divNewImage = document.createElement("div");
    divNewImage.classList.add("divNewImage");

    for (i in images){
        var imgSpan = document.createElement("span");
        imgSpan.setAttribute("class",'numberInGroup');
        var imgNew = document.createElement("img");
        imgNew.setAttribute("src",images[i]);
        imgNew.onclick=function(){
 //           console.log("imgNew");

            var imgs = document.getElementsByClassName("numberCurrent");
            for (i in imgs){
                var im=imgs[i];
                if (im.hidden) {

                    imagesCurrent[i]=this.src;
                    controlCurrentRow();

                    im.src=this.src; //images[i]
                    im.removeAttribute("hidden");
                    statusEditing=false;
                }
            }

            divNewImage.setAttribute("hidden","true");
            // this.fadeToggle;
        };

        imgSpan.appendChild(imgNew);
        divNewImage.appendChild(imgSpan);
    }

    return divNewImage;
}

function getNewImage(obj){
    var imgCurrent=obj.getElementsByClassName("numberImg")[0];
    imgCurrent.setAttribute("hidden","true");

    // console.log(imgCurrent.getAttribute("class"));
    imgCurrent.setAttribute("class",imgCurrent.getAttribute("class").replace("numberEmpty",""));

    obj.appendChild(newDivImage());
}

var startBtn = document.getElementById("newGame");
startBtn.onclick=function() {
    xhr.open('GET', 'https://four-number.herokuapp.com/', true);
    // xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    // xhr.setRequestHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
    // xhr.setRequestHeader("Access-Control-Allow-Headers","X-Requested-With, content-type");
    // xhr.setRequestHeader("Access-Control-Allow-Credentials", true);
    result={};
    xhr.send(null);

    xhr.onreadystatechange = function() {
        // 0 - Unitialized
        // 1 - Loading
        // 2 - Loaded
        // 3 - Interactive
        // 4 - Complete
        if (xhr.readyState != 4) return;
        if(xhr.status == 200) {
            result=JSON.parse(xhr.responseText);
            ID=result.id;
 //           console.log(ID);
        }
        else {
            alert( xhr.status + ': ' + xhr.statusText );
        }
    };

    addBtn.removeAttribute("disabled");

    var arTr=tbl.getElementsByTagName("TR");
    for (var i=1; i<arTr.length; i++){
        arTr[i].innerHTML="";
    }
};

function sendOK (ans){
    getAnswer(ans);
    rowsDisable();
}
// function imagesDisable() {
// }
function rowsDisable() {
    var numberDisable = document.getElementsByClassName("numberChoose");
    // console.log(numberDisable.length );

     for (i=numberDisable.length-1; i>=0; i--) {
    // for (i in numberDisable) {
        var numberChoose = numberDisable[i];
        numberChoose.onclick="";
        numberChoose.classList.remove("numberChoose");
        numberChoose.classList.add("numberChooseDisabled");

        numberChoose.childNodes[0].classList.remove("numberCurrent");
        // numberChoose.childNodes[0].classList.remove("numberImg");
        // numberChoose.childNodes[0].classList.add("numberImgDisabled");

        // console.log(numberChoose.firstElementChild);
        // console.log(numberChoose.childNodes[0]);
        // numberChoose.firstElementChild.classList.remove("numberCurrent");
        // numberChoose.firstElementChild.classList.add("numberImgDisabled");
        // setAttribute("class", numberDisable[i].getAttribute("class").replace("numberCurrent","numberImgDisabled"));
    }

    var numberBtn = document.getElementsByClassName("btnOk");
    for (i=0; i<numberBtn.length; i++) {
        numberBtn[i].setAttribute("disabled","true");
    }
    addBtn.removeAttribute("disabled");
    return numberBtn.length;
}

function generateTd(){
    var div1 = document.createElement("div");
    div1.myNumber=null;
    div1.onclick = function(){
        statusEditing=!statusEditing;

        if (statusEditing) {
            return;
        }
        getNewImage(div1);
        statusEditing=true;
    };

    div1.setAttribute("class",'numberChoose');
    var img1=document.createElement("img");
    img1.setAttribute("src","images/n.png");
    img1.setAttribute("class",'numberImg numberCurrent numberEmpty');
    div1.appendChild(img1);

    return div1;
}
function controlCurrentRow() {
    var res = false;
    var btnOk=rowCurrent.getElementsByClassName("btnOk");

    // var values=rowCurrent.getElementsByClassName("numberEmpty");
    // if (values.length==0)  btnOk[0].removeAttribute("disabled");
    function noDublicate() {
        for (var i=0;i<imagesCurrent.length;i++){
            for (var j=i+1;j<imagesCurrent.length;j++){
                if (imagesCurrent[i]==imagesCurrent[j])
                    return false;
            }
        }
        return imagesCurrent.length%4==0;
    }

    if (noDublicate())
        btnOk[0].removeAttribute("disabled");
}
function addRow() {
    // imagesCurrent.splice(0,imagesCurrent.length-1);
    //rowsDisable();

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
    ok.setAttribute("class", "btnOk btn btn-success");
    ok.setAttribute("disabled", "true");
    ok.innerHTML = "Ok"
    td5.appendChild(ok);
    rowCurrent.appendChild(td5);

    var td6 = document.createElement("TD");
    rowCurrent.appendChild(td6);

    ok.onclick = function () {
        sendOK(td6); //, cnt
    }

    tbl.appendChild(rowCurrent);
    //controlCurrentRow(rowCurrent);
    addBtn.setAttribute("disabled","true");

}
function getAnswer(ans){
    var res={answer:"",plus:0,minus:0};
    var query={};
    query.id=ID;
    query.numbers=[];
    // query.numbers=imagesCurrent;

//     for (i=0; i<imagesCurrent.length; i++) {
//         // var ar=imagesCurrent[i].split("/");
//         var ar=imagesCurrent.shift().split("/");
//         query.numbers[i]=ar[ar.length-1].split(".")[0].slice(-1);
// //        console.log(query.numbers[i]);
//     }

    for (i in imagesCurrent) {
        var ar=imagesCurrent[i].split("/");
        query.numbers[i]=ar[ar.length-1].split(".")[0].slice(-1);
    }


    // var numbersAnswer = rowCurrent.getElementsByClassName("numberImg");
    // for (i=0; i<numbersAnswer.length; i++) {
    //     query.numbers[i]=numbersAnswer[i].value;
    // }
    xhr.open('POST', 'https://four-number.herokuapp.com/', true);
    //var result={};
    xhr.send(JSON.stringify(query));

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
            if(xhr.status == 200) {
                res=JSON.parse(xhr.responseText);
                // console.log(res);
                if (res.plus==imagesCurrent.length && res.plus==res.minus) {
                    var num1=document.getElementById("number1");
                    var num2=document.getElementById("number2");
                    var num3=document.getElementById("number3");
                    var num4=document.getElementById("number4");
                    num1.innerText=query.numbers[0];
                    num2.innerText=query.numbers[1];
                    num3.innerText=query.numbers[2];
                    num4.innerText=query.numbers[3];
                    addBtn.setAttribute("disabled","true");

                }

                ans.innerHTML=res.plus+"/"+res.minus;
            }
            else {
                alert( xhr.status + ': ' + xhr.statusText );
            }
    };
}

