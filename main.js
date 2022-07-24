let popup = document.querySelector("div");
let btn = document.querySelector("button");
popup.style.cssText = "background-color:#d6d6c2;width:500px;height:150px;display:none;justify-content:center;align-items:center;flex-direction:column;border:1px solid #ffb3b3;position:relative;top:100px;left:450px"
btn.style.cssText = "position:absolute;top:-8px;right:-8px;border-radius:50%;width:25px;height:25px;background-color:red;border:none;color:white;";

window.onload = setTimeout(function () {
    popup.style.display = "flex";
}, 5000)
btn.onclick = function () {
    popup.style.display = "none";
}
