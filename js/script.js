function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "img/ampoule1.jpg"
    } else {
        pic = "img/ampoule2.png"
    }
    document.getElementById('myImage').src = pic;
}