window.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    // Création du splash screen
    const splash = document.createElement("div");
    splash.id = "splash-screen";
    splash.innerHTML = `
        <img src="./img/mp44.png" alt="Logo MP44" id="splash-logo">
    `;
    document.body.appendChild(splash);

    // Désactive le scroll
    document.body.style.overflow = "hidden";

    // Supprimer le splash après 1.5s
    setTimeout(() => {
        splash.classList.add("fade-out");

        // Attendre la fin de l'opacité (0.8s) avant de retirer l'élément
        setTimeout(() => {
            splash.remove();
            mainContent.style.display = "block";
            mainContent.classList.add("fade-in"); // déclenche l'animation
            document.body.style.overflow = "auto";
        }, 800);
    }, 1500);
});
