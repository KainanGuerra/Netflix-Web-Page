let divnet = document.querySelector("#divnet");
let spannet = document.querySelector("#spannet");
let txt = document.querySelector(".div_text--net");
let form = document.querySelector("#form");
let barrasnet = document.querySelector("#barrasnet")
divnet.addEventListener("click", acionar);
let pagtitle = document.querySelector("#pagtitle");
let nome = document.querySelector("#nometitle");
let user = document.querySelector("#user");
let pw = document.querySelector("#pw");
acionar();
function acionar(){
    if (form.style.display == "none"){
        divnet.style.animation = "netflix 1s both";
        nome.style.animation = "titulo 1s forwards";
        pagtitle.style.animation = "titulo 1s forwards"
        txt.style.animation = "txt 1s both"
        txt.style.display ="block"
        form.style.display = "flex";
        form.style.animation = "fade-in 1s both"
        return;
    }
    else{
        txt.style.animation = "txtback 1s both"

        form.style.animation = "fade-out 1s both"
        setTimeout(function(){
            form.style.display = "none"
        }, 1000)
        nome.style.animation = "tituloback 1s both"
   
        pagtitle.style.animation = "tituloback 1s both"

        divnet.style.animation = "netflix-back 1s both"
    }
};
function open(){
    divnet.style.animation = "vanish 0.8s forwards";
    let a = document.createElement('a');
    a.target= '_blank';
    a.href= 'https://www.netflix.com/br/';
    setTimeout(function(){
        pw.value = "";
        user.value = "";
        a.click();
     }, 1200);
}

let submit = document.querySelector("#signin").addEventListener("click", function(){
    txt.style.animation = "txtback 1s both"

    form.style.animation = "fade-out 1s both"
        setTimeout(function(){
            form.style.display = "none"
        }, 1000)   

    nome.style.animation = "sumirtitulo 0.8s forwards";
    pagtitle.style.animation = "sumirpag 0.8s forwards";

    form.style.animation = "fade-out 1s both"
    divnet.style.animation = "netflix-back 1s both"
    setTimeout(open, 1000);
});
/*
divnet.addEventListener("click", function(){

    if(form.style.visibility == "hidden"){
        form.style.visibility = "visible"
        return;
    }
    else{
        form.style.visibility = "hidden";
        return;
    }

});*/

