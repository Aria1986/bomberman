
class Bomberman{
    _vie = 10;
    _positionX;
    _positionY;
    _id;
    _colorVie ='green';
    constructor(positionX, positionY){
    //creation d'un ID aleatoire
        this._id = idAleatoire(0, 1000000000000000000);
    //récupération des positions à l'instanciation de l'objet'
        this._positionX = positionX;
        this._positionY = positionY;
    //définition d'une variable qui récupère l'ID de la div plateau (de jeu)
        let divPlateau = document.getElementById('plateau');
    //création d'une div dans le html avec les propriétés id et positions de l'
      divPlateau.innerHTML = '<div id="'+this._id+'"class="bomberman" style="left:'+this._positionX+'px; top:'+this._positionY +'px;"></div>';

    }
    get vie(){
        return this._vie;
    }
    set vie(nouvelle_vie){
        this._vie = nouvelle_vie;
    }
    get positionX(){
        return this._positionX;
    }
    set positionX(nouvelle_positionX){
        this._positionX = nouvelle_positionX;
    }
    get positionY(){
        return this._positionY;
    }
    set positionY(nouvelle_positionY){
        this._positionY = nouvelle_positionY;
    }
    get id(){
        return this._id;
    }
    set id(nouveau_id){
        this._id = nouveau_id;
    }
    //méthode pour faire avancer le personnage à la position de la souri
    avancer(event){
        let x = (event.pageX -100);
        let y = (event.pageY -200);
        bomberm._positionX = x;
        bomberm._positionY = y;   
        let bombermAbouger = document.getElementById(bomberm.id);
        bombermAbouger.style.left = x +"px";
        bombermAbouger.style.top = y +"px"; 
 
       console.log("position bomberman", bomberm.positionX , bomberm.positionY);
        
    }
    //méthode pour afficher une barre de vie et le nombre de vie restant 
    afficherVie(){
        let divAffichage = document.getElementById('affichage');
        divAffichage.innerHTML = '<div class="barre"><div class="vie" style=\"width:'+this._vie*30+'px; background-color: '+this._colorVie+';\"></div>vie restante:  '+this._vie+'</div>';
    }
    //méthode qui fait perdre le nombre de vie entrées en paramètre
    gagnerVie(vieGagne){
        if (this._vie < 100){
            this._vie += vieGagne;
            if (this._vie > 4){this._colorVie ='green'}
        }    
    }
    //méthode qui fait gagner le nombre de vie entrées en paramètre
    perdreVie(viePerdu){
        this._vie -= viePerdu;
        if (this._vie <= 4){this._colorVie ='red'}
        if (this._vie <= 0){divAffichage.innerHTML = "Tu es mort";}
    }
    //méthode qui permet de faire apparaitre une bombe
    poserBombe(){
        console.log("poser bombe activée");
        console.log("position bomba avant bombe", this.positionX, this.positionY)
         
             let b = new Bombe((this.positionX + 35),(this.positionY + 44 ));     
             setTimeout(b.exploser,2000);     
        }  
   
}



//fonction de création d'une ID aléatoire entre la valeur min et max pris en argument
    function idAleatoire(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  class Bombe {
    _positionX;
    _positionY;

    constructor(positionX, positionY){
        this._positionX = positionX;
        this._positionY = positionY;
        let divPlateau = document.getElementById('plateau');
        divPlateau.innerHTML += '<div style=\"top:'+this._positionY+'px; left:'+this._positionX+'px;\" class="bombe"></div>';
        console.log("bombe position",this._positionX,this._positionY )
        let bombe;
    }
    get positionX(){
        return this._positionX;
    }
    set positionX(nouvellePositionX){
         this._positionX = nouvellePositionX;
    } 
    get positionY(){
        return this._positionY;
    }
    set positionY(nouvellePositionY){
        this._positionY = nouvellePositionY;
    } 
    exploser(){
        console.log("explosion");
        let bombe = document.querySelector('.bombe')
        bombe.style.backgroundImage +=" URL('images/explosion.png')";
                //si le personnage est à proximité d'une case de grille celui-ci perd une vie à l'esplosion de la bombe
        if ((bomberm._positionX < (this.positionX + 25)) && ((this.positionX-95) < bomberm.positionX) && ((this.positionY-94) < bomberm.positionY) && (bomberm.positionY < (this.positionY + 16))){
            bomberm.perdreVie(1);
            console.log("perdu position X bombe", this._positionX);
            console.log("perdu positionX bomberman",bomberm._positionX)
        }
        else{console.log(" position X bombe", this._positionX);
        console.log(" positionX bomberman",bomberm._positionX)
        }
        setTimeout(this.nettoyage,1000); 
  
    }
    nettoyage(){
      let bombe = document.querySelector('.bombe')
        bombe.parentNoderemoveChild(bombe);
    }
}



// function setup(){
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
    window.addEventListener('keypress',(event) =>{if (event.code == "Enter"){console.log("touche entrée appuyée"); console.log(bomberm);console.log(bomberm.positionX);bomberm.poserBombe() }
                                                else{console.log(event.Key);}
                                            }
                                            );
                                            plateau.addEventListener("click", bomberm.avancer); 
    
// }