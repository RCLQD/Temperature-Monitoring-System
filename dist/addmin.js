let temperature = 0;
let humidity = 0;
let incrementTimer;
let decrementTimer;

    function startIncrement(type, change) {
        incrementTimer = setInterval(function() {
            if (type === 'temperature') {
                temperature += change;
                document.getElementById('temperatureDisplay').textContent = temperature + '°C';
            } else if (type === 'humidity') {
                humidity += change;
                document.getElementById('humidityDisplay').textContent = humidity + '%';
            }
        }, 100);
    }

    function startDecrement(type, change) {
        decrementTimer = setInterval(function() {
            if (type === 'temperature') {
                temperature += change;
                document.getElementById('temperatureDisplay').textContent = temperature + '°C';
            } else if (type === 'humidity') {
                humidity += change;
                document.getElementById('humidityDisplay').textContent = humidity + '%';
            }
        }, 100);
    }

    function changeTemperature(change) {
        temperature += change;
        document.getElementById('temperatureDisplay').textContent = temperature + '°C';
    }

    function changeHumidity(change) {
        humidity += change;
        document.getElementById('humidityDisplay').textContent = humidity + '%';
    }

    function clearTimer() {
        clearInterval(incrementTimer);
        clearInterval(decrementTimer);
    }