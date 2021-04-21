var counter = 1; //counts how many rects

//calculate the initialized number of rects
function calculateRect(name) {
    return name.length * 2;
}

function giveRandomColor() {
    var colors = ["lightpink", "hotpink", "pink", "deeppink", "violet", "salmon", "palevioletred"];
    var rand = Math.floor(Math.random() * 7);
    return colors[rand];
}

function toggleImage() {
    if (this.style.backgroundImage == "")
        this.style.backgroundImage = "url(images/pic.jpg)";
    else
        this.style.backgroundImage = "";
}

function addRect() {
    //add star
    if ((counter + 1) % 3 == 0)
        document.getElementById("main3").insertAdjacentHTML('beforeend', `<article style=\"background-color:${giveRandomColor()};\"><div></div></article>`);
    else //dont add a star
        document.getElementById("main3").insertAdjacentHTML('beforeend', `<article style=\"background-color:${giveRandomColor()};\"></article>`);
    document.getElementsByTagName("article")[counter++].onclick = toggleImage
}

function initialize() {
    var name = "shemtov";
    var main = document.getElementById("main3");
    main.innerHTML += "<article><section id=\"plus\"> </section></article>";
    document.getElementsByTagName("article")[0].style.backgroundColor = giveRandomColor();
    for (var i = 1; i < calculateRect(name); i++) {
        addRect();
    }
    document.getElementById("plus").onclick = addRect
}
window.onload = initialize;