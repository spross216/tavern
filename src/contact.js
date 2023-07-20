function createContactUs() {
    const contactUs = document.createElement("div");
    contactUs.classList.add("contact-us");
    
    const title = document.createElement("h3");
    title.textContent = "Come by or give us a call!";

    const address = document.createElement("p");
    address.textContent = "1234 Drunk LN | Wichita, KS | 67217";

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "123-867-5309";

    contactUs.appendChild(title);
    contactUs.appendChild(address);
    contactUs.appendChild(phoneNumber);

    return contactUs;
}

export default createContactUs;