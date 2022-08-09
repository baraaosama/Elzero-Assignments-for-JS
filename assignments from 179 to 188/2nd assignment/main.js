fetch("test.json").then((result) => {
    let myData = result.json();
    return myData;
}).then((five) => {
    five.length = 5;
    return five;
}).then((myData) => {
    for (i = 0; i < myData.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${myData[i].title}</h3>
        <p>${myData[i].description}</p>`;
        document.body.appendChild(div);
    }
})