function filter(){
    console.log('came');
    var dis=document.getElementById("hide-content");
    console.log(dis);
    if (dis.style.display === "none") {
        console.log("display");
        dis.style.display = "block";
    } else {
        console.log("display3");
        dis.style.display = "none";
    }
}

let slideindex=0;
imgchange(slideindex);
function imgchange(k){
    Changeslide(slideindex+=k);
}

function Changeslide(n){
    let display=document.querySelectorAll(".home-image-slider");
    console.log(display);
    let leng=display.length;
    if(n>=leng){
        n=0;
        slideindex=0;
    }
    if(n<0){
        n=leng-1;
        slideindex=leng-1;
    }
    for(let i=0;i<leng;i++){
        display[i].style.display="none";
    }
    display[n].style.display="block";
}


function moveScroll(n){
    let scroll=document.querySelector(".internal-x-contents").scrollLeft+=n;
}

function moveScroll2(n){
    let scroll=document.querySelector(".internal-x-contents2").scrollLeft+=n;
}

