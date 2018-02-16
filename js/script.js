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


dots.forEach(function (dot) {
   menu.addEventListener('mouseenter', () =>{
        dot.classList.add("s4");
   });
     menu.addEventListener('mouseleave', () =>{
        dot.classList.remove("s4");
   });
})

menu.addEventListener('click', () => {
    menuBox.classList.toggle("hide");
    menuBox.addEventListener('click', () => {
                    menuBox.classList.remove("show");
                })
})

let slide = document.querySelector(".slide");
let fade = document.querySelector("#fade-in");

slide.addEventListener("click", function () {
    fade.classList.toggle("show")
});

//intro text writes itself //

masaWuDesign.addEventListener("animationend", shrink)

function shrink() {
    svgText.classList.add("smallUp");
    setTimeout(function () {
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
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
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
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
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
    setTimeout(function () {
        c4.classList.add("animate-letter");
    }, 100);
    setTimeout(function () {
        o4.classList.add("animate-letter");
    }, 200);
    setTimeout(function () {
        n4.classList.add("animate-letter");
    }, 300);
    setTimeout(function () {
        t4.classList.add("animate-letter");
    }, 400);
    setTimeout(function () {
        a4.classList.add("animate-letter");
    }, 500);
    setTimeout(function () {
        c44.classList.add("animate-letter");
    }, 600);
    setTimeout(function () {
        t44.classList.add("animate-letter");
    }, 700);
    setTimeout(function () {
        space4.classList.add("animate-letter");
    }, 800);
    setTimeout(function () {
        m4.classList.add("animate-letter");
    }, 900);
    setTimeout(function () {
        e4.classList.add("animate-letter");
    }, 1000);


    setTimeout(function () {
        setTimeout(function () {
            c4.classList.remove("animate-letter");
        }, 100);
        setTimeout(function () {
            o4.classList.remove("animate-letter");
        }, 200);
        setTimeout(function () {
            n4.classList.remove("animate-letter");
        }, 300);
        setTimeout(function () {
            t4.classList.remove("animate-letter");
        }, 400);
        setTimeout(function () {
            a4.classList.remove("animate-letter");
        }, 500);
        setTimeout(function () {
            c44.classList.remove("animate-letter");
        }, 600);
        setTimeout(function () {
            t44.classList.remove("animate-letter");
        }, 700);
        setTimeout(function () {
            space4.classList.remove("animate-letter");
        }, 800);
        setTimeout(function () {
            m4.classList.remove("animate-letter");
        }, 900);
        setTimeout(function () {
            e4.classList.remove("animate-letter");
        }, 1000);
    }, 900);
}

// when hover image change the color of the text//


let linkedIn = document.getElementById("linkedIn");
let imgHovElm = document.querySelectorAll(".img-hover-effect");

    imgHovElm.forEach(function (imgH) {
imgH.addEventListener("mouseenter", () => {
    linkedIn.classList.add("green-me");
    CV.classList.add("green-me");
    takeBreak.classList.add("green-me");
})
    })

 imgHovElm.forEach(function (imgH) {
imgH.addEventListener("mouseleave", () => {
    linkedIn.classList.remove("green-me");
    CV.classList.remove("green-me");
    takeBreak.classList.remove("green-me");
})
    })



//typewriting effect//
var about = document.getElementById("about");
about.addEventListener("transitionend", typeWriter);

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
video.addEventListener("transitionend", typeWriter2);
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
viewfinders.addEventListener("transitionend", typeWriter3);
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
frank.addEventListener("transitionend", typeWriter4);
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
drum.addEventListener("transitionend", typeWriter5);
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
menu2.addEventListener("transitionend", typeWriter6);
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
misschili.addEventListener("transitionend", typeWriter7);
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
redesign.addEventListener("transitionend", typeWriter8);
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
swiss.addEventListener("transitionend", typeWriter9);
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
home.addEventListener("transitionend", typeWriter10);
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
let square3 = document.querySelectorAll(".square3");
let square4 = document.querySelectorAll(".square4");
let test01 = document.querySelector(".test01");
let test02 = document.querySelector(".test02");
let hov01 = document.querySelector(".hov01");
let hov02 = document.querySelector(".hov02");

square3.forEach(function (SquareR) {
    SquareR.addEventListener('mouseenter', playAni);
    SquareR.addEventListener('mouseenter', moveMyT);
    SquareR.addEventListener('mouseleave', StopAni);
    SquareR.addEventListener('mouseleave', moveMyTBack);
});

square4.forEach(function (SquareL) {
    SquareL.addEventListener('mouseenter', playAni2);
    SquareL.addEventListener('mouseenter', moveMyT2);
    SquareL.addEventListener('mouseleave', StopAni2);
    SquareL.addEventListener('mouseleave', moveMyTBack2);
});

//animate text in teh qruare 3,4 to transition to the right//
let styleTile = document.querySelectorAll(".styleTile");
let logoDev = document.querySelectorAll(".logoDev");
let styleTile2 = document.querySelectorAll(".styleTile2");
let styleTile3 = document.querySelectorAll(".styleTile3");
let styleTile4 = document.querySelectorAll(".styleTile4");
let logoDev2 = document.querySelectorAll(".logoDev2");
let logoDev3 = document.querySelectorAll(".logoDev3");
let logoDev4 = document.querySelectorAll(".logoDev4");

function moveMyT() {
    styleTile.forEach(function (moveMyT1) {
        moveMyT1.classList.add("rSquareAni");
    });
    styleTile2.forEach(function (moveMyT19) {
        moveMyT19.classList.add("rSquareAni");
    });
    styleTile3.forEach(function (moveMyT19X) {
        moveMyT19X.classList.add("rSquareAniUx");
    });
    styleTile4.forEach(function (moveMyT19Vid) {
        moveMyT19Vid.classList.add("rSquareAniVid");
    });

}

function moveMyTBack() {
    styleTile.forEach(function (moveMyTBack1) {
        moveMyTBack1.classList.add("lSquareAni");
        moveMyTBack1.classList.remove("rSquareAni");
        setTimeout(function () {
            moveMyTBack1.classList.remove("lSquareAni");
        }, 1000);
    });
    styleTile2.forEach(function (moveMyTBack19) {
        moveMyTBack19.classList.add("lSquareAni");
        moveMyTBack19.classList.remove("rSquareAni");
        setTimeout(function () {
            moveMyTBack19.classList.remove("lSquareAni");
        }, 1000);
    });
    styleTile3.forEach(function (moveMyTBack19X) {
        moveMyTBack19X.classList.add("rSquareAniUxBack");
        moveMyTBack19X.classList.remove("rSquareAniUx");
        setTimeout(function () {
            moveMyTBack19X.classList.remove("rSquareAniUxBack");
        }, 1000);
    });
    styleTile4.forEach(function (moveMyTBack19Vid) {
        moveMyTBack19Vid.classList.add("rSquareAniVidBack");
        moveMyTBack19Vid.classList.remove("rSquareAniVid");
        setTimeout(function () {
            moveMyTBack19Vid.classList.remove("rSquareAniVidBack");
        }, 1000);
    });
}

function moveMyT2() {
    logoDev.forEach(function (moveMyT02) {
        moveMyT02.classList.add("rSquareAni");
    });
    logoDev2.forEach(function (moveMyT029) {
        moveMyT029.classList.add("rSquareAni");
    });
    logoDev3.forEach(function (moveMyT029X) {
        moveMyT029X.classList.add("lSquareAniX");
    });
    logoDev4.forEach(function (moveMyT029Cv) {
        moveMyT029Cv.classList.add("rSquareAni");
    });
}

function moveMyTBack2() {
    logoDev.forEach(function (moveMyTBack02) {
        moveMyTBack02.classList.add("lSquareAni");
        moveMyTBack02.classList.remove("rSquareAni");
        setTimeout(function () {
            moveMyTBack02.classList.remove("lSquareAni");
        }, 1000);
    });
    logoDev2.forEach(function (moveMyTBack029) {
        moveMyTBack029.classList.add("lSquareAni");
        moveMyTBack029.classList.remove("rSquareAni");
        setTimeout(function () {
            moveMyTBack029.classList.remove("lSquareAni");
        }, 1000);
    });
    logoDev3.forEach(function (moveMyTBack029X) {
        moveMyTBack029X.classList.add("lSquareAniXBack");
        moveMyTBack029X.classList.remove("lSquareAniX");
        setTimeout(function () {
            moveMyTBack029X.classList.remove("lSquareAniXBack");
        }, 1000);
    });
    logoDev4.forEach(function (moveMyTBack029Cv) {
        moveMyTBack029Cv.classList.add("lSquareAni");
        moveMyTBack029Cv.classList.remove("rSquareAni");
        setTimeout(function () {
            moveMyTBack029Cv.classList.remove("lSquareAni");
        }, 1000);
    });
}

window.onload = float();

function float() {
    //swiss
    fa3.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })
    fa2.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })
    //redesign
    fa5.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })
    fa4.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })
};

function playAni() {
    //swiss
    hov01.classList.add("style");
    fa3.forEach(f=>{
    f.classList.remove("op0");
    })
    //redesign
    hov1.classList.add("style");
    fa4.forEach(f=>{
    f.classList.remove("op0");
    })
}

function StopAni() {
    hov01.classList.remove("style");
    fa3.forEach(f=>{
    f.classList.add("op0");
    })
    //reddesign
    hov1.classList.remove("style");
    fa4.forEach(f=>{
    f.classList.add("op0");
    })
}

function playAni2() {
    hov02.classList.add("style");
    fa2.forEach(f=>{
    f.classList.remove("op0");
    })
    //redesign
    hov2.classList.add("style");
    fa5.forEach(f=>{
    f.classList.remove("op0");
    })
}

function StopAni2() {
    hov02.classList.remove("style");
    fa2.forEach(f=>{
    f.classList.add("op0");
    })
    //redesign
    hov2.classList.remove("style");
    fa5.forEach(f=>{
    f.classList.add("op0");
    })
}
let test1 = document.querySelector(".test1");
let test2 = document.querySelector(".test2");
let hov1 = document.querySelector(".hov1");
let hov2 = document.querySelector(".hov2");


let test3 = document.querySelector(".test3");
let test4 = document.querySelector(".test4");
let hov3 = document.querySelector(".hov3");
let hov4 = document.querySelector(".hov4");

misschili.addEventListener("transitionend", float3);

function float3() {
    //interactive animation
    fa6.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })
    fa7.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    test3.addEventListener('mouseenter', playAnimisschili);
    test3.addEventListener('mouseleave', StopAnimisschili);
    test4.addEventListener('mouseenter', playAni2misschili);
    test4.addEventListener('mouseleave', StopAni2misschili);

    function playAnimisschili() {
        console.log("I work");
        hov3.classList.add("style");
        fa6.forEach(f=>f.classList.remove("op0"))
    }

    function StopAnimisschili() {
        hov3.classList.remove("style");
        fa6.forEach(f=>{
    f.classList.add("op0");
    })
    }

    function playAni2misschili() {
        hov4.classList.add("style");
        fa7.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAni2misschili() {
        hov4.classList.remove("style");
        fa7.forEach(f=>{
    f.classList.add("op0");
    })
    }
};

let test8 = document.querySelector(".test8");
let test9 = document.querySelector(".test9");
let hov8 = document.querySelector(".hov8");
let hov9 = document.querySelector(".hov9");

menu2.addEventListener("transitionend", float4);

function float4() {
    // project pool 1
    fa8.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    fa9.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    test8.addEventListener('mouseenter', playAnimenu);
    test8.addEventListener('mouseleave', StopAnimenu);
    test9.addEventListener('mouseenter', playAni2menu);
    test9.addEventListener('mouseleave', StopAni2menu);

    function playAnimenu() {


        console.log("I work menu");
        hov8.classList.add("style");
        fa8.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAnimenu() {
        hov8.classList.remove("style");

        fa8.forEach(f=>{
    f.classList.add("op0");
    })
    }

    function playAni2menu() {
        hov9.classList.add("style");

        fa9.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAni2menu() {
        hov9.classList.remove("style");
        fa9.forEach(f=>{
    f.classList.add("op0");
    })
    }
};

let test10 = document.querySelector(".test10");
let test11 = document.querySelector(".test11");
let hov10 = document.querySelector(".hov10");
let hov11 = document.querySelector(".hov11");

drum.addEventListener("transitionend", float5);

function float5() {
     // project pool 2 - drum
    fa10.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    fa11.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    test10.addEventListener('mouseenter', playAnidrum);
    test10.addEventListener('mouseleave', StopAnidrum);
    test11.addEventListener('mouseenter', playAni2drum);
    test11.addEventListener('mouseleave', StopAni2drum);

    function playAnidrum() {
        console.log("I work menu");
        hov10.classList.add("style");
        fa10.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAnidrum() {
        hov10.classList.remove("style");
        fa10.forEach(f=>{
    f.classList.add("op0");
    })
    }

    function playAni2drum() {
        hov11.classList.add("style");
        fa11.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAni2drum() {
        hov11.classList.remove("style");
        fa11.forEach(f=>{
    f.classList.add("op0");
    })
    }
};

let test12 = document.querySelector(".test12");
let test13 = document.querySelector(".test13");
let hov12 = document.querySelector(".hov12");
let hov13 = document.querySelector(".hov13");


frank.addEventListener("transitionend", float6);

function float6() {

     // frankenstein
    fa12.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    fa13.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    test12.addEventListener('mouseenter', playAnifrank);
    test12.addEventListener('mouseleave', StopAnifrank);
    test13.addEventListener('mouseenter', playAni2frank);
    test13.addEventListener('mouseleave', StopAni2frank);

    function playAnifrank() {
        console.log("I work frank");
        hov12.classList.add("style");
        fa12.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAnifrank() {
        hov12.classList.remove("style");
        fa12.forEach(f=>{
    f.classList.add("op0");
    })
    }

    function playAni2frank() {
        hov13.classList.add("style");
        fa13.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAni2frank() {
        hov13.classList.remove("style");
        fa13.forEach(f=>{
    f.classList.add("op0");
    })
    }
};

let hov15a = document.querySelector(".hov15a");
let hov15 = document.querySelector(".hov15");
let hov14 = document.querySelector(".hov14");

viewfinders.addEventListener("transitionend", float7);

function float7() {
    // viewfinders
    fa14.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    fa15.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    let test14 = document.querySelector(".test14");
    let test15 = document.querySelector(".test15");
    test14.addEventListener('mouseenter', playAniview);
    test14.addEventListener('mouseleave', StopAniview);
    test15.addEventListener('mouseenter', playAni2view);
    test15.addEventListener('mouseleave', StopAni2view);

    function playAniview() {
        console.log("I work frank");
        hov14.classList.add("style");
        fa14.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAniview() {
        hov14.classList.remove("style");
        fa14.forEach(f=>{
    f.classList.add("op0");
    })
    }

    function playAni2view() {
        hov15a.classList.add("style");
        hov15.classList.add("style");
        fa15.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAni2view() {
        hov15a.classList.remove("style");
        hov15.classList.remove("style");
        fa15.forEach(f=>{
    f.classList.add("op0");
    })
    }
};

let hov16 = document.querySelector(".hov16");
let hov17 = document.querySelector(".hov17");


video.addEventListener("transitionend", float8);

function float8() {
     // video
    fa16.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    fa17.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    let test16 = document.querySelector(".test16");
    let test17 = document.querySelector(".test17");
    test16.addEventListener('mouseenter', playAnivid);
    test16.addEventListener('mouseleave', StopAnivid);
    test17.addEventListener('mouseenter', playAni2vid);
    test17.addEventListener('mouseleave', StopAni2vid);

    function playAnivid() {
        console.log("I work frank");
        hov16.classList.add("style");
        fa16.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAnivid() {
        hov16.classList.remove("style");
        fa16.forEach(f=>{
    f.classList.add("op0");
    })
    }

    function playAni2vid() {
        hov17.classList.add("style");
        fa17.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAni2vid() {
        hov17.classList.remove("style");
        fa17.forEach(f=>{
    f.classList.add("op0");
    })
    }
};

let hov18 = document.querySelector(".hov18");
let hov19 = document.querySelector(".hov19");

about.addEventListener("transitionend", float9);

function float9() {
    console.log("about")
    // about
    fa18.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    fa19.forEach(f=>{
        f.classList.add("anime-me"+(Math.floor(Math.random()*5)+1));
    })

    let test18 = document.querySelector(".test18");
    let test19 = document.querySelector(".test19");
    test18.addEventListener('mouseenter', playAniabout);
    test18.addEventListener('mouseleave', StopAniabout);
    test19.addEventListener('mouseenter', playAni2about);
    test19.addEventListener('mouseleave', StopAni2about);

    function playAniabout() {
        console.log("I work frank");
        hov18.classList.add("style");
        fa18.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAniabout() {
        hov18.classList.remove("style");
        fa18.forEach(f=>{
    f.classList.add("op0");
    })
    }

    function playAni2about() {
        hov19.classList.add("style");
        fa19.forEach(f=>{
    f.classList.remove("op0");
    })
    }

    function StopAni2about() {
        hov19.classList.remove("style");
        fa19.forEach(f=>{
    f.classList.add("op0");
    })
    }
};

//squares on click linked to project docs

test01.addEventListener("click", function () {
    window.location.href = "documentation/swissstyle/swiss-style-logo.pdf";
});
test02.addEventListener("click", function () {
    window.location.href = "documentation/swissstyle/swiss-style-mood-board.pdf";
});

test1.addEventListener("click", function () {
    window.location.href = "http://www.misschili.net/kea/redesign/index.html";
});

test2.addEventListener("click", function () {
    window.location.href = "documentation/redesign/presentation-website-redesign.pdf";
});

test3.addEventListener("click", function () {
    window.location.href = "documentation/misschili/Worksheet-MasaWu.pdf";
});

test4.addEventListener("click", function () {
    window.location.href = "documentation/misschili/StyleTile-MasaWu.pdf";
});

test8.addEventListener("click", function () {
    window.location.href = "documentation/code-snippets/animated-menu-code-snippet.pdf";
});

test9.addEventListener("click", function () {
    window.location.href = "documentation/menu/style-tile_animated-menu.pdf";
});

test10.addEventListener("click", function () {
    window.location.href = "documentation/drums/drums-code-snippet.pdf";
});

test11.addEventListener("click", function () {
    window.location.href = "documentation/drums/style_tile_Masa-Wu_drums.pdf";
});

test12.addEventListener("click", function () {
    window.location.href = "documentation/frankenstein/Summary-of-expert-test-frankenstein.pdf";
});

test13.addEventListener("click", function () {
    window.location.href = "documentation/frankenstein/story-board-and-personas-collage.pdf";
});

/*
test14.addEventListener("click", function(){
    window.location.href = "../documentation/frankenstein/Summary-of-expert-test-frankenstein.pdf";
});

test15.addEventListener("click",function(){
    window.location.href = "../documentation/frankenstein/story-board-and-personas-collage.pdf";
});


//font awesome iocons dissapear on text hover//

let freeze = document.querySelectorAll(".freeze");

    freeze.forEach(function (e) {
e.addEventListener("mouseenter", () => {
    ("fa"+(Math.floor(Math.random()*5)+1)).classList.add("opacity0");
})
    })
    freeze.forEach(function (e) {
e.addEventListener("mouseleave", () => {
     ("fa"+(Math.floor(Math.random()*5)+1)).classList.add("opacity1");
})
    })

/*
freeze[0].addEventListener('mouseenter', opacity0);
freeze[0].addEventListener('mouseleave', opacity1);
freeze[1].addEventListener('mouseenter', opacity0two);
freeze[1].addEventListener('mouseleave', opacity1two);
freeze[2].addEventListener('mouseenter', opacity0);
freeze[2].addEventListener('mouseleave', opacity1);
freeze[3].addEventListener('mouseenter', opacity0two);
freeze[3].addEventListener('mouseleave', opacity1two);

function opacity0() { {
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
