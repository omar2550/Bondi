window.onscroll = function () {
    if (window.scrollY >= document.querySelector(".landing").offsetHeight ) {
        document.querySelector(".up").classList.add("show");
    } else {
        document.querySelector(".up").classList.remove("show");
    }
}

document.querySelector(".up").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})


// Bondi Work

document.querySelector(".work button").addEventListener("click", () => {
    document.querySelectorAll(".work .row .none").forEach( col => col.classList.toggle("d-none"));
});

document.querySelectorAll(".work ul li").forEach( li => {

    li.addEventListener("click", e => {

        document.querySelectorAll(".work .row .none").forEach( col => col.classList.add("d-none"));

        document.querySelectorAll(".work ul li").forEach( li => li.className = "");

        e.target.className = "btn btn-primary rounded-pill";

        document.querySelectorAll(".work .all").forEach( box => {

            box.style.display = "none";
        })

        document.querySelectorAll(e.target.dataset.cat).forEach( e => {

            e.style.display = "block";
        })

    });

});

// Bondi Slider

let currentIndex = 0;
let items = document.querySelectorAll(".slider img");
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");

rightArrow.addEventListener("click", nextSlide)
leftArrow.addEventListener("click", prevSlide)

for (let i = 1; i <= items.length; i++) {
    let li = document.createElement("li");
    li.className = "p-2 m-2 bg-white rounded-1 fw-bold";
    li.innerText = i;
    document.querySelector(".slider ul").appendChild(li);
}

document.querySelector(".slider ul li").classList.add("active");

document.querySelectorAll(".slider ul li").forEach( ele => {

    ele.addEventListener("click", e => {
    
        currentIndex = e.target.innerText - 1;
        
        checker();
        
    })
});


// All Functions 

function nextSlide() {
    
        currentIndex++;
        checker();
    
}

function prevSlide() {
    
        currentIndex--;
        checker();
    
}

function checker() {
    
    items.forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".slider ul li").forEach(li => li.classList.remove("active"));
    
    
    items[currentIndex].classList.add("active");
    
    document.querySelectorAll(".slider ul li")[currentIndex].classList.add("active");

    if (currentIndex === items.length - 1) {
        rightArrow.classList.add("stop");
    } else {
        rightArrow.classList.remove("stop");
    }

    if (currentIndex === 0) {
        leftArrow.classList.add("stop");
    } else {
        leftArrow.classList.remove("stop");
    }
    
}