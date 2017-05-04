function sakrij(){
    var sakrij=document.getElementById("divcina");
    sakrij.style.visibility="hidden";
}
function prikazi(){
    var prikazi=document.getElementById("divcina");
    prikazi.style.visibility="visible";
}
function stavi(){
    var tag=document.createElement("p");
    var uzmi=document.getElementById("tekst").value;
    var stavi=document.createTextNode(uzmi);
    tag.appendChild(stavi);
    var element=document.getElementById("divcina");
    element.appendChild(tag);
}
function promjenaboje(){
    var boja=document.getElementById("bojaj").value;
    document.getElementById("aa").style.backgroundColor = boja;
}
function velicina(){
    var w=window.innerWidth;
    var h=window.innerHeight;
    document.getElementById("sirina").innerHTML=w;
    document.getElementById("visina").innerHTML=h;
    window.open("http://www.staggeringbeauty.com",height=130,width=120);
}

