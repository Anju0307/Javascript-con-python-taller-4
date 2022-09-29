addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let pago=10;
        for (let i=1;i<=20;i++){
            alert(`El mes ${i} debe pagar ${pago}`);
            pago*=2;
        }
    })
})