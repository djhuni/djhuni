// ===========================
// DJ HuNi
// skrypt.js
// ===========================

// Efekt płynnego pojawiania się strony
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Delikatny efekt kliknięcia przycisków
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});

// Aktualny rok w stopce (jeśli kiedyś dodasz element z id="year")
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}
