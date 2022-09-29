addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        const iva=0.16,descuento=0.15,precio = 100000;
        let total=0;
        let cantidad = document.querySelector("#cantitad").value;
        for (let i=1; i<=cantidad;i++){
            total+=precio;
        }
        let totalPagar= total+(total*iva);
        if (totalPagar>500000){
            let totalDesc = totalPagar-(totalPagar*descuento);
            alert(`El total a pagar es de ${totalDesc}`);
        } else {
            alert(`El total a pagar es de ${totalPagar} `);
        }
    })
})