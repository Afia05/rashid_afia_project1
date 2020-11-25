while True:
    print("temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 70:
        light.set_all (light.rgb(255, 0, 150))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) >= 30:
        light.set_all (light.rgb(0, 150, 150))
    else:
        light.set_all (light.rgb(150, 150, 150))