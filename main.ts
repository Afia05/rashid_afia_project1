while (true) {
    console.log("temperature: " + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
        light.setAll(light.rgb(255, 0, 150))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) >= 30) {
        light.setAll(light.rgb(0, 150, 150))
    } else {
        light.setAll(light.rgb(150, 150, 150))
    }
    
}
