let mot=["B","O","N","J","O","U","R"];
let devine=["_","_","_","_","_","_","_"] // si la lettre correspond au mot on l'enregistre dans ce tableau a sa position

let lettre=''; // doit servire a comparer la lettre entré 

let pos=0; // servira a choisir la position de la lettre choisie
let erreur=0;
let faute=[];

document.getElementById("reponse").innerText='Devinez le mot :'+devine

document.getElementById("bouton").addEventListener("click",()=>{
    guessLetter();
})
// commencer le i a la val position ?
function guessLetter(){

    for(let i=0;i<=devine.length;i++){

        if(devine[i]=="_"){

            lettre=window.prompt('Introduit une lettre en MAJ ;)');
            pos=window.prompt('quelle position la lettre ? 1-7')
            pos=pos-1;
     
            if(lettre==mot[pos] && devine[pos]!=lettre){
                devine[pos]=lettre
                i--;
                console.log(devine)
            }else if(lettre!=mot[pos]){
                i--;
                erreur++;
                faute.push(lettre);
                console.log('la lettre:  '+lettre+"  ne corresponds pas :/ nb d'erreur:  "+ erreur+"  vous avez introduit:  "+faute)
            }
    
        }
    }// EN DEHORS DU FOR

        alert('BIEN JOUER !! vous avez trouver le mot: '+devine)
        document.getElementById("reponse").innerText='Le mot est :'+devine
}



