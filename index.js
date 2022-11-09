const menu = document.getElementById("media-q")
const mediaquery = document.querySelector(".mediaquery")

menu.addEventListener("click", function(){
    //console.log(mediaquery.classList.contains("mediaquery"))
    if(mediaquery.classList.contains("show-links")){
        mediaquery.classList.remove("show-links")
    }else{
        mediaquery.classList.add("show-links")
    }
    //mediaquery.classList.toggle("show-links")
    mediaquery.style.transition = "0.5s"
})