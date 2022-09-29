addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector("#form");
    form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let numero= 3
        for (let i=1;i<=24;i++){
            if (i%2==0){
                numero+=4;
                alert(numero);
            } else{
                numero-=2;
                alert(numero);
            }
        }
    })
})