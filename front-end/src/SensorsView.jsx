import React, { useState } from "react";
import "./SensorsView.css";
import {
  FaThermometerHalf,
  FaTint,
  FaUsers,
  FaList,
  FaChartBar,
  FaPlus,
  FaTrash,
  FaTimes
} from "react-icons/fa";

const SensorsView = () => {
  const [sensors, setSensors] = useState([
    { id: "Sensor_01", type: "temperatura", temperatura: { value: 23.0, type: "°C" } },
    { id: "Sensor_02", type: "humedad", humedad: { value: 68.9, type: "%" } },
    { id: "Sensor_03", type: "temperatura", temperatura: { value: 24.1, type: "°C" } },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newSensor, setNewSensor] = useState({
    id: "",
    type: "",
    value: "",
    valueType: ""
  });

  const typeOptions = {
    temperatura: ["°C", "°F", "K"],
    humedad: ["%", "g/m³"],
    radiacion: ["W/m²"],
    presion: ["hPa", "atm"]
  };

  const totalRecords = 4521;
  const totalSensors = sensors.length;
  const totalUsers = 5;
  const avgTemp = (
    sensors
      .filter(s => s.temperatura)
      .reduce((sum, s) => sum + s.temperatura.value, 0) /
    (sensors.filter(s => s.temperatura).length || 1)
  ).toFixed(1);

  const avgHum = (
    sensors
      .filter(s => s.humedad)
      .reduce((sum, s) => sum + s.humedad.value, 0) /
    (sensors.filter(s => s.humedad).length || 1)
  ).toFixed(1);

  const lastRecord = sensors[sensors.length - 1];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSensor(prev => ({
      ...prev,
      [name]: name === "value" ? parseFloat(value) : value
    }));
  };

  const handleSaveSensor = () => {
    const { id, type, value, valueType } = newSensor;

    if (!id || !type || isNaN(value) || !valueType) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    const sensorObject = {
      id,
      type,
      [type]: {
        value,
        type: valueType
      }
    };

    setSensors([...sensors, sensorObject]);
    setNewSensor({ id: "", type: "", value: "", valueType: "" });
    setShowModal(false);
  };

  const handleDeleteSensor = (id) => {
    const updated = sensors.filter(sensor => sensor.id !== id);
    setSensors(updated);
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

      <div className="sv-last">
        <h3>Último Registro</h3>
        <p><strong>ID:</strong> {lastRecord?.id}</p>
        <p><strong>Tipo:</strong> {lastRecord?.type}</p>
        <p>
          <strong>Valor:</strong>{" "}
          {lastRecord?.[lastRecord.type]?.value} {lastRecord?.[lastRecord.type]?.type}
        </p>
      </div>

      <div className="sv-actions">
        <button className="btn-add" onClick={() => setShowModal(true)}>
          <FaPlus /> Crear Sensor
        </button>
      </div>

      <div className="sv-carousel">
        <h3>Lista de Sensores</h3>
        <div className="carousel-container">
          {sensors.map((sensor, index) => (
            <div className="carousel-item" key={index}>
              <h4>{sensor.id}</h4>
              <p><strong>Tipo:</strong> {sensor.type}</p>
              <p><strong>Valor:</strong> {sensor[sensor.type].value} {sensor[sensor.type].type}</p>
              <button className="btn-delete" onClick={() => handleDeleteSensor(sensor.id)}><FaTrash /></button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowModal(false)}><FaTimes /></button>
            <h3>Nuevo Sensor</h3>
            <input type="text" name="id" placeholder="ID del sensor" value={newSensor.id} onChange={handleInputChange} />
            <select name="type" value={newSensor.type} onChange={handleInputChange}>
              <option value="">Selecciona tipo</option>
              <option value="temperatura">Temperatura</option>
              <option value="humedad">Humedad</option>
              <option value="radiacion">Radiación</option>
              <option value="presion">Presión</option>
            </select>
            <input type="number" name="value" placeholder="Valor" value={newSensor.value} onChange={handleInputChange} />
            <select name="valueType" value={newSensor.valueType} onChange={handleInputChange}>
              <option value="">Selecciona unidad</option>
              {(typeOptions[newSensor.type] || []).map((unit, i) => (
                <option key={i} value={unit}>{unit}</option>
              ))}
            </select>
            <button className="save-btn" onClick={handleSaveSensor}>Guardar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SensorsView;
