const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    const x = window.pageYOffset;
    if (x > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length; // Corrected variable name

imgPosition.forEach(function(image, index) {
    image.style.left = index * 100 + "%";
    dotItem[index].addEventListener("click", function() {
        slider(index);
    });
});

let indexSlide = 0; // Renamed index variable to avoid conflict

function imgSlide() {
    indexSlide++;
    if (indexSlide >= imgNumber) {
        indexSlide = 0;
    }
    slider(indexSlide);
}

function slider(index) {
    imgContainer.style.left = "-" + index * 100 + "%";
    const dotActive = document.querySelector('.active');
    dotActive.classList.remove("active");
    dotItem[index].classList.add("active");
}

setInterval(imgSlide, 5000);


function showContent(num) {
    // Hide all content
    document.getElementById("content1").classList.add("hidden");
    document.getElementById("content2").classList.add("hidden");
    document.getElementById("content3").classList.add("hidden");

    // Show the selected content
    document.getElementById("content" + num).classList.remove("hidden");
}