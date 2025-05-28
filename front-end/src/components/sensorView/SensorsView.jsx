import React, { useState } from "react";
import "./SensorsView.css";
import { FaThermometerHalf, FaTint, FaUsers, FaList, FaChartBar, FaPlus, FaTrash } from "react-icons/fa";

const SensorsView = () => {
    const [sensors, setSensors] = useState([
        { id: "Sensor_01", lastTemp: 23.0, lastHum: 70.1, location: "Medellín", status: "Activo" },
        { id: "Sensor_02", lastTemp: 22.8, lastHum: 68.9, location: "Envigado", status: "Inactivo" },
        { id: "Sensor_03", lastTemp: 24.1, lastHum: 67.3, location: "Bello", status: "Activo" },
        { id: "Sensor_04", lastTemp: 25.2, lastHum: 65.1, location: "Sabaneta", status: "Mantenimiento" },
        { id: "Sensor_05", lastTemp: 24.7, lastHum: 66.5, location: "Itagüí", status: "Activo" },
    ]);

    const totalRecords = 4521;
    const totalSensors = sensors.length;
    const totalUsers = 5;
    const avgTemp = (sensors.reduce((acc, s) => acc + s.lastTemp, 0) / totalSensors).toFixed(1);
    const avgHum = (sensors.reduce((acc, s) => acc + s.lastHum, 0) / totalSensors).toFixed(1);
    const lastRecord = sensors[sensors.length - 1];

    const handleAddSensor = () => {
        const newSensor = {
            id: `Sensor_${sensors.length + 1}`,
            lastTemp: 24 + Math.random(),
            lastHum: 65 + Math.random() * 5,
            location: "Nueva Ubicación",
            status: "Activo"
        };
        setSensors([...sensors, newSensor]);
    };

    const handleDeleteSensor = (id) => {
        const confirm = window.confirm(`¿Eliminar ${id}?`);
        if (confirm) {
            setSensors(sensors.filter(sensor => sensor.id !== id));
        }
    };

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

            <div className="sv-controls">
                <button onClick={handleAddSensor} className="sv-btn add"><FaPlus /> Crear Sensor</button>
            </div>

            <div className="sv-last">
                <h3>Último Registro</h3>
                <p><strong>Sensor:</strong> {lastRecord.id}</p>
                <p><strong>Temp:</strong> {lastRecord.lastTemp.toFixed(1)}°C &nbsp; | &nbsp; <strong>Hum:</strong> {lastRecord.lastHum.toFixed(1)}%</p>
                <p><strong>Ubicación:</strong> {lastRecord.location} &nbsp; | &nbsp; <strong>Estado:</strong> {lastRecord.status}</p>
            </div>

            <div className="sv-carousel">
                <h3>Lista de Sensores</h3>
                <div className="carousel-container">
                    {sensors.map((sensor, index) => (
                        <div className="carousel-item" key={index}>
                            <h4>{sensor.id}</h4>
                            <p>🌡 Temp: {sensor.lastTemp.toFixed(1)}°C</p>
                            <p>💧 Hum: {sensor.lastHum.toFixed(1)}%</p>
                            <p>📍 Ubicación: {sensor.location}</p>
                            <p>⚙️ Estado: {sensor.status}</p>
                            <p>💬 Información: Este sensor es de humedad y temperatura </p>
                            <button className="delete-btn" onClick={() => handleDeleteSensor(sensor.id)}>
                                <FaTrash /> Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SensorsView;
