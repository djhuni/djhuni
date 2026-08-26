/* ======================================
   DJ HuNi Premium Landing
   script.js
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Płynne pojawienie się całej strony
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Efekt kliknięcia przycisków
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(.96)";

            if (navigator.vibrate) {
                navigator.vibrate(20);
            }

            setTimeout(() => {
                button.style.transform = "";
            }, 150);

        });

    });

    // Delikatne świecenie przycisków
    setInterval(() => {

        buttons.forEach(btn => {

            btn.classList.add("pulse");

            setTimeout(() => {
                btn.classList.remove("pulse");
            }, 1200);

        });

    }, 7000);

});


/* Efekt podążającej poświaty za kursorem (na komputerze) */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(212,175,55,.15), transparent 70%)";
glow.style.transform = "translate(-50%,-50%)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* Dodanie klasy pulse */

const style = document.createElement("style");

style.innerHTML = `

.pulse{

animation:pulse .8s ease;

}

@keyframes pulse{

0%{

box-shadow:0 0 0 rgba(212,175,55,0);

}

50%{

box-shadow:0 0 35px rgba(212,175,55,.45);

}

100%{

box-shadow:0 0 0 rgba(212,175,55,0);

}

}

`;

document.head.appendChild(style);
