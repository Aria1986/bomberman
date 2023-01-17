//instanciation de l'objet bomberm à la position x= 10 et y= 210
let bomberm = new Bomberman(-10, 210);
//création d 'une variable qui récupère l'ID de la DIV plateau
let plateau = document.getElementById('plateau');
//au click de a souri bomberm se déplacera à l'emplacement de la souri dans le plateau de jeu (div plateau)
plateau.addEventListener("click", bomberm.avancer); 
console.log(bomberm.positionX); 
//affichage de la vie restante de bomberm
bomberm.afficherVie();
//à l'appuie de la touche entrée une bombe apparaitra grace à la méthode poser bombe
window.addEventListener('keypress',(event) =>{if (event.code == "Enter"){bomberm.poserBombe() }
                                                else{console.log(event.Key);}
                                            }
                                            );
// plateau.addEventListener("click", bomberm.avancer);
console.log("valeur poser bombe",this.varPoserBombe);

// if  (bomberm.varPoserBombe == true){
//     console.log("creation de bombe")
//     let b = new Bombe((bomberm.positionX + 35),(bomberm.positionY + 44 ));   
//     setTimeout(bomberm.afficherPosition(),2000);
//     setTimeout(b.exploser(b.positionX, b.positionY),3000);     
//  }
// else{console.log("bombe pas posée")}





// const container = document.querySelector("#container");

// //obtenir position de la souri au click
// container.addEventListener("click", (event) => {    
//     let x = event.clientX;
//     let y = event.clientY;
//     let u = event.pageY;
//     console.log("Position X : " + x + " & position Y : " + y + "positonspage"+ u );
//     let ligne = Math.floor((u-82)/50)+1;
//     console.log("ligne numero:" + ligne);
//     let colonne = Math.floor((x-10)/56) + 1;
//     console.log("colonne numero:" + colonne);
// })
