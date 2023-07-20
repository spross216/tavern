import createHome from "./home";
import createMenu from "./menu";
import createContactUs from "./contact";

function renderPage() {
    const content = document.querySelector("#content");
    content.appendChild(createHeader());
    content.appendChild(createPageContent());
}

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Ross's Tavern";

    header.appendChild(title);
    header.appendChild(createTabs());

    return header;
}

function createTab(text, event) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    const tabText = document.createElement("h2");
    tabText.textContent = text
    tab.appendChild(tabText);

    tab.addEventListener("click", () => {
        const pageContent = document.querySelector(".page-content");
        for (var i = 0; i < pageContent.childNodes.length; i++){
            pageContent.removeChild(pageContent.childNodes[i]);
        }

        pageContent.appendChild(event);
    })

    return tab;
}

function createTabs() {
    const tabs = document.createElement("div");
    tabs.classList.add("tabs");

    tabs.appendChild(createTab("Home", createHome()));
    tabs.appendChild(createTab("Menu", createMenu()));
    tabs.appendChild(createTab("Contact Us", createContactUs()));
    
    return tabs;
}

function createPageContent() {
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    pageContent.appendChild(createHome());

    return pageContent;
}

export default renderPage;