let nomeusuário ="";
let elemento = document.querySelector("#nome-usuário");

while(nomeusuário==""){
    nomeusuário=prompt("Qual o seu nome?")

}
if(nomeusuário==null){
    elemento.textContent= "seja muito bem vindo.";
}else{
    elemento.textContent = nomeusuário;
}
