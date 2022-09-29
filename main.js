addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let numeros = document.querySelector("#numeros").value;
        let numero = parseInt(prompt(`Ingrese el numero 1`));
        let suma=numero,resta=numero,multi=numero,divi=numero;
        for (let i=1; i<numeros;i++){
            let numero2 = parseInt(prompt(`Ingrese el numero ${i+1}`));
            suma += numero2;
            resta -= numero2;
            multi *= numero2;
            divi /= numero2;
        }
        alert(`El resultado de la suma es de ${suma}`);
        alert(`El resultado de la resta es de ${resta}`);
        alert(`El resultado de la multiplicacion es de ${multi}`);
        alert(`El resultado de la division es de ${divi}`);
    })
})