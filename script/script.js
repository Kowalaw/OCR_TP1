let score = 0
let i=0
let choixNiveau = "1"
let choixEff = 0

function lancerJeu(){
    //choixDuNiveau()
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
}

function motProposer(listMots,i){
    let mot = document.getElementById("mot")
    mot.textContent = listMots[i]
}
function choixDuNiveau(){
    while (choixEff<1){
        //choixNiveau = prompt("choisiez le niveau 1 ou 2")
        switch(choixNiveau){
            case "1":
                choixEff++
                break
            case "2":
                choixEff++
                break
            default:
                console.log("répondez par 1 ou 2")
        }
    }
    return
}
function afficherScore(score,i){
    let résultat = `${score + "/" + i}
    `
    let span = document.querySelector("span")
    span.innerHTML = résultat
    return
}