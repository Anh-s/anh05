
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
let index = 1;
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})


const filterForm = document.getElementById("filterForm");
const filterButton = document.getElementById("filterButton");
const resetButton = document.getElementById("resetButton");
const sizeOptions = document.querySelectorAll(".size-option");
const colorOptions = document.querySelectorAll(".color-option");
const priceRange = document.getElementById("priceRange");
const priceDisplay = document.getElementById("priceDisplay");
const discountOptions = document.querySelectorAll("input[name='discount']");

filterButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Đã lọc dữ liệu!");
});


resetButton.addEventListener("click", function(event) {
    event.preventDefault();
   
    console.log("Đã bỏ lọc dữ liệu!");
});


sizeOptions.forEach(function(option) {
    option.addEventListener("click", function() {
        
        console.log("Kích thước đã được chọn:", option.dataset.size);
    });
});


colorOptions.forEach(function(option) {
    option.addEventListener("click", function() {
        
        console.log("Màu sắc đã được chọn:", option.classList[1]);
    });
});


priceRange.addEventListener("input", function() {
    priceDisplay.textContent = this.value.toString().replace(/\B(?=(\d{5})+(?!\d))/g, ".") + "đ";
});


discountOptions.forEach(function(option) {
    option.addEventListener("change", function() {
       
        console.log("Mức chiết khấu đã được chọn:", option.value);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            
            colorOptions.forEach(function(option) {
                option.classList.remove('selected');
            });

            
            option.classList.add('selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const colorCcs = document.querySelectorAll('.color-cc');

    colorCcs.forEach(function(cc) {
        cc.addEventListener('click', function() {
            
            colorCcs.forEach(function(cc) {
                cc.classList.remove('selected');
            });

            
            cc.classList.add('selected');
        });
    });
});

