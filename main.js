let count = document.images;
for (i = 0; i < count.length; i++) {
    if (document.images[i].hasAttribute("alt")) {
        document.images[i].setAttribute("alt", "Old")
    } else {
        document.images[i].setAttribute("alt", "Elzero New")
    }
}