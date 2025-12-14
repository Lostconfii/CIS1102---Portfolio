function openPopup(title, img, text){
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-img").src = img;
    document.getElementById("popup-text").innerHTML = text;

    document.getElementById("popup").style.display = "flex";
}
function closePopup(){
    document.getElementById("popup").style.display = "none";
}