
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

    get varPoserBombe(){
        return this.__varPoserBombe;
    }
    set varPoserBombe(newVarPoserBombe){
        this.__varPoserBombe = newVarPoserBombe;
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
        divAffichage.innerHTML = '<div id="barre"><div id="vie" style=\"width:'+this._vie*30+'px; background-color: '+this._colorVie+';\"></div>vie restante:  '+this._vie+'</div>';
    }
    //méthode qui fait perdre le nombre de vie entrées en paramètre
    gagnerVie(vieGagne){
        if (this._vie < 10){
            this._vie += vieGagne;
            //si la vie devient supérieur à 4 la barre redevient verte
            if (this._vie > 4){this._colorVie ='green'}
            //si la vie après addition est supérieur à 10 on lui donne la valeur 10 celle-ci étant la valeur max
            if(this._vie > 10){this._vie = 10;}
        this.afficherVie()
        }    
    }
    //méthode qui fait gagner le nombre de vie entrées en paramètre
    perdreVie(viePerdu){
        this._vie -= viePerdu;
        console.log("vie perdu",viePerdu,"vie de bomberm:", this._vie )
        //lorsque la vie descend à 4 , la barre devient orange
        if (this._vie <= 4){this._colorVie ='orange'}
        //lorsque la vie descend à 2 , la barre devient rouge
        if (this._vie <= 2){this._colorVie ='red'}
        //lorsque la vie descend à 0 ou moins on affiche la div du fantôme avec le h2 game over
        if (this._vie <= 0){
            this._vie = 0 ;
            let fantome = document.getElementById('ghost');
            fantome.style.display = "block";
        }
        this.afficherVie()
    }

    //méthode qui permet de faire apparaitre une bombe
    poserBombe(){     
        console.log("creation de bombe")
        //on onstancie un objet de la classe bombe
        let b = new Bombe((bomberm.positionX + 35),(bomberm.positionY + 44 )); 
        let bombe = document.querySelector('.bombe')
        //on lui donne comme image de fond une bombe pour afficher celle-ci
        bombe.style.backgroundImage ='url("images/bombe.png")'; 
        console.log("bombe crée");
        // plateau.addEventListener("click", bomberm.avancer); 
        console.log("bomberm position avant timeout", bomberm.positionX, bomberm.positionY)
        //on fait exploser la bomber après 2s (méthode exploser de la classe bombe)
        setTimeout((b.exploser(b.positionX, b.positionY)),2000);

        }  

   
}



//fonction de création d'une ID aléatoire entre la valeur min et max pris en argument
    function idAleatoire(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
