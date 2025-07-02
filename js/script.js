window.addEventListener("DOMContentLoaded", () => {
    // Création du conteneur de l'intro
    const splash = document.createElement("div");
    splash.id = "splash-screen";
    splash.innerHTML = `
        <img src="./img/mp44.png" alt="Logo MP44" id="splash-logo">
    `;
    document.body.appendChild(splash);

    // Désactivation du scroll pendant l'animation
    document.body.style.overflow = "hidden";

    // Retirer l'intro après 2.5 secondes
    setTimeout(() => {
        splash.classList.add("fade-out");
        setTimeout(() => {
            splash.remove();
            document.body.style.overflow = "auto"; // Rétablir le scroll
        }, 500); // Correspond à la durée de l'animation CSS
    }, 2500);
});
