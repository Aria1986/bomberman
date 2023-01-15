// for(var i =0;i<25;i++)
const container = document.querySelector("#container");


container.addEventListener("click", (event) => {    
    let x = event.clientX;
    let y = event.clientY;
    let u = event.pageY;
    console.log("Position X : " + x + " & position Y : " + y + "positonspage"+ u );
    let ligne = Math.floor((u-82)/50)+1;
    console.log("ligne numero:" + ligne);
    let colonne = Math.floor((x-10)/56) + 1;
    console.log("colonne numero:" + colonne);
})
