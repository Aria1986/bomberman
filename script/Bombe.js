class Bombe {
    _positionX;
    _positionY;
    _id;
    constructor(positionX, positionY){
        this._positionX = positionX;
        this._positionY = positionY;
        this._id = "bombe "+ idAleatoire(0, 1000000000000000000);
        //on recupère la div plateau puis on insère une nouvelle div de classe bombe dedans
        let divPlateau = document.getElementById('plateau');
        divPlateau.innerHTML += '<div id="this._id" style=\"top:'+this._positionY+'px; left:'+this._positionX+'px;\" class="bombe"></div>';
        // console.log("bombe position",this._positionX,this._positionY );
        // console.log(this._id);
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


    exploser(positionX, positionY){
        console.log("explosion bombe position", this.positionX);
        //on recupère la/les div de class bombe et on lui attribu une nouvelle image d'explosion
        let bombe = document.querySelector('.bombe')
        bombe.style.backgroundImage +=" URL('images/explosion.png')";
        //si le personnage est à proximité d'une case de grille celui-ci perd une vie à l'explosion de la bombe
        if ((bomberm._positionX < (positionX + 25)) && ((positionX-95) < bomberm.positionX) && ((positionY-94) < bomberm.positionY) && (bomberm.positionY < (positionY + 16))){
            bomberm.perdreVie(1);
            console.log("perdu position X bombe", positionX, positionY);
            console.log("perdu positionX bomberman",bomberm._positionX)
        }
        else{console.log(" position X bombe", this.positionX);
        console.log("super positionX bomberman",bomberm.positionX)
        }
        //on supprime la bombe explosée
        setTimeout(this.nettoyage,2500); 
  
    }
    //méthode qui supprime l'enfant de classe bombe de divplateau
    nettoyage(){
        let bombe = document.querySelector('.bombe')
        let divPlateau = document.getElementById('plateau');
        divPlateau.removeChild(bombe);
    }
}

