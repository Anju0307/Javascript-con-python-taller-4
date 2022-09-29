addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let ventas= document.querySelector("#ventas").value;
        let menores=0,medianas=0,mayores=0;
        for (let i=1 ; i<=ventas ; i++){
            let precio = parseInt(prompt("Digite el precio de la venta"));
            if (precio<500){
                menores++;
            } else if (precio>500 && precio < 1000){
                medianas++;
            } else {
                mayores++;
            }
        }
        alert(`La cantidad de ventas menores a 500 son ${menores} `);
        alert(`La cantidad de ventas menores a 1000 pero mayores a 500 son ${medianas} `);
        alert(`La cantidad de ventas mayores a 1000 son ${mayores} `);
    })
})