let score = 0
let i=0
let c = 0
let listMots = listMots1

function lancerJeu(){
    let btnRadio = document.querySelectorAll("#radioNiveau input")
    for (c;c<btnRadio.length;c++){
        btnRadio[c].addEventListener("change",(event)=>{
            if(event.target.value==="1"){
                listMots = listMots1
            } else {
                listMots = listMots2
            }
            motProposer(listMots,i)
        })
    }
    motProposer(listMots,i)
    let repJoueur = document.getElementById("repJoueur")
    let boutonOk = document.getElementById("boutonOk")
    boutonOk.addEventListener("click", () => {
        if (repJoueur.value === listMots[i]){
            score ++;
        }  
        i++
        motProposer(listMots,i)
        if (i===listMots.length){
            mot.textContent = "Game Over"
            boutonOk.remove("boutonOk")
        }
        afficherScore(score,i)
    })
    openPopup()
    popup()
    closePopup()
}
function motProposer(listMots,i){
    let mot = document.getElementById("mot")
    mot.textContent = listMots[i]
}
function afficherScore(score,i){
    let résultat = `${score + "/" + i}
    `
    let span = document.querySelector("span")
    span.innerHTML = résultat
    return
}