
// Variables //
var titleImg = document.getElementById("ing")
let twiter= document.getElementById("twiter")
let facebook = document.getElementById("facebook")
let instagram = document.getElementById("instagram")
let email = document.getElementById("email")
var pBody1 = document.querySelectorAll("p")[0]
var pBody2 = document.querySelectorAll("p")[1]
var pBody3 = document.querySelectorAll("p")[2]
var pBody4 = document.querySelectorAll("p")[3]
var cardBody1 = document.querySelectorAll("p")[4]
var cardBody2 = document.querySelectorAll("p")[5]
var cardBody3 = document.querySelectorAll("p")[6]
var cardBody4 = document.querySelectorAll("p")[7]
var cardBody5 = document.querySelectorAll("p")[8]
var cardBody6 = document.querySelectorAll("p")[9]
var cardBody7 = document.querySelectorAll("p")[10]
var cardBody8 = document.querySelectorAll("p")[11]
var cardBody9 = document.querySelectorAll("p")[12]
var cardBody10 = document.querySelectorAll("p")[13]

//<p> paragraph Js
pBody1.addEventListener("mouseover", pBodyAdd1)
pBody1.addEventListener("mouseout", pBodyRmv1)
pBody2.addEventListener("mouseover", pBodyAdd2)
pBody2.addEventListener("mouseout", pBodyRmv2)
pBody3.addEventListener("mouseover", pBodyAdd3)
pBody3.addEventListener("mouseout", pBodyRmv3)
pBody4.addEventListener("mouseover", pBodyAdd4)
pBody4.addEventListener("mouseout", pBodyRmv4)

function pBodyAdd1(){
    pBody1.classList.add("ptext")
}
function pBodyRmv1(){
    pBody1.classList.remove("ptext")
}
function pBodyAdd2(){
    pBody2.classList.add("ptext")
}
function pBodyRmv2(){
    pBody2.classList.remove("ptext")
}
function pBodyAdd3(){
    pBody3.classList.add("ptext")
}
function pBodyRmv3(){
    pBody3.classList.remove("ptext")
}
function pBodyAdd4(){
    pBody4.classList.add("ptext1")
}
function pBodyRmv4(){
    pBody4.classList.remove("ptext1")
}

// Start image//
titleImg.addEventListener("mouseover", rotateJs)
titleImg.addEventListener("mouseout", unRotateJs)

function rotateJs(){
    titleImg.classList.add("title-imageJs")
}
function unRotateJs(){
    titleImg.classList.remove("title-imageJs")

}
// twiter button//
function hoverJs(){
    twiter.classList.add("backjs")
}
function hoverOut(){
    twiter.classList.remove("backjs")
}
function twiterjs(){
    window.open("https://twitter.com/?lang=el")
}

//Facebook Button//
function hoverJs1(){
    facebook.classList.add("backjs")
}
function hoverOut1(){
    facebook.classList.remove("backjs")
}
function facebookjs(){
    window.open("https://el-gr.facebook.com/")
}
//instagram//
function hoverJs2(){
    instagram.classList.add("backjs")
}
function hoverOut2(){
    instagram.classList.remove("backjs")
}
function instagramJs(){
    window.open("https://www.instagram.com//")
}

//email//
function hoverJs3(){
    email.classList.add("backjs")
}
function hoverOut3(){
    email.classList.remove("backjs")
}
function emailjs(){
    window.open("https://gr.search.yahoo.com/?fr2=p:fprd,mkt:gr")
}

// card body Js//
cardBody1.addEventListener("mouseover", changeClrSze1)
cardBody1.addEventListener("mouseout", remvchangeClrSze1)
cardBody2.addEventListener("mouseover", changeClrSze2)
cardBody2.addEventListener("mouseout", remvchangeClrSze2)
cardBody3.addEventListener("mouseover", changeClrSze3)
cardBody3.addEventListener("mouseout", remvchangeClrSze3)
cardBody4.addEventListener("mouseover", changeClrSze4)
cardBody4.addEventListener("mouseout", remvchangeClrSze4)
cardBody5.addEventListener("mouseover", changeClrSze5)
cardBody5.addEventListener("mouseout", remvchangeClrSze5)
cardBody6.addEventListener("mouseover", changeClrSze6)
cardBody6.addEventListener("mouseout", remvchangeClrSze6)
cardBody7.addEventListener("mouseover", changeClrSze7)
cardBody7.addEventListener("mouseout", remvchangeClrSze7)
cardBody8.addEventListener("mouseover", changeClrSze8)
cardBody8.addEventListener("mouseout", remvchangeClrSze8)
cardBody9.addEventListener("mouseover", changeClrSze9)
cardBody9.addEventListener("mouseout", remvchangeClrSze9)
cardBody10.addEventListener("mouseover", changeClrSze10)
cardBody10.addEventListener("mouseout", remvchangeClrSze10)

function changeClrSze1(){
    cardBody1.classList.add("changeJs")
    }
function remvchangeClrSze1(){
    cardBody1.classList.remove("changeJs")
}
function changeClrSze2(){
    cardBody2.classList.add("changeJs")
}
function remvchangeClrSze2(){
    cardBody2.classList.remove("changeJs")
}
function changeClrSze3(){
    cardBody3.classList.add("changeJs")
}
function remvchangeClrSze3(){
    cardBody3.classList.remove("changeJs")
}
function changeClrSze4(){
    cardBody4.classList.add("changeJs")
}
function remvchangeClrSze4(){
    cardBody4.classList.remove("changeJs")
}
function changeClrSze5(){
    cardBody5.classList.add("changeJs")
}
function remvchangeClrSze5(){
    cardBody5.classList.remove("changeJs")
}
function changeClrSze6(){
    cardBody6.classList.add("changeJs")
}
function remvchangeClrSze6(){
    cardBody6.classList.remove("changeJs")
}
function changeClrSze7(){
    cardBody7.classList.add("changeJs")
}
function remvchangeClrSze7(){
    cardBody7.classList.remove("changeJs")
}
function changeClrSze8(){
    cardBody8.classList.add("changeJs")
}
function remvchangeClrSze8(){
    cardBody8.classList.remove("changeJs")
}
function changeClrSze9(){
    cardBody9.classList.add("changeJs")
}
function remvchangeClrSze9(){
    cardBody9.classList.remove("changeJs")
}
function changeClrSze10(cardBody10){
    this.classList.add("changeJs")
}
function remvchangeClrSze10(cardBody10){
    this.classList.remove("changeJs")
    
}




