import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherApp() {
    const [city, setCity] = useState("Madrid"); 
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_KEY = "de6851491cc5ca2d0eed7718a3c8aa1c"; 
    const fetchWeather = async () => {
        setLoading(true);  
        setError("");  
        setWeather(null);  

        if (!city.trim()) {
            setError("Por favor, ingresa una ciudad.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeather(response.data);
        } catch (err) {
            setError("Ciudad no encontrada. Inténtalo de nuevo.");
        }

        setLoading(false);  
    };

    useEffect(() => {
        fetchWeather(); 
        const interval = setInterval(fetchWeather, 300000); 

        return () => clearInterval(interval); 
    }, [city]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Consulta el Clima</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ingresa una ciudad..."
            />
            <button onClick={fetchWeather}>Actualizar Clima</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {loading && <p>Cargando datos del clima...</p>}

            {weather && !loading && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>🌡️ Temperatura: {weather.main.temp}°C</p>
                    <p>💧 Humedad: {weather.main.humidity}%</p>
                    <p>🌤️ Clima: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
