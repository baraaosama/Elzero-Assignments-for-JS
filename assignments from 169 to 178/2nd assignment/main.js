let myRequest = new XMLHttpRequest;
myRequest.open("Get", "articles.json");
myRequest.send();
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(myRequest.responseText)
    }
    console.log("Data Loaded")
}
