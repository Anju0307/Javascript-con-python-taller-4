addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let estudiantes = document.querySelector("#estudiantes").value;
        let notaFinal=0,menor=10,mayor=0;
        for (let i=1; estudiantes>=i ;i++){
            let calificacion = parseInt(prompt("Ingrese la calificacion de la cafeteria"));
            notaFinal= notaFinal+calificacion;
            if (calificacion>mayor){
                mayor= calificacion;
            } else if (calificacion<menor) {
                menor = calificacion;
            } else{
                menor= calificacion;
            }
        }
        let pro = notaFinal/estudiantes;
        alert(`La calificacion mayor es de ${mayor}`);
        alert(`La calificacion menor es de ${menor}`);
        alert(`El promedio es de ${pro}`);
    })
})