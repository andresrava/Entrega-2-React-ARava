
import React, { useState, useEffect } from "react";

const RecordFetcher = ({ product, date}) => {
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Extrae la propiedad "city" del objeto recibido
        const city = product.city;
        if (!city) throw new Error("La propiedad 'city' no está definida.");

        // Construye la primera URL
        const firstApiUrl = `https://www.meteosource.com/api/v1/free/find_places?text=${encodeURIComponent(city)}&language=en&key=en2hr09k3gnjcuwabtp6s90zh7skyfsyj1ciier8`;

        const placesList = await fetch(firstApiUrl);
        if (!placesList.ok) throw new Error("Error en la consulta a la primera API.");
        const firstData = await placesList.json();

        const place_id = firstData[0].place_id;
        
        if (!place_id) throw new Error("La respuesta de la primera API no contiene un 'place_id'.");

        // Construye la segunda URL
        const secondApiUrl = `https://www.meteosource.com/api/v1/free/point?place_id=${encodeURIComponent(place_id)}&date=2021-03-15&sections=current%2Chourly&language=es&units=auto&key=en2hr09k3gnjcuwabtp6s90zh7skyfsyj1ciier8`;
        const secondResponse = await fetch(secondApiUrl);
        if (!secondResponse.ok) throw new Error("Error en la consulta a la segunda API.");
        const secondReport = await secondResponse.json();

        // Guarda el resultado final
        setReport(secondReport.data.summary);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [product]);

  // Renderizar el resultado o manejar errores
  return (
    <div>
      {report ? (
        <p>El clima en esa fecha en la temporada pasada en <b>{product.city}</b> fue: {JSON.stringify(report)}</p>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ReportFetcher;