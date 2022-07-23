let p = document.querySelector("p");
p.remove();
let div = document.querySelector("div");

let befor = document.createElement("div");
befor.className = "start";
befor.setAttribute("title", "start element");
befor.setAttribute("data-value", "start");
div.before(befor.cloneNode(true));
let after = document.createElement("div");
after.className = "end";
after.setAttribute("title", "end element");
after.setAttribute("data-value", "end");
div.after(after.cloneNode(true))
