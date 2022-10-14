addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("https://sylviajaimescomfenalco.000webhostapp.com/PHP/index.php");
    let data = await peticion.statusText();
    console.log(data);
})
