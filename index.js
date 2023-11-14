
const d = document,
    day = d.getElementById("day"),
    month = d.getElementById("month"),
    year = d.getElementById("year"),
    getDay = d.getElementById("get-day")
    getMonth = d.getElementById("get-month"),
    getYear = d.getElementById("get-year"),
    errordia = d.getElementById("errorDay"),
    errormes = d.getElementById("errorMonth"),
    erroraño = d.getElementById("errorYear"),
    labelday = d.getElementById("labelDay"),
    labelmonth = d.getElementById("labelMonth"),
    labelyear = d.getElementById("labelyear");

d.addEventListener("click", (e) => {
    if (e.target.matches(".button *")) {
        
        let fechaActual = new Date();
        
        /******************VALIDACION PARA DIAS*****************************************+ */
        let expRegular = /^(0?[0-9]|[1-2][0-9]|3[0-1])$/;
        if (expRegular.test(day.value)){
            let dias = fechaActual.getDate();
            let calcularDias = Math.abs( day.value - dias);
            getDay.textContent=calcularDias;
            
            errordia.classList.remove("error");
            labelday.classList.remove("color-red");
            errordia.innerHTML=""
            day.style.borderColor=""; 
        }else{
            errordia.innerHTML ="This fiel is required";
            errordia.classList.add("error");
            labelday.classList.add("color-red");
            day.style.borderColor="red";
        }
        
        /***************VALIDACION PARA MESES******************************* */
        let expRegularMeses = /^(0?[0-9]|1[0-2])$/;
        if (expRegularMeses.test(month.value)){
            let meses = fechaActual.getMonth()+1;
            let calcularMeses = Math.abs(month.value - meses);  
            getMonth.textContent=calcularMeses;
            
            errormes.classList.remove("error");
            errormes.innerHTML=""
            labelmonth.classList.remove("color-red");
            month.style.borderColor="";
            
        }else{
            errormes.innerHTML ="This fiel is required";
            errormes.classList.add("error");
            labelmonth.classList.add("color-red");
            month.style.borderColor="red";
            
        }
        
        /*******************VALIDACION PARA AÑOS************************************** */
        let expRegularAños = /^[0-9]+$/;
        if (expRegular && year.value.length === 4) {
            let años = fechaActual.getFullYear();        
            let calcularAños = Math.abs(year.value - años);
            getYear.textContent=calcularAños;
            
            erroraño.classList.remove("error");
            erroraño.innerHTML="";
            labelyear.classList.remove("color-red");
            year.style.borderColor="";
            console.log("si");
        }else{
            erroraño.classList.add("error");
            erroraño.innerHTML="This fiel is required";
            labelyear.classList.add("color-red")
            year.style.borderColor="red";
            console.log("no");

        }

    }
})

