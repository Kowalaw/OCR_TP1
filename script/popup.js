function openPopup(){
    let partager =document.getElementById("bouttonPartager")
    partager.addEventListener("click", () => {
        let popupOn = document.getElementById("popup")
        popupOn.classList.remove("off")
        let fondPopupOn = document.getElementById("fond-popup")
        fondPopupOn.classList.remove("off")
    })
}