let myRequest = new XMLHttpRequest;
myRequest.open("Get", "articles.json");
myRequest.send();
myRequest.onload = function () {
    let jsObject = JSON.parse(this.responseText);
    for (i = 0; i < jsObject.length; i++) {
        jsObject[i].dep = "all"
    }
    console.log(jsObject);
    let updatedData = JSON.stringify(jsObject);
    console.log(updatedData)
}