let score = 0
let i=0
let motsJoueur = ""
let choixNiveau = ""
let choixEff = 0

function lancerJeu(){
    choixDuNiveau()
    lancerNiveau()
    afficherScore(score,i)
}
function choixDuNiveau(){
    while (choixEff<1){
        choixNiveau = prompt("choisiez le niveau 1 ou 2")
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
function lancerNiveau(){
    if(choixNiveau==="1"){
        for (i; i<listMots.length; i++) {
            motsJoueur = prompt("tapez : " + listMots[i])
            if (motsJoueur === listMots[i]){
                score ++;
            }    
        }
    }   
    if(choixNiveau==="2"){
        for (i; i<listMots2.length; i++) {
            motsJoueur = prompt("tapez : " + listMots2[i])
            if (motsJoueur === listMots2[i]){
                score ++;
            }
        }
    }
    return
}
function afficherScore(score,i){
    console.log("Vous avez " + score + "/" + i)
    return
}