images = document.querySelectorAll(".image");
prev = document.getElementById("prev");
next = document.getElementById("next");


let countImg = images.length;
let imgActive = 0;



next.onclick = function(){
    imgActive += 1;
    if(imgActive >= countImg)
    {
        imgActive = 0;
    }
    showImage();
}

prev.onclick = function(){
    imgActive -= 1;
    if(imgActive < 0)
    {
        imgActive = 4;
    }
    showImage();
}

let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showImage(){
    let imgActiveOld = document.querySelector(".box-slider .slider .image.active");
    imgActiveOld.classList.remove("active");

    images[imgActive].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
