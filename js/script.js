window.addEventListener("DOMContentLoaded", () => {
    // Cacher le contenu principal
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

    // Supprimer le splash après 2.5 secondes
    setTimeout(() => {
        splash.classList.add("fade-out");

        setTimeout(() => {
            splash.remove();
            mainContent.style.display = "block"; // Affiche le vrai contenu
            document.body.style.overflow = "auto"; // Rétablit le scroll
        }, 500);
    }, 2500);
});
