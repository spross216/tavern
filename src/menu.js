function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(createMenuItem("Happy Meal", "One shot and one beer!"));

    return menu;
}

function createMenuItem(itemName, itemDescription) {
    const card = document.createElement("div");
    card.classList.add("menu-item");
    
    const name = document.createElement("h3");
    name.textContent = itemName;

    const description = document.createElement("p");
    description.textContent = itemDescription;

    card.appendChild(name);
    card.appendChild(description);

    return card;
}

export default createMenu;