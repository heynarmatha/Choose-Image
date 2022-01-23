const  smallImage =  document.querySelectorAll(".gallery img");
const model = document.querySelector(".model");
const largeImage = document.querySelector(".full-img");

smallImage.forEach(function(img){
    img.addEventListener("click" , function(){
        model.classList.add("open");
        largeImage.classList.add("open");
        // dynamic 
        const original = img.getAttribute("alt");
        largeImage.src = `../../public/images/full/${original}.jpg`;
    });
});

model.addEventListener("click",function(e){
    if(e.target.classList.contains("model")){
        model.classList.remove("open");
        largeImage.classList.remove("open"); 
    }
});

