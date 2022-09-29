addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let trabajadores = document.querySelector("#trabajadores").value;
        for (let i=1; i<=trabajadores;i++){
            let tiempo = parseInt(prompt("Ingrese el tiempo que lleva en la empresa"));
            if (tiempo>0 && tiempo<=5){
                alert("Se le aumenta 100 pesos");
            } else if (tiempo >5 && tiempo<=10 ){
                alert("Se aumentara 250 pesos");
            } else if (tiempo >10 && tiempo<=20 ){
                alert("Se aumentara 400 pesos");
            } else {
                alert("Se aumentara 550 pesos");
            }
        }
    })
})