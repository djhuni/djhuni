document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const x = e.offsetX;
        const y = e.offsetY;
        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
    });
});
