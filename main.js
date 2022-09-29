addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let serie = document.querySelector("#serie").value;
        let serie1=0,serie2=0;
        for (let i = 1; i <= serie; i++) {
            serie1 += Math.pow(i, 2);
            serie2 += Math.pow(i, i);
        }
        alert(`El resultado de la serie 1 es ${serie1} `);
        alert(`El resultado de la serie 2 es ${serie2} `);
    })
})