// Make the header
const header = document.createElement("div");
const logo = document.createElement("div");
logo.innerHTML = "Elzero";
const ul = document.createElement("ul");
const home = document.createElement("li");
home.innerHTML = "Home";
const about = document.createElement("li");
about.innerHTML = "About";
const service = document.createElement("li");
service.innerHTML = "Service";
const contact = document.createElement("li");
contact.innerHTML = "Contact";
ul.appendChild(home);
ul.appendChild(about);
ul.appendChild(service);
ul.appendChild(contact);
header.appendChild(logo);
header.appendChild(ul);
document.body.appendChild(header);
// Styling the header
header.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:10px";
logo.style.cssText = "color:#009999;font-weight:bold;font-size:20px";
ul.style.cssText = "list-style:none;display:flex;margin:0"
for (i = 0; i < document.querySelectorAll("li").length; i++) {
    document.querySelectorAll("li")[i].style.cssText = "margin-left:15px;color:#777";
}
document.body.style.cssText = "box-sizing:border-box;margin:0"
// Make the content
const content = document.createElement("div");
for (i = 0; i < 15; i++) {
    const product = document.createElement("div");
    product.innerHTML = `<span class="span" style="color:black;font-size:25px">${i + 1}</span> Product`;
    product.style.cssText = "display:flex;flex-direction:column;justify-content:center;align-items:center;color:#777;font-size:15px;background-color:white;padding:20px"
    content.appendChild(product);
}
content.style.cssText = "display:grid;grid-template-columns:repeat(3,1fr);gap:15px;background-color:#ffa366;padding:15px"
document.body.appendChild(content);
// Make footer
let footer = document.createElement("div");
footer.innerHTML = "Copyright 2022";
footer.style.cssText = "display:flex;justify-content:center;align-items:center;color:white;background-color:#009900;height:67px;font-size:25px";
document.body.appendChild(footer)