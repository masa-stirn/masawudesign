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

//automatic slide show projects front page//

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

//Contact me text animation//
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
var speed = 40;

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
var i2 = 0;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed);
  }
}

var viewfinders = document.getElementById("viewfinders");
viewfinders.addEventListener("transitionend",typeWriter3);
var txt3 = '"There are three responses to a piece of design. Yes, no and Wow! Wow is the one to aim for."  Milton Glaser';
var i3 = 0;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("demo3").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed);
  }
}

var frank = document.getElementById("frank");
frank.addEventListener("transitionend",typeWriter4);
var txt4 = '“Simplicity is not the goal. It is the by-product of a good idea and modest expectations.” Paul Rand';
var i4 = 0;

function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("demo4").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed);
  }
}

var drum = document.getElementById("drum");
drum.addEventListener("transitionend",typeWriter5);
var txt5 = '“What works good is better that what looks good, because what works good lasts.”  Ray Eames';
var i5 = 0;

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("demo5").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed);
  }
}

var menu2 = document.getElementById("menu");
menu2.addEventListener("transitionend",typeWriter6);
var txt6 = '“Technology may change rapidly, but people change slowly. The principals [of design] come from understanding of people. ”  D. Norman';
var i6 = 0;

function typeWriter6() {
  if (i6 < txt6.length) {
    document.getElementById("demo6").innerHTML += txt6.charAt(i6);
    i6++;
    setTimeout(typeWriter6, speed);
  }
}

var misschili = document.getElementById("misschili");
misschili.addEventListener("transitionend",typeWriter7);
var txt7 = '“User-centered design means working with your users all throughout the project.”  D. Norman';
var i7 = 0;

function typeWriter7() {
  if (i7 < txt7.length) {
    document.getElementById("demo7").innerHTML += txt7.charAt(i7);
    i7++;
    setTimeout(typeWriter7, speed);
  }
}

var redesign = document.getElementById("redesign");
redesign.addEventListener("transitionend",typeWriter8);
var txt8 = '“I strive for two things in design: simplicity and clarity. Great design is born of those two things.” L. Leader';
var i8 = 0;

function typeWriter8() {
  if (i8 < txt8.length) {
    document.getElementById("demo8").innerHTML += txt8.charAt(i8);
    i8++;
    setTimeout(typeWriter8, speed);
  }
}

var swiss = document.getElementById("swiss");
swiss.addEventListener("transitionend",typeWriter9);
var txt9 = '“Good design is the act of communication between designer and the user”  D. Norman';
var i9 = 0;

function typeWriter9() {
  if (i9 < txt9.length) {
    document.getElementById("demo9").innerHTML += txt9.charAt(i9);
    i9++;
    setTimeout(typeWriter9, speed);
  }
}

var home = document.getElementById("home");
home.addEventListener("transitionend",typeWriter10);
var txt10 = '“Design is a bridge between technology and people.”  D. Norman';
var i10 = 0;

function typeWriter10() {
  if (i10 < txt10.length) {
    document.getElementById("demo10").innerHTML += txt10.charAt(i10);
    i10++;
    setTimeout(typeWriter10, speed);
  }
}

// floating shapes animation inside square 3 and 4//
let fa3 = document.querySelectorAll(".fa3");
let fa2 = document.querySelectorAll(".fa2");
let fa4 = document.querySelectorAll(".fa4");
let fa5 = document.querySelectorAll(".fa5");
let square3 = document.querySelector(".square3");
let square4 = document.querySelector(".square4");
let activateScale4 = 0;
let activateScale5 = 0;
let activateScale6 = 0;
let activateScale7 = 0;
let activateScale8 = 0;
let activateScale9 = 0;

//window.onload = float();
swiss.addEventListener("transitionend",float);

function float() {
    fa3[0].classList.add("anime-me2");
    fa3[1].classList.add("anime-me3");
    fa3[2].classList.add("anime-me4");
    fa3[3].classList.add("anime-me");
    fa3[4].classList.add("anime-me2");
    fa3[5].classList.add("anime-me3");
    fa3[6].classList.add("anime-me5");
    fa3[7].classList.add("anime-me");
    fa3[8].classList.add("anime-me4");
    fa3[9].classList.add("anime-me3");
    fa3[10].classList.add("anime-me5");
    fa3[11].classList.add("anime-me");
    fa3[12].classList.add("anime-me2");
    fa3[13].classList.add("anime-me5");
    fa2[0].classList.add("anime-me2");
    fa2[1].classList.add("anime-me3");
    fa2[2].classList.add("anime-me4");
    fa2[3].classList.add("anime-me");
    fa2[4].classList.add("anime-me2");
    fa2[5].classList.add("anime-me3");
    fa2[6].classList.add("anime-me5");
    fa2[7].classList.add("anime-me");
    fa2[8].classList.add("anime-me4");
    fa2[9].classList.add("anime-me3");
    fa2[10].classList.add("anime-me5");
    fa2[11].classList.add("anime-me");
    fa2[12].classList.add("anime-me2");
    fa2[13].classList.add("anime-me5");

square3.addEventListener('mouseenter', playAni);
square3.addEventListener('mouseleave', StopAni);
square4.addEventListener('mouseenter', playAni2);
square4.addEventListener('mouseleave', StopAni2);


function playAni() {
        if (activateScale4 == 0) {
    fa3[0].classList.remove("op0");
    fa3[1].classList.remove("op0");
    fa3[2].classList.remove("op0");
    fa3[3].classList.remove("op0");
    fa3[4].classList.remove("op0");
    fa3[5].classList.remove("op0");
    fa3[6].classList.remove("op0");
    fa3[7].classList.remove("op0");
    fa3[8].classList.remove("op0");
    fa3[9].classList.remove("op0");
    fa3[10].classList.remove("op0");
    fa3[11].classList.remove("op0");
    fa3[12].classList.remove("op0");
    fa3[13].classList.remove("op0"); }
        }
function StopAni() {
    fa3[0].classList.add("op0");
    fa3[1].classList.add("op0");
    fa3[2].classList.add("op0");
    fa3[3].classList.add("op0");
    fa3[4].classList.add("op0");
    fa3[5].classList.add("op0");
    fa3[6].classList.add("op0");
    fa3[7].classList.add("op0");
    fa3[8].classList.add("op0");
    fa3[9].classList.add("op0");
    fa3[10].classList.add("op0");
    fa3[11].classList.add("op0");
    fa3[12].classList.add("op0");
    fa3[13].classList.add("op0"); }

function playAni2() {
        if (activateScale5 == 0) {
    fa2[0].classList.remove("op0");
    fa2[1].classList.remove("op0");
    fa2[2].classList.remove("op0");
    fa2[3].classList.remove("op0");
    fa2[4].classList.remove("op0");
    fa2[5].classList.remove("op0");
    fa2[6].classList.remove("op0");
    fa2[7].classList.remove("op0");
    fa2[8].classList.remove("op0");
    fa2[9].classList.remove("op0");
    fa2[10].classList.remove("op0");
    fa2[11].classList.remove("op0");
    fa2[12].classList.remove("op0");
    fa2[13].classList.remove("op0"); }
        }
function StopAni2() {
    fa2[0].classList.add("op0");
    fa2[1].classList.add("op0");
    fa2[2].classList.add("op0");
    fa2[3].classList.add("op0");
    fa2[4].classList.add("op0");
    fa2[5].classList.add("op0");
    fa2[6].classList.add("op0");
    fa2[7].classList.add("op0");
    fa2[8].classList.add("op0");
    fa2[9].classList.add("op0");
    fa2[10].classList.add("op0");
    fa2[11].classList.add("op0");
    fa2[12].classList.add("op0");
    fa2[13].classList.add("op0"); }
};

redesign.addEventListener("transitionend",float2);
function float2() {
    fa5[0].classList.add("anime-me2");
    fa5[1].classList.add("anime-me3");
    fa5[2].classList.add("anime-me4");
    fa5[3].classList.add("anime-me");
    fa5[4].classList.add("anime-me2");
    fa5[5].classList.add("anime-me3");
    fa5[6].classList.add("anime-me5");
    fa5[7].classList.add("anime-me");
    fa5[8].classList.add("anime-me4");
    fa5[9].classList.add("anime-me3");
    fa5[10].classList.add("anime-me5");
    fa5[11].classList.add("anime-me");
    fa5[12].classList.add("anime-me2");
    fa5[13].classList.add("anime-me5");
    fa4[0].classList.add("anime-me2");
    fa4[1].classList.add("anime-me3");
    fa4[2].classList.add("anime-me4");
    fa4[3].classList.add("anime-me");
    fa4[4].classList.add("anime-me2");
    fa4[5].classList.add("anime-me3");
    fa4[6].classList.add("anime-me5");
    fa4[7].classList.add("anime-me");
    fa4[8].classList.add("anime-me4");
    fa4[9].classList.add("anime-me3");
    fa4[10].classList.add("anime-me5");
    fa4[11].classList.add("anime-me");
    fa4[12].classList.add("anime-me2");
    fa4[13].classList.add("anime-me5");

let test1 = document.querySelector(".test1");
let test2 = document.querySelector(".test2");
test1.addEventListener('mouseenter', playAniredesign);
test1.addEventListener('mouseleave', StopAniredesign);
test2.addEventListener('mouseenter', playAni2redesign);
test2.addEventListener('mouseleave', StopAni2redesign);

function playAniredesign() {
        if (activateScale8 == 0) {
            console.log("I work");
    fa4[0].classList.remove("op0");
    fa4[1].classList.remove("op0");
    fa4[2].classList.remove("op0");
    fa4[3].classList.remove("op0");
    fa4[4].classList.remove("op0");
    fa4[5].classList.remove("op0");
    fa4[6].classList.remove("op0");
    fa4[7].classList.remove("op0");
    fa4[8].classList.remove("op0");
    fa4[9].classList.remove("op0");
    fa4[10].classList.remove("op0");
    fa4[11].classList.remove("op0");
    fa4[12].classList.remove("op0");
    fa4[13].classList.remove("op0"); }
        }
function StopAniredesign() {
    fa4[0].classList.add("op0");
    fa4[1].classList.add("op0");
    fa4[2].classList.add("op0");
    fa4[3].classList.add("op0");
    fa4[4].classList.add("op0");
    fa4[5].classList.add("op0");
    fa4[6].classList.add("op0");
    fa4[7].classList.add("op0");
    fa4[8].classList.add("op0");
    fa4[9].classList.add("op0");
    fa4[10].classList.add("op0");
    fa4[11].classList.add("op0");
    fa4[12].classList.add("op0");
    fa4[13].classList.add("op0"); }
function playAni2redesign() {
        if (activateScale9 == 0) {
    fa5[0].classList.remove("op0");
    fa5[1].classList.remove("op0");
    fa5[2].classList.remove("op0");
    fa5[3].classList.remove("op0");
    fa5[4].classList.remove("op0");
    fa5[5].classList.remove("op0");
    fa5[6].classList.remove("op0");
    fa5[7].classList.remove("op0");
    fa5[8].classList.remove("op0");
    fa5[9].classList.remove("op0");
    fa5[10].classList.remove("op0");
    fa5[11].classList.remove("op0");
    fa5[12].classList.remove("op0");
    fa5[13].classList.remove("op0"); }
        }
function StopAni2redesign() {
    fa5[0].classList.add("op0");
    fa5[1].classList.add("op0");
    fa5[2].classList.add("op0");
    fa5[3].classList.add("op0");
    fa5[4].classList.add("op0");
    fa5[5].classList.add("op0");
    fa5[6].classList.add("op0");
    fa5[7].classList.add("op0");
    fa5[8].classList.add("op0");
    fa5[9].classList.add("op0");
    fa5[10].classList.add("op0");
    fa5[11].classList.add("op0");
    fa5[12].classList.add("op0");
    fa5[13].classList.add("op0"); }
};

let freeze = document.querySelectorAll(".freeze");
let freeze2 = document.querySelectorAll(".freeze2");

freeze[0].addEventListener('mouseenter', opacity0);
freeze[0].addEventListener('mouseleave', opacity1);
freeze[1].addEventListener('mouseenter', opacity0two);
freeze[1].addEventListener('mouseleave', opacity1two);

function opacity0() {
    if (activateScale6 == 0) {
    fa3[0].classList.add("op0");
    fa3[1].classList.add("op0");
    fa3[2].classList.add("op0");
    fa3[3].classList.add("op0");
    fa3[4].classList.add("op0");
    fa3[5].classList.add("op0");
    fa3[6].classList.add("op0");
    fa3[7].classList.add("op0");
    fa3[8].classList.add("op0");
    fa3[9].classList.add("op0");
    fa3[10].classList.add("op0");
    fa3[11].classList.add("op0");
    fa3[12].classList.add("op0");
    fa3[13].classList.add("op0");}}

function opacity0two() {
    if (activateScale7 == 0) {
    fa2[0].classList.add("op0");
    fa2[1].classList.add("op0");
    fa2[2].classList.add("op0");
    fa2[3].classList.add("op0");
    fa2[4].classList.add("op0");
    fa2[5].classList.add("op0");
    fa2[6].classList.add("op0");
    fa2[7].classList.add("op0");
    fa2[8].classList.add("op0");
    fa2[9].classList.add("op0");
    fa2[10].classList.add("op0");
    fa2[11].classList.add("op0");
    fa2[12].classList.add("op0");
    fa2[13].classList.add("op0"); }
        }

function opacity1() {
    console.log("working")
    fa3[0].classList.remove("op0");
    fa3[1].classList.remove("op0");
    fa3[2].classList.remove("op0");
    fa3[3].classList.remove("op0");
    fa3[4].classList.remove("op0");
    fa3[5].classList.remove("op0");
    fa3[6].classList.remove("op0");
    fa3[7].classList.remove("op0");
    fa3[8].classList.remove("op0");
    fa3[9].classList.remove("op0");
    fa3[10].classList.remove("op0");
    fa3[11].classList.remove("op0");
    fa3[12].classList.remove("op0");
    fa3[13].classList.remove("op0");}

function opacity1two() {
    fa2[0].classList.remove("op0");
    fa2[1].classList.remove("op0");
    fa2[2].classList.remove("op0");
    fa2[3].classList.remove("op0");
    fa2[4].classList.remove("op0");
    fa2[5].classList.remove("op0");
    fa2[6].classList.remove("op0");
    fa2[7].classList.remove("op0");
    fa2[8].classList.remove("op0");
    fa2[9].classList.remove("op0");
    fa2[10].classList.remove("op0");
    fa2[11].classList.remove("op0");
    fa2[12].classList.remove("op0");
    fa2[13].classList.remove("op0"); }

