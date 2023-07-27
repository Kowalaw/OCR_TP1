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
        if (nomValide(nomJoueur)&&mailValide(mail)){
            envoieMail(mail,nomJoueur,score)
            popupOn.classList.add("off")
            fondPopupOn.classList.add("off")
            consoleDonnePopup()
        } else {
            console.log("error")
        }
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
function nomValide(nomJoueur){
    if (nomJoueur.value.length>=2){
        return true
    } 
    return false
}
function mailValide(mail){
    let regexmail = new RegExp("[a-z0-9._-]+@+[a-z0-9._-]+\\.+[a-z]+")
    if (regexmail.test(mail.value)){
        return true
    }
    return false
}