function createHome() {
    const home = document.createElement("div");
    home.classList.add(".home");
    home.appendChild(createAboutUs());
    return home;
}

function createAboutUs() {
    const aboutUs = document.createElement("p");
    aboutUs.textContent = "We sell beer and stuff. <3";
    return aboutUs;
}

export default createHome;