function convertirTemperatura() {
    let celsius = document.getElementById('celsius').value;
    celsius = parseFloat(celsius);

    if (isNaN(celsius)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById('resultado').innerText = 
        `Grados Kelvin: ${kelvin.toFixed(2)}\nGrados Fahrenheit: ${fahrenheit.toFixed(2)}`;
}