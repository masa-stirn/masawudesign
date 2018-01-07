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
let fa6 = document.querySelectorAll(".fa6");
let fa7 = document.querySelectorAll(".fa7");
let fa8 = document.querySelectorAll(".fa8");
let fa9 = document.querySelectorAll(".fa9");
let fa10 = document.querySelectorAll(".fa10");
let fa11 = document.querySelectorAll(".fa11");
let fa12 = document.querySelectorAll(".fa12");
let fa13 = document.querySelectorAll(".fa13");
let fa14 = document.querySelectorAll(".fa14");
let fa15 = document.querySelectorAll(".fa15");
let fa16 = document.querySelectorAll(".fa16");
let fa17 = document.querySelectorAll(".fa17");
let fa18 = document.querySelectorAll(".fa18");
let fa19 = document.querySelectorAll(".fa19");
let square3 = document.querySelector(".square3");
let square4 = document.querySelector(".square4");
let activateScale4 = 0;
let activateScale5 = 0;
let activateScale6 = 0;
let activateScale7 = 0;
let activateScale8 = 0;
let activateScale9 = 0;
let activateScale10 = 0;
let activateScale11 = 0;
let activateScale12 = 0;
let activateScale13 = 0;
let activateScale14 = 0;
let activateScale15 = 0;
let activateScale16 = 0;
let activateScale17 = 0;
let activateScale18 = 0;
let activateScale19 = 0;
let activateScale20 = 0;
let activateScale21 = 0;
let activateScale22 = 0;
let activateScale23 = 0;

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

misschili.addEventListener("transitionend",float3);
function float3() {
    fa6[0].classList.add("anime-me2");
    fa6[1].classList.add("anime-me3");
    fa6[2].classList.add("anime-me4");
    fa6[3].classList.add("anime-me");
    fa6[4].classList.add("anime-me2");
    fa6[5].classList.add("anime-me3");
    fa6[6].classList.add("anime-me5");
    fa6[7].classList.add("anime-me");
    fa6[8].classList.add("anime-me4");
    fa6[9].classList.add("anime-me3");
    fa6[10].classList.add("anime-me5");
    fa6[11].classList.add("anime-me");
    fa6[12].classList.add("anime-me2");
    fa6[13].classList.add("anime-me5");
    fa7[0].classList.add("anime-me2");
    fa7[1].classList.add("anime-me3");
    fa7[2].classList.add("anime-me4");
    fa7[3].classList.add("anime-me");
    fa7[4].classList.add("anime-me2");
    fa7[5].classList.add("anime-me3");
    fa7[6].classList.add("anime-me5");
    fa7[7].classList.add("anime-me");
    fa7[8].classList.add("anime-me4");
    fa7[9].classList.add("anime-me3");
    fa7[10].classList.add("anime-me5");
    fa7[11].classList.add("anime-me");
    fa7[12].classList.add("anime-me2");
    fa7[13].classList.add("anime-me5");

let test3 = document.querySelector(".test3");
let test4 = document.querySelector(".test4");
test3.addEventListener('mouseenter', playAnimisschili);
test3.addEventListener('mouseleave', StopAnimisschili);
test4.addEventListener('mouseenter', playAni2misschili);
test4.addEventListener('mouseleave', StopAni2misschili);

function playAnimisschili() {
        if (activateScale10 == 0) {
            console.log("I work");
    fa6[0].classList.remove("op0");
    fa6[1].classList.remove("op0");
    fa6[2].classList.remove("op0");
    fa6[3].classList.remove("op0");
    fa6[4].classList.remove("op0");
    fa6[5].classList.remove("op0");
    fa6[6].classList.remove("op0");
    fa6[7].classList.remove("op0");
    fa6[8].classList.remove("op0");
    fa6[9].classList.remove("op0");
    fa6[10].classList.remove("op0");
    fa6[11].classList.remove("op0");
    fa6[12].classList.remove("op0");
    fa6[13].classList.remove("op0"); }
        }
function StopAnimisschili() {
    fa6[0].classList.add("op0");
    fa6[1].classList.add("op0");
    fa6[2].classList.add("op0");
    fa6[3].classList.add("op0");
    fa6[4].classList.add("op0");
    fa6[5].classList.add("op0");
    fa6[6].classList.add("op0");
    fa6[7].classList.add("op0");
    fa6[8].classList.add("op0");
    fa6[9].classList.add("op0");
    fa6[10].classList.add("op0");
    fa6[11].classList.add("op0");
    fa6[12].classList.add("op0");
    fa6[13].classList.add("op0"); }
function playAni2misschili() {
        if (activateScale11 == 0) {
    fa7[0].classList.remove("op0");
    fa7[1].classList.remove("op0");
    fa7[2].classList.remove("op0");
    fa7[3].classList.remove("op0");
    fa7[4].classList.remove("op0");
    fa7[5].classList.remove("op0");
    fa7[6].classList.remove("op0");
    fa7[7].classList.remove("op0");
    fa7[8].classList.remove("op0");
    fa7[9].classList.remove("op0");
    fa7[10].classList.remove("op0");
    fa7[11].classList.remove("op0");
    fa7[12].classList.remove("op0");
    fa7[13].classList.remove("op0"); }
        }
function StopAni2misschili() {
    fa7[0].classList.add("op0");
    fa7[1].classList.add("op0");
    fa7[2].classList.add("op0");
    fa7[3].classList.add("op0");
    fa7[4].classList.add("op0");
    fa7[5].classList.add("op0");
    fa7[6].classList.add("op0");
    fa7[7].classList.add("op0");
    fa7[8].classList.add("op0");
    fa7[9].classList.add("op0");
    fa7[10].classList.add("op0");
    fa7[11].classList.add("op0");
    fa7[12].classList.add("op0");
    fa7[13].classList.add("op0"); }
};

menu2.addEventListener("transitionend",float4);
function float4() {
    console.log("menu")
    fa8[0].classList.add("anime-me2");
    fa8[1].classList.add("anime-me3");
    fa8[2].classList.add("anime-me4");
    fa8[3].classList.add("anime-me");
    fa8[4].classList.add("anime-me2");
    fa8[5].classList.add("anime-me3");
    fa8[6].classList.add("anime-me5");
    fa8[7].classList.add("anime-me");
    fa8[8].classList.add("anime-me4");
    fa8[9].classList.add("anime-me3");
    fa8[10].classList.add("anime-me5");
    fa8[11].classList.add("anime-me");
    fa8[12].classList.add("anime-me2");
    fa8[13].classList.add("anime-me5");
    fa9[0].classList.add("anime-me2");
    fa9[1].classList.add("anime-me3");
    fa9[2].classList.add("anime-me4");
    fa9[3].classList.add("anime-me");
    fa9[4].classList.add("anime-me2");
    fa9[5].classList.add("anime-me3");
    fa9[6].classList.add("anime-me5");
    fa9[7].classList.add("anime-me");
    fa9[8].classList.add("anime-me4");
    fa9[9].classList.add("anime-me3");
    fa9[10].classList.add("anime-me5");
    fa9[11].classList.add("anime-me");
    fa9[12].classList.add("anime-me2");
    fa9[13].classList.add("anime-me5");

let test8 = document.querySelector(".test8");
let test9 = document.querySelector(".test9");
test8.addEventListener('mouseenter', playAnimenu);
test8.addEventListener('mouseleave', StopAnimenu);
test9.addEventListener('mouseenter', playAni2menu);
test9.addEventListener('mouseleave', StopAni2menu);

function playAnimenu() {
        if (activateScale12 == 0) {
            console.log("I work menu");
    fa8[0].classList.remove("op0");
    fa8[1].classList.remove("op0");
    fa8[2].classList.remove("op0");
    fa8[3].classList.remove("op0");
    fa8[4].classList.remove("op0");
    fa8[5].classList.remove("op0");
    fa8[6].classList.remove("op0");
    fa8[7].classList.remove("op0");
    fa8[8].classList.remove("op0");
    fa8[9].classList.remove("op0");
    fa8[10].classList.remove("op0");
    fa8[11].classList.remove("op0");
    fa8[12].classList.remove("op0");
    fa8[13].classList.remove("op0"); }
        }
function StopAnimenu() {
    fa8[0].classList.add("op0");
    fa8[1].classList.add("op0");
    fa8[2].classList.add("op0");
    fa8[3].classList.add("op0");
    fa8[4].classList.add("op0");
    fa8[5].classList.add("op0");
    fa8[6].classList.add("op0");
    fa8[7].classList.add("op0");
    fa8[8].classList.add("op0");
    fa8[9].classList.add("op0");
    fa8[10].classList.add("op0");
    fa8[11].classList.add("op0");
    fa8[12].classList.add("op0");
    fa8[13].classList.add("op0"); }
function playAni2menu() {
        if (activateScale13 == 0) {
    fa9[0].classList.remove("op0");
    fa9[1].classList.remove("op0");
    fa9[2].classList.remove("op0");
    fa9[3].classList.remove("op0");
    fa9[4].classList.remove("op0");
    fa9[5].classList.remove("op0");
    fa9[6].classList.remove("op0");
    fa9[7].classList.remove("op0");
    fa9[8].classList.remove("op0");
    fa9[9].classList.remove("op0");
    fa9[10].classList.remove("op0");
    fa9[11].classList.remove("op0");
    fa9[12].classList.remove("op0");
    fa9[13].classList.remove("op0"); }
        }
function StopAni2menu() {
    fa9[0].classList.add("op0");
    fa9[1].classList.add("op0");
    fa9[2].classList.add("op0");
    fa9[3].classList.add("op0");
    fa9[4].classList.add("op0");
    fa9[5].classList.add("op0");
    fa9[6].classList.add("op0");
    fa9[7].classList.add("op0");
    fa9[8].classList.add("op0");
    fa9[9].classList.add("op0");
    fa9[10].classList.add("op0");
    fa9[11].classList.add("op0");
    fa9[12].classList.add("op0");
    fa9[13].classList.add("op0"); }
};

drum.addEventListener("transitionend",float5);
function float5() {
    console.log("drum")
    fa10[0].classList.add("anime-me2");
    fa10[1].classList.add("anime-me3");
    fa10[2].classList.add("anime-me4");
    fa10[3].classList.add("anime-me");
    fa10[4].classList.add("anime-me2");
    fa10[5].classList.add("anime-me3");
    fa10[6].classList.add("anime-me5");
    fa10[7].classList.add("anime-me");
    fa10[8].classList.add("anime-me4");
    fa10[9].classList.add("anime-me3");
    fa10[10].classList.add("anime-me5");
    fa10[11].classList.add("anime-me");
    fa10[12].classList.add("anime-me2");
    fa10[13].classList.add("anime-me5");
    fa11[0].classList.add("anime-me2");
    fa11[1].classList.add("anime-me3");
    fa11[2].classList.add("anime-me4");
    fa11[3].classList.add("anime-me");
    fa11[4].classList.add("anime-me2");
    fa11[5].classList.add("anime-me3");
    fa11[6].classList.add("anime-me5");
    fa11[7].classList.add("anime-me");
    fa11[8].classList.add("anime-me4");
    fa11[9].classList.add("anime-me3");
    fa11[10].classList.add("anime-me5");
    fa11[11].classList.add("anime-me");
    fa11[12].classList.add("anime-me2");
    fa11[13].classList.add("anime-me5");

let test10 = document.querySelector(".test10");
let test11 = document.querySelector(".test11");
test10.addEventListener('mouseenter', playAnidrum);
test10.addEventListener('mouseleave', StopAnidrum);
test11.addEventListener('mouseenter', playAni2drum);
test11.addEventListener('mouseleave', StopAni2drum);

function playAnidrum() {
        if (activateScale14 == 0) {
            console.log("I work menu");
    fa10[0].classList.remove("op0");
    fa10[1].classList.remove("op0");
    fa10[2].classList.remove("op0");
    fa10[3].classList.remove("op0");
    fa10[4].classList.remove("op0");
    fa10[5].classList.remove("op0");
    fa10[6].classList.remove("op0");
    fa10[7].classList.remove("op0");
    fa10[8].classList.remove("op0");
    fa10[9].classList.remove("op0");
    fa10[10].classList.remove("op0");
    fa10[11].classList.remove("op0");
    fa10[12].classList.remove("op0");
    fa10[13].classList.remove("op0"); }
        }
function StopAnidrum() {
    fa10[0].classList.add("op0");
    fa10[1].classList.add("op0");
    fa10[2].classList.add("op0");
    fa10[3].classList.add("op0");
    fa10[4].classList.add("op0");
    fa10[5].classList.add("op0");
    fa10[6].classList.add("op0");
    fa10[7].classList.add("op0");
    fa10[8].classList.add("op0");
    fa10[9].classList.add("op0");
    fa10[10].classList.add("op0");
    fa10[11].classList.add("op0");
    fa10[12].classList.add("op0");
    fa10[13].classList.add("op0"); }
function playAni2drum() {
        if (activateScale15 == 0) {
    fa11[0].classList.remove("op0");
    fa11[1].classList.remove("op0");
    fa11[2].classList.remove("op0");
    fa11[3].classList.remove("op0");
    fa11[4].classList.remove("op0");
    fa11[5].classList.remove("op0");
    fa11[6].classList.remove("op0");
    fa11[7].classList.remove("op0");
    fa11[8].classList.remove("op0");
    fa11[9].classList.remove("op0");
    fa11[10].classList.remove("op0");
    fa11[11].classList.remove("op0");
    fa11[12].classList.remove("op0");
    fa11[13].classList.remove("op0"); }
        }
function StopAni2drum() {
    fa11[0].classList.add("op0");
    fa11[1].classList.add("op0");
    fa11[2].classList.add("op0");
    fa11[3].classList.add("op0");
    fa11[4].classList.add("op0");
    fa11[5].classList.add("op0");
    fa11[6].classList.add("op0");
    fa11[7].classList.add("op0");
    fa11[8].classList.add("op0");
    fa11[9].classList.add("op0");
    fa11[10].classList.add("op0");
    fa11[11].classList.add("op0");
    fa11[12].classList.add("op0");
    fa11[13].classList.add("op0"); }
};

frank.addEventListener("transitionend",float6);
function float6() {
    console.log("frank")
    fa12[0].classList.add("anime-me2");
    fa12[1].classList.add("anime-me3");
    fa12[2].classList.add("anime-me4");
    fa12[3].classList.add("anime-me");
    fa12[4].classList.add("anime-me2");
    fa12[5].classList.add("anime-me3");
    fa12[6].classList.add("anime-me5");
    fa12[7].classList.add("anime-me");
    fa12[8].classList.add("anime-me4");
    fa12[9].classList.add("anime-me3");
    fa12[10].classList.add("anime-me5");
    fa12[11].classList.add("anime-me");
    fa12[12].classList.add("anime-me2");
    fa12[13].classList.add("anime-me5");
    fa13[0].classList.add("anime-me2");
    fa13[1].classList.add("anime-me3");
    fa13[2].classList.add("anime-me4");
    fa13[3].classList.add("anime-me");
    fa13[4].classList.add("anime-me2");
    fa13[5].classList.add("anime-me3");
    fa13[6].classList.add("anime-me5");
    fa13[7].classList.add("anime-me");
    fa13[8].classList.add("anime-me4");
    fa13[9].classList.add("anime-me3");
    fa13[10].classList.add("anime-me5");
    fa13[11].classList.add("anime-me");
    fa13[12].classList.add("anime-me2");
    fa13[13].classList.add("anime-me5");

let test12 = document.querySelector(".test12");
let test13 = document.querySelector(".test13");
test12.addEventListener('mouseenter', playAnifrank);
test12.addEventListener('mouseleave', StopAnifrank);
test13.addEventListener('mouseenter', playAni2frank);
test13.addEventListener('mouseleave', StopAni2frank);

function playAnifrank() {
        if (activateScale16 == 0) {
            console.log("I work frank");
    fa12[0].classList.remove("op0");
    fa12[1].classList.remove("op0");
    fa12[2].classList.remove("op0");
    fa12[3].classList.remove("op0");
    fa12[4].classList.remove("op0");
    fa12[5].classList.remove("op0");
    fa12[6].classList.remove("op0");
    fa12[7].classList.remove("op0");
    fa12[8].classList.remove("op0");
    fa12[9].classList.remove("op0");
    fa12[10].classList.remove("op0");
    fa12[11].classList.remove("op0");
    fa12[12].classList.remove("op0");
    fa12[13].classList.remove("op0"); }
        }
function StopAnifrank() {
    fa12[0].classList.add("op0");
    fa12[1].classList.add("op0");
    fa12[2].classList.add("op0");
    fa12[3].classList.add("op0");
    fa12[4].classList.add("op0");
    fa12[5].classList.add("op0");
    fa12[6].classList.add("op0");
    fa12[7].classList.add("op0");
    fa12[8].classList.add("op0");
    fa12[9].classList.add("op0");
    fa12[10].classList.add("op0");
    fa12[11].classList.add("op0");
    fa12[12].classList.add("op0");
    fa12[13].classList.add("op0"); }
function playAni2frank() {
        if (activateScale17 == 0) {
    fa13[0].classList.remove("op0");
    fa13[1].classList.remove("op0");
    fa13[2].classList.remove("op0");
    fa13[3].classList.remove("op0");
    fa13[4].classList.remove("op0");
    fa13[5].classList.remove("op0");
    fa13[6].classList.remove("op0");
    fa13[7].classList.remove("op0");
    fa13[8].classList.remove("op0");
    fa13[9].classList.remove("op0");
    fa13[10].classList.remove("op0");
    fa13[11].classList.remove("op0");
    fa13[12].classList.remove("op0");
    fa13[13].classList.remove("op0"); }
        }
function StopAni2frank() {
    fa13[0].classList.add("op0");
    fa13[1].classList.add("op0");
    fa13[2].classList.add("op0");
    fa13[3].classList.add("op0");
    fa13[4].classList.add("op0");
    fa13[5].classList.add("op0");
    fa13[6].classList.add("op0");
    fa13[7].classList.add("op0");
    fa13[8].classList.add("op0");
    fa13[9].classList.add("op0");
    fa13[10].classList.add("op0");
    fa13[11].classList.add("op0");
    fa13[12].classList.add("op0");
    fa13[13].classList.add("op0"); }
};

viewfinders.addEventListener("transitionend",float7);
function float7() {
    console.log("view")
    fa14[0].classList.add("anime-me2");
    fa14[1].classList.add("anime-me3");
    fa14[2].classList.add("anime-me4");
    fa14[3].classList.add("anime-me");
    fa14[4].classList.add("anime-me2");
    fa14[5].classList.add("anime-me3");
    fa14[6].classList.add("anime-me5");
    fa14[7].classList.add("anime-me");
    fa14[8].classList.add("anime-me4");
    fa14[9].classList.add("anime-me3");
    fa14[10].classList.add("anime-me5");
    fa14[11].classList.add("anime-me");
    fa14[12].classList.add("anime-me2");
    fa14[13].classList.add("anime-me5");
    fa15[0].classList.add("anime-me2");
    fa15[1].classList.add("anime-me3");
    fa15[2].classList.add("anime-me4");
    fa15[3].classList.add("anime-me");
    fa15[4].classList.add("anime-me2");
    fa15[5].classList.add("anime-me3");
    fa15[6].classList.add("anime-me5");
    fa15[7].classList.add("anime-me");
    fa15[8].classList.add("anime-me4");
    fa15[9].classList.add("anime-me3");
    fa15[10].classList.add("anime-me5");
    fa15[11].classList.add("anime-me");
    fa15[12].classList.add("anime-me2");
    fa15[13].classList.add("anime-me5");

let test14 = document.querySelector(".test14");
let test15 = document.querySelector(".test15");
test14.addEventListener('mouseenter', playAniview);
test14.addEventListener('mouseleave', StopAniview);
test15.addEventListener('mouseenter', playAni2view);
test15.addEventListener('mouseleave', StopAni2view);

function playAniview() {
        if (activateScale18 == 0) {
            console.log("I work frank");
    fa14[0].classList.remove("op0");
    fa14[1].classList.remove("op0");
    fa14[2].classList.remove("op0");
    fa14[3].classList.remove("op0");
    fa14[4].classList.remove("op0");
    fa14[5].classList.remove("op0");
    fa14[6].classList.remove("op0");
    fa14[7].classList.remove("op0");
    fa14[8].classList.remove("op0");
    fa14[9].classList.remove("op0");
    fa14[10].classList.remove("op0");
    fa14[11].classList.remove("op0");
    fa14[12].classList.remove("op0");
    fa14[13].classList.remove("op0"); }
        }
function StopAniview() {
    fa14[0].classList.add("op0");
    fa14[1].classList.add("op0");
    fa14[2].classList.add("op0");
    fa14[3].classList.add("op0");
    fa14[4].classList.add("op0");
    fa14[5].classList.add("op0");
    fa14[6].classList.add("op0");
    fa14[7].classList.add("op0");
    fa14[8].classList.add("op0");
    fa14[9].classList.add("op0");
    fa14[10].classList.add("op0");
    fa14[11].classList.add("op0");
    fa14[12].classList.add("op0");
    fa14[13].classList.add("op0"); }
function playAni2view() {
        if (activateScale19 == 0) {
    fa15[0].classList.remove("op0");
    fa15[1].classList.remove("op0");
    fa15[2].classList.remove("op0");
    fa15[3].classList.remove("op0");
    fa15[4].classList.remove("op0");
    fa15[5].classList.remove("op0");
    fa15[6].classList.remove("op0");
    fa15[7].classList.remove("op0");
    fa15[8].classList.remove("op0");
    fa15[9].classList.remove("op0");
    fa15[10].classList.remove("op0");
    fa15[11].classList.remove("op0");
    fa15[12].classList.remove("op0");
    fa15[13].classList.remove("op0"); }
        }
function StopAni2view() {
    fa15[0].classList.add("op0");
    fa15[1].classList.add("op0");
    fa15[2].classList.add("op0");
    fa15[3].classList.add("op0");
    fa15[4].classList.add("op0");
    fa15[5].classList.add("op0");
    fa15[6].classList.add("op0");
    fa15[7].classList.add("op0");
    fa15[8].classList.add("op0");
    fa15[9].classList.add("op0");
    fa15[10].classList.add("op0");
    fa15[11].classList.add("op0");
    fa15[12].classList.add("op0");
    fa15[13].classList.add("op0"); }
};

video.addEventListener("transitionend",float8);
function float8() {
    console.log("video")
    fa16[0].classList.add("anime-me2");
    fa16[1].classList.add("anime-me3");
    fa16[2].classList.add("anime-me4");
    fa16[3].classList.add("anime-me");
    fa16[4].classList.add("anime-me2");
    fa16[5].classList.add("anime-me3");
    fa16[6].classList.add("anime-me5");
    fa16[7].classList.add("anime-me");
    fa16[8].classList.add("anime-me4");
    fa16[9].classList.add("anime-me3");
    fa16[10].classList.add("anime-me5");
    fa16[11].classList.add("anime-me");
    fa16[12].classList.add("anime-me2");
    fa16[13].classList.add("anime-me5");
    fa17[0].classList.add("anime-me2");
    fa17[1].classList.add("anime-me3");
    fa17[2].classList.add("anime-me4");
    fa17[3].classList.add("anime-me");
    fa17[4].classList.add("anime-me2");
    fa17[5].classList.add("anime-me3");
    fa17[6].classList.add("anime-me5");
    fa17[7].classList.add("anime-me");
    fa17[8].classList.add("anime-me4");
    fa17[9].classList.add("anime-me3");
    fa17[10].classList.add("anime-me5");
    fa17[11].classList.add("anime-me");
    fa17[12].classList.add("anime-me2");
    fa17[13].classList.add("anime-me5");

let test16 = document.querySelector(".test16");
let test17 = document.querySelector(".test17");
test16.addEventListener('mouseenter', playAnivid);
test16.addEventListener('mouseleave', StopAnivid);
test17.addEventListener('mouseenter', playAni2vid);
test17.addEventListener('mouseleave', StopAni2vid);

function playAnivid() {
        if (activateScale20 == 0) {
            console.log("I work frank");
    fa16[0].classList.remove("op0");
    fa16[1].classList.remove("op0");
    fa16[2].classList.remove("op0");
    fa16[3].classList.remove("op0");
    fa16[4].classList.remove("op0");
    fa16[5].classList.remove("op0");
    fa16[6].classList.remove("op0");
    fa16[7].classList.remove("op0");
    fa16[8].classList.remove("op0");
    fa16[9].classList.remove("op0");
    fa16[10].classList.remove("op0");
    fa16[11].classList.remove("op0");
    fa16[12].classList.remove("op0");
    fa16[13].classList.remove("op0"); }
        }
function StopAnivid() {
    fa16[0].classList.add("op0");
    fa16[1].classList.add("op0");
    fa16[2].classList.add("op0");
    fa16[3].classList.add("op0");
    fa16[4].classList.add("op0");
    fa16[5].classList.add("op0");
    fa16[6].classList.add("op0");
    fa16[7].classList.add("op0");
    fa16[8].classList.add("op0");
    fa16[9].classList.add("op0");
    fa16[10].classList.add("op0");
    fa16[11].classList.add("op0");
    fa16[12].classList.add("op0");
    fa16[13].classList.add("op0"); }
function playAni2vid() {
        if (activateScale21 == 0) {
    fa17[0].classList.remove("op0");
    fa17[1].classList.remove("op0");
    fa17[2].classList.remove("op0");
    fa17[3].classList.remove("op0");
    fa17[4].classList.remove("op0");
    fa17[5].classList.remove("op0");
    fa17[6].classList.remove("op0");
    fa17[7].classList.remove("op0");
    fa17[8].classList.remove("op0");
    fa17[9].classList.remove("op0");
    fa17[10].classList.remove("op0");
    fa17[11].classList.remove("op0");
    fa17[12].classList.remove("op0");
    fa17[13].classList.remove("op0"); }
        }
function StopAni2vid() {
    fa17[0].classList.add("op0");
    fa17[1].classList.add("op0");
    fa17[2].classList.add("op0");
    fa17[3].classList.add("op0");
    fa17[4].classList.add("op0");
    fa17[5].classList.add("op0");
    fa17[6].classList.add("op0");
    fa17[7].classList.add("op0");
    fa17[8].classList.add("op0");
    fa17[9].classList.add("op0");
    fa17[10].classList.add("op0");
    fa17[11].classList.add("op0");
    fa17[12].classList.add("op0");
    fa17[13].classList.add("op0"); }
};

about.addEventListener("transitionend",float9);
function float9() {
    console.log("about")
    fa18[0].classList.add("anime-me2");
    fa18[1].classList.add("anime-me3");
    fa18[2].classList.add("anime-me4");
    fa18[3].classList.add("anime-me");
    fa18[4].classList.add("anime-me2");
    fa18[5].classList.add("anime-me3");
    fa18[6].classList.add("anime-me5");
    fa18[7].classList.add("anime-me");
    fa18[8].classList.add("anime-me4");
    fa18[9].classList.add("anime-me3");
    fa18[10].classList.add("anime-me5");
    fa18[11].classList.add("anime-me");
    fa18[12].classList.add("anime-me2");
    fa18[13].classList.add("anime-me5");
    fa19[0].classList.add("anime-me2");
    fa19[1].classList.add("anime-me3");
    fa19[2].classList.add("anime-me4");
    fa19[3].classList.add("anime-me");
    fa19[4].classList.add("anime-me2");
    fa19[5].classList.add("anime-me3");
    fa19[6].classList.add("anime-me5");
    fa19[7].classList.add("anime-me");
    fa19[8].classList.add("anime-me4");
    fa19[9].classList.add("anime-me3");
    fa19[10].classList.add("anime-me5");
    fa19[11].classList.add("anime-me");
    fa19[12].classList.add("anime-me2");
    fa19[13].classList.add("anime-me5");

let test18 = document.querySelector(".test18");
let test19 = document.querySelector(".test19");
test18.addEventListener('mouseenter', playAniabout);
test18.addEventListener('mouseleave', StopAniabout);
test19.addEventListener('mouseenter', playAni2about);
test19.addEventListener('mouseleave', StopAni2about);

function playAniabout() {
        if (activateScale22 == 0) {
            console.log("I work frank");
    fa18[0].classList.remove("op0");
    fa18[1].classList.remove("op0");
    fa18[2].classList.remove("op0");
    fa18[3].classList.remove("op0");
    fa18[4].classList.remove("op0");
    fa18[5].classList.remove("op0");
    fa18[6].classList.remove("op0");
    fa18[7].classList.remove("op0");
    fa18[8].classList.remove("op0");
    fa18[9].classList.remove("op0");
    fa18[10].classList.remove("op0");
    fa18[11].classList.remove("op0");
    fa18[12].classList.remove("op0");
    fa18[13].classList.remove("op0"); }
        }
function StopAniabout() {
    fa18[0].classList.add("op0");
    fa18[1].classList.add("op0");
    fa18[2].classList.add("op0");
    fa18[3].classList.add("op0");
    fa18[4].classList.add("op0");
    fa18[5].classList.add("op0");
    fa18[6].classList.add("op0");
    fa18[7].classList.add("op0");
    fa18[8].classList.add("op0");
    fa18[9].classList.add("op0");
    fa18[10].classList.add("op0");
    fa18[11].classList.add("op0");
    fa18[12].classList.add("op0");
    fa18[13].classList.add("op0"); }
function playAni2about() {
        if (activateScale23 == 0) {
    fa19[0].classList.remove("op0");
    fa19[1].classList.remove("op0");
    fa19[2].classList.remove("op0");
    fa19[3].classList.remove("op0");
    fa19[4].classList.remove("op0");
    fa19[5].classList.remove("op0");
    fa19[6].classList.remove("op0");
    fa19[7].classList.remove("op0");
    fa19[8].classList.remove("op0");
    fa19[9].classList.remove("op0");
    fa19[10].classList.remove("op0");
    fa19[11].classList.remove("op0");
    fa19[12].classList.remove("op0");
    fa19[13].classList.remove("op0"); }
        }
function StopAni2about() {
    fa19[0].classList.add("op0");
    fa19[1].classList.add("op0");
    fa19[2].classList.add("op0");
    fa19[3].classList.add("op0");
    fa19[4].classList.add("op0");
    fa19[5].classList.add("op0");
    fa19[6].classList.add("op0");
    fa19[7].classList.add("op0");
    fa19[8].classList.add("op0");
    fa19[9].classList.add("op0");
    fa19[10].classList.add("op0");
    fa19[11].classList.add("op0");
    fa19[12].classList.add("op0");
    fa19[13].classList.add("op0"); }
};

/*let freeze = document.querySelectorAll(".freeze");

freeze[0].addEventListener('mouseenter', opacity0);
freeze[0].addEventListener('mouseleave', opacity1);
freeze[1].addEventListener('mouseenter', opacity0two);
freeze[1].addEventListener('mouseleave', opacity1two);
freeze[2].addEventListener('mouseenter', opacity0);
freeze[2].addEventListener('mouseleave', opacity1);
freeze[3].addEventListener('mouseenter', opacity0two);
freeze[3].addEventListener('mouseleave', opacity1two);

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
    fa3[13].classList.add("op0");
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
    fa5[13].classList.add("op0");}}

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
    fa2[13].classList.add("op0");
    fa6[0].classList.add("op0");
    fa6[1].classList.add("op0");
    fa6[2].classList.add("op0");
    fa6[3].classList.add("op0");
    fa6[4].classList.add("op0");
    fa6[5].classList.add("op0");
    fa6[6].classList.add("op0");
    fa6[7].classList.add("op0");
    fa6[8].classList.add("op0");
    fa6[9].classList.add("op0");
    fa6[10].classList.add("op0");
    fa6[11].classList.add("op0");
    fa6[12].classList.add("op0");
    fa6[13].classList.add("op0"); }
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
    fa3[13].classList.remove("op0");
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
    fa5[13].classList.remove("op0");}

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
    fa2[13].classList.remove("op0");
    fa6[0].classList.remove("op0");
    fa6[1].classList.remove("op0");
    fa6[2].classList.remove("op0");
    fa6[3].classList.remove("op0");
    fa6[4].classList.remove("op0");
    fa6[5].classList.remove("op0");
    fa6[6].classList.remove("op0");
    fa6[7].classList.remove("op0");
    fa6[8].classList.remove("op0");
    fa6[9].classList.remove("op0");
    fa6[10].classList.remove("op0");
    fa6[11].classList.remove("op0");
    fa6[12].classList.remove("op0");
    fa6[13].classList.remove("op0"); }
*/
