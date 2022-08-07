let myRequest = new XMLHttpRequest;
myRequest.open("Get", "articles.json");
myRequest.send();
myRequest.onload = function () {
    let data = JSON.parse(myRequest.responseText);
    let mainDiv = document.createElement("div");
    mainDiv.id = "data";
    document.body.appendChild(mainDiv);
    for (i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = `<h2>Title ${data[i].title}</h2>
        <p>Article Number ${data[i].id} Body</p>
        <p>Author: ${data[i].name}</p>
        <p>Category: ${data[i].dep}</p>`;
        mainDiv.appendChild(div);
    }
}