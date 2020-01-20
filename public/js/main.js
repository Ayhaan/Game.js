let joueur = +prompt('Combien de joueur etes vous? (Maximum 4 jour)')
let j1 = document.getElementsByClassName('j1')[0]
let j2 = document.getElementsByClassName('j2')[0]
let j3 = document.getElementsByClassName('j3')[0]
let j4 = document.getElementsByClassName('j4')[0]

console.log(j2)
if (joueur == 2){
    j2.style.display = "block"

    alert('Voici les regles du jeu:\n\n 1.Chaques couleurs corréspond à un theme(5 Themes différents)\n\n2.Le 1er joueur qui répond juste aux 5questions gagne la partie\n\nBonne chance.')

} else if ( joueur == 1){
    alert('Voici les regles du jeu:\n\n 1.Chaques couleurs corréspond à un theme(5 Themes différents)\n\n2.Le 1er joueur qui répond juste aux 5questions gagne la partie\n\nBonne chance.')
} else if (joueur == 3){
    j2.style.display = "block"
    j3.style.display = "block"

    alert('Voici les regles du jeu:\n\n 1.Chaques couleurs corréspond à un theme(5 Themes différents)\n\n2.Le 1er joueur qui répond juste aux 5questions gagne la partie\n\nBonne chance.')

}else if (joueur == 4){
    j2.style.display = "block"
    j3.style.display = "block"
    j4.style.display = "block"

    alert('Voici les regles du jeu:\n\n 1.Chaques couleurs corréspond à un theme(5 Themes différents)\n\n2.Le 1er joueur qui répond juste aux 5questions gagne la partie\n\nBonne chance.')

}
else if ( joueur == 0 || joueur >= 5){
    alert('Refresh et recommence')
    j1.style.display = "none"

}

 


let check1 = document.getElementsByClassName("check1")[0]
let check2 = document.getElementsByClassName("check2")[0]
let check3 = document.getElementsByClassName("check3")[0]
let check4 = document.getElementsByClassName("check4")[0]
let check5 = document.getElementsByClassName("check5")[0]

// JOUEUR 1
function questionA(){
    var q1 = prompt('Quelle la capitale de la Belgique?')
    if (q1 == "Bruxelles"  ||  q1 == "bruxelles") {
        check1.style.color = "white"
        // return true
    } 
    alert(`Joueur 2 c'est à vous`)
}


function questionB(){
    var q2 = prompt('Comment faire disparaitre une div avec le display\n\na: Block\n\nb:none')

    if (q2 == "b"  ||  q2 == "none") {
    check2.style.color = "white"
    // return true
    
}
alert(`joueur 2 c'est à vous`)
}

function questionC(){
    var q3 = prompt(`Google est-il présent chez MolenGeek?\n oui ou non?`)

    if (q3 == "oui") {
    check3.style.color = "white"
    // return true
    
}
alert(`joueur 2 c'est à vous`)
}

function questionD(){
    var q4 = +prompt('5 * 5 = ?')

    if (q4  == 25) {
    check4.style.color = "white"
    // return true
    
}
alert(`joueur 2 c'est à vous`)
}

function questionE(){
    var q5 = prompt(`Combien de guerre mondial y a t'il? `)

    if (q5 == 2 || q5 == "deux") {

    check5.style.color = "white"
    // return true
    
}
alert(`joueur 2 c'est à vous`)
}



// if (questionA() === true && questionB() === true && questionC() === true && questionD() === true && questionE() === true ){
    // alert('Félicitation, joueur 1 a gagné!')
// }

// JOUEUR 2

let check6 = document.getElementsByClassName("check6")[0]
let check7 = document.getElementsByClassName("check7")[0]
let check8 = document.getElementsByClassName("check8")[0]
let check9 = document.getElementsByClassName("check9")[0]
let check10 = document.getElementsByClassName("check10")[0]
function questionF(){
    var q6 = prompt('Quelle la capitale de la France?')
    if (q6 == "Paris"  ||  q6 == "paris") {
        check6.style.color = "white"
        
    } else {
        
    }
    alert(`Joueur 1 c'est à vous`)
}


function questionG(){
    var q7 = prompt(`Comment changer la couleur d'un texte?`)

    if (q7 == "Color"  ||  q7 == "color") {
    check7.style.color = "white"
    
}
alert(`joueur 2 c'est à vous`)
}

function questionH(){
    var q8 = prompt(`Google à donné 200 000 Euro ou Dollars`)

    if (q8 == "euro" || q8 == "Euro") {
    check8.style.color = "white"
    
}
alert(`joueur 2 c'est à vous`)
}

function questionI(){
    var q9 = +prompt('6 * 5 = ?')

    if (q9  == 30) {
    check9.style.color = "white"
    
}
alert(`joueur 2 c'est à vous`)
}

function questionJ(){
    var q10 = prompt(`Qui est le président actuelle en Amerique?`)

    if (q10 == "trump" || q10 == "donald") {

    check10.style.color = "white"
    
}
alert(`joueur 2 c'est à vous`)
}


