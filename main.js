addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let numero= document.querySelector("#numero").value;
        for (let i=1;i<=10;i++){
            alert(`El resultado de multiplicar ${numero} por ${i} es de ${numero*i}`);
        }
    })
})