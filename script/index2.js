const canvas = document.querySelector('canvas');
console.log(canvas)
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

class Boundary{
    static width =50;
    static height = 50;
    constructor({position}){
        this.position = position
        this.width = 50
        this.height = 50
    }
    draw(){
        var brique = new Image();
        brique.src = '../images/brique.png';
        c.drawImage(brique, this.position)
    }
}
const map = [
    ['-',' ',' ',' ','-','-'],
    ['-','-','-','-','-','-'],
    ['-',' ',' ',' ','-','-'],
    ['-','-','-','-','-','-']
]
const boundaries = []
map.forEach((row, i)=>{
    row.forEach((symbole, j)=>{
        switch(symbole){
            case '-':
                boundaries.push(new Boundary({position:{x:Boundary.width*j, y: Boundary.height*i}}))   
            
            break
        }
    })
     
})

boundaries.forEach((boundary) =>{
    boundary.draw()
})