let popupOn = document.getElementById("popup")
let fondPopupOn = document.getElementById("fond-popup")
let nomJoueur = document.getElementById('name')
let mail = document.getElementById('mail')

function openPopup(){
    let partager =document.getElementById("bouttonPartager")
    partager.addEventListener("click", () => {
        popupOn.classList.remove("off")
        fondPopupOn.classList.remove("off")
    })
}
function closePopup(){
    let boutonOkPopup = document.getElementById('boutonOkPopup')
    boutonOkPopup.addEventListener("click", ()=>{
        envoieMail(mail,nomJoueur,score)
        popupOn.classList.add("off")
        fondPopupOn.classList.add("off")
        consoleDonnePopup()
    })
}
function popup(){
    let formPopup = document.getElementById('formPopup')
    formPopup.addEventListener('submit',(event)=>{
        event.preventDefault();
    })
}
function consoleDonnePopup(){
    console.log(nomJoueur.value +"\n"+ mail.value+"\n"+score)
}
function envoieMail(mail,nomJoueur,score){
    let envoieMail = `mailto:${mail.value}?subject=Score Azertype&body=Salut, je suis ${nomJoueur.value}, et j'ai réalisé ${score} sur AzerType !!!`
    location.href = envoieMail
}