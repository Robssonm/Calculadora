function somar(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res")
    let soma = parseInt(num1) + parseInt(num2)
    res.innerHTML="Resultado: "+soma
}
function subtrair(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res")
    let subtrair = parseInt(num1) - parseInt(num2)
    res.innerHTML="Resultado: "+subtrair
}
function multiplicar(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res")
    let multiplicar = parseInt(num1) * parseInt(num2)
    res.innerHTML="Resultado: "+multiplicar
}
function dividir(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res")
    let dividir = parseInt(num1) / parseInt(num2)
    res.innerHTML="Resultado: "+dividir
}