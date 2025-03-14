function convertirTemperatura() {
    let celsius = document.getElementById('celsius').value;
    //En el script, el .value se utiliza para obtener el valor actual de un campo de entrada (<input>).
    celsius = parseFloat(celsius);
    //convertimos a float para que no haya problemas al hacer la operación

    if (isNaN(celsius)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById('resultado').innerText = 
    //usamos innerText para que no se muestren las etiquetas html
    //usamos toFixed para que solo muestre dos decimales
    //usamos \n para hacer un salto de línea
    //usamos ` para poder concatenar variables con texto

    `Grados Kelvin: ${kelvin.toFixed(2)}\nGrados Fahrenheit: ${fahrenheit.toFixed(2)}`;
}
