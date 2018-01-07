var masaWuDesign = document.querySelector('.cls-12');
var svgText = document.querySelector(".svg-text");
var mylogo = document.querySelector(".mylogo");
var introtext = document.querySelector(".intro-text");
var square = document.querySelector(".square");
var menu = document.querySelector(".menu");
var s1 = document.querySelector(".s1");
var dots = document.querySelectorAll(".s");
var s4 = document.querySelector(".s4");
var menuBox = document.querySelector(".menu-box");

menu.addEventListener('mouseenter', changeColor);
menu.addEventListener('mouseleave', colorStop);
let activateScale = 0;


function changeColor() {
        if (activateScale == 0) {
            dots[0].classList.add("s4");
            dots[1].classList.add("s4");
            dots[2].classList.add("s4");
            dots[3].classList.add("s4");
            dots[4].classList.add("s4");
            dots[5].classList.add("s4");
            dots[6].classList.add("s4");
            dots[7].classList.add("s4");
            dots[8].classList.add("s4");
        }
    }

function colorStop() {
            dots[0].classList.remove("s4");
            dots[1].classList.remove("s4");
            dots[2].classList.remove("s4");
            dots[3].classList.remove("s4");
            dots[4].classList.remove("s4");
            dots[5].classList.remove("s4");
            dots[6].classList.remove("s4");
            dots[7].classList.remove("s4");
            dots[8].classList.remove("s4");
    }

menu.addEventListener('click', openMenu);

function openMenu() {
    menuBox.classList.toggle("hide");
}

let slide = document.querySelector(".slide");
let fade = document.querySelector("#fade-in");

slide.addEventListener("click", function(){
  fade.classList.toggle("show")
});

//intro text writes itself //

masaWuDesign.addEventListener("animationend", shrink)

        function shrink() {
            svgText.classList.add("smallUp");
            setTimeout(function(){
            svgText.classList.add("hide");
            mylogo.classList.remove("hide");
            introtext.classList.remove("hide");
            square.classList.remove("hide");
            }, 500);
        }

//intro page slide show//

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function currentDiv(n) {
showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("pro");
  var arr = document.getElementsByClassName("arr");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
x[slideIndex-1].style.display = "block";
}

//automatic slide show projects//
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("pro");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2500);
}

function myFunction() {
    alert("In order to visit the webpage please enter the following Username: keammd and Password: code_2017");
}

//Contact me letter animation//
let c4 = document.getElementById("c4");
let o4 = document.getElementById("o4");
let n4 = document.getElementById("n4");
let t4 = document.getElementById("t4");
let a4 = document.getElementById("a4");
let c44 = document.getElementById("c44");
let t44 = document.getElementById("t4");
let space4 = document.getElementById("space4");
let m4 = document.getElementById("m4");
let e4 = document.getElementById("e4");

let wraplet2 = document.querySelector(".wrapper-letters2");

wraplet2.addEventListener('mouseenter', aniLetter2);

function aniLetter2() {
    console.log("works");
        setTimeout(function(){
            c4.classList.add("animate-letter");
        }, 100);
        setTimeout(function(){
            o4.classList.add("animate-letter");
        }, 200);
        setTimeout(function(){
            n4.classList.add("animate-letter");
        }, 300);
        setTimeout(function(){
            t4.classList.add("animate-letter");
        }, 400);
        setTimeout(function(){
            a4.classList.add("animate-letter");
        }, 500);
        setTimeout(function(){
            c44.classList.add("animate-letter");
        }, 600);
        setTimeout(function(){
            t44.classList.add("animate-letter");
        }, 700);
        setTimeout(function(){
            space4.classList.add("animate-letter");
        }, 800);
        setTimeout(function(){
            m4.classList.add("animate-letter");
        }, 900);
        setTimeout(function(){
            e4.classList.add("animate-letter");
        }, 1000);


       setTimeout(function(){
            setTimeout(function(){
            c4.classList.remove("animate-letter");
        }, 100);
        setTimeout(function(){
            o4.classList.remove("animate-letter");
        }, 200);
        setTimeout(function(){
            n4.classList.remove("animate-letter");
        }, 300);
        setTimeout(function(){
            t4.classList.remove("animate-letter");
        }, 400);
        setTimeout(function(){
            a4.classList.remove("animate-letter");
        }, 500);
        setTimeout(function(){
            c44.classList.remove("animate-letter");
        }, 600);
        setTimeout(function(){
            t44.classList.remove("animate-letter");
        }, 700);
        setTimeout(function(){
            space4.classList.remove("animate-letter");
        }, 800);
        setTimeout(function(){
            m4.classList.remove("animate-letter");
        }, 900);
        setTimeout(function(){
            e4.classList.remove("animate-letter");
        }, 1000);
        }, 900);
    }

// when hover image change the color of the text//

let imgHover1 = document.getElementById("imgHover1");
let linkedIn = document.getElementById("linkedIn");
let activateScale1 = 0;

imgHover1.addEventListener("mouseenter", addGreen);
imgHover1.addEventListener("mouseleave", removeGreen);

function addGreen(){
    if (activateScale1 == 0) {
    linkedIn.classList.add("green-me");}
};
function removeGreen(){
    linkedIn.classList.remove("green-me");
};

let imgHover2 = document.getElementById("imgHover2");
let CV = document.getElementById("CV");
let activateScale2 = 0;

imgHover2.addEventListener("mouseenter", addGreen2);
imgHover2.addEventListener("mouseleave", removeGreen2);

function addGreen2(){
    if (activateScale2 == 0) {
    CV.classList.add("green-me");}
};
function removeGreen2(){
    CV.classList.remove("green-me");
};

let imgHover3 = document.getElementById("imgHover3");
let takeBreak = document.getElementById("takeBreak");
let activateScale3 = 0;

imgHover3.addEventListener("mouseenter", addGreen3);
imgHover3.addEventListener("mouseleave", removeGreen3);

function addGreen3(){
    if (activateScale3 == 0) {
    takeBreak.classList.add("green-me");}
};
function removeGreen3(){
    takeBreak.classList.remove("green-me");
};

//typewriting effect//
var about = document.getElementById("about");
about.addEventListener("transitionend",typeWriter);

var i = 0;
var txt = '“Good design is obvious. Great design is transparent.” Joe Sparano';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var video = document.getElementById("video");
video.addEventListener("transitionend",typeWriter2);
var txt2 = '“Socrates said, “Know thyself.” I say, “Know thy users.” Joshua Brewer';

function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
}
