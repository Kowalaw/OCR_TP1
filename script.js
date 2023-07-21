let score = 0
let listef = ["banane","pomme","noisette"]
let listed = ["j'aime les bannes","j'adore les pommes","les noisettes c'est cool"]
let mot =""
let i=0
let numL=0
let choix=""
let fod = false

while (fod === false){
    choix = prompt("choisisez le mode facile ou difficile :")
    switch (choix){
        case "facile":
            fod = true
            for (i;i<3;i++){
                mot = prompt("tapez : " +listef[numL])
                if (mot === listef[numL]){
                    console.log("Bravo, tu gagne 1 point")
                    score++
                    numL++
                } else {
                    console.log("raté")
                    numL++
                    }
                }
            break
        case "dificile":
            fod = true
            for (i;i<3;i++){
                mot = prompt("tapez : " +listed[numL])
                if (mot === listed[numL]){
                    console.log("Bravo, tu gagne 1 point")
                    score++
                    numL++
                } else {
                    console.log("raté")
                    numL++
                    }
                }
            break
        default:
            console.log("répondez par \"facile\" ou par \"dificile\"")
            break
    }
}

switch (score){
    case 0:
        console.log("tu es vraiment nul, grosse merde !!!")
        break
    case 1:
        console.log("1/3 c'est a chier mon con")
        break
    case 2:
        console.log("2/3 fait attention les maj compte")
        break
    case 3:
        console.log("3/3 bravo")
        break
}