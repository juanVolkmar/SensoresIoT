import React from "react";
import "./SensorsView.css";
import { FaThermometerHalf, FaTint, FaUsers, FaList, FaChartBar } from "react-icons/fa";

const SensorsView = () => {
    const totalRecords = 4521;
    const totalSensors = 12;
    const totalUsers = 5;
    const avgTemp = 23.5;
    const avgHum = 68.2;
    const lastRecord = {
        sensorId: "Sensor_03",
        temp: 24.1,
        hum: 67.3,
        time: "2025-05-27 16:45"
    };

    const sensors = [
        { id: "Sensor_01", lastTemp: 23.0, lastHum: 70.1 },
        { id: "Sensor_02", lastTemp: 22.8, lastHum: 68.9 },
        { id: "Sensor_03", lastTemp: 24.1, lastHum: 67.3 },
        { id: "Sensor_04", lastTemp: 25.2, lastHum: 65.1 },
        { id: "Sensor_05", lastTemp: 24.7, lastHum: 66.5 },
    ];

    return (
        <div className="sensor-view">
            <h2 className="sv-title">Panel de Sensores</h2>

            <div className="sv-metrics">
                <div className="sv-card"><FaChartBar /><p>{totalRecords}</p><span>Registros</span></div>
                <div className="sv-card"><FaList /><p>{totalSensors}</p><span>Sensores</span></div>
                <div className="sv-card"><FaUsers /><p>{totalUsers}</p><span>Usuarios</span></div>
                <div className="sv-card"><FaThermometerHalf /><p>{avgTemp}°C</p><span>Temp. Prom.</span></div>
                <div className="sv-card"><FaTint /><p>{avgHum}%</p><span>Hum. Prom.</span></div>
            </div>

            <div className="sv-last">
                <h3>Último Registro</h3>
                <p><strong>Sensor:</strong> {lastRecord.sensorId}</p>
                <p><strong>Temp:</strong> {lastRecord.temp}°C &nbsp; | &nbsp; <strong>Hum:</strong> {lastRecord.hum}%</p>
                <p><strong>Fecha:</strong> {lastRecord.time}</p>
            </div>

            <div className="sv-carousel">
                <h3>Lista de Sensores</h3>
                <div className="carousel-container">
                    {sensors.map((sensor, index) => (
                        <div className="carousel-item" key={index}>
                            <h4>{sensor.id}</h4>
                            <p>🌡 Temp: {sensor.lastTemp}°C</p>
                            <p>💧 Hum: {sensor.lastHum}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SensorsView;
