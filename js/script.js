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


