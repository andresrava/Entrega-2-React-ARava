
import React, { useState, useEffect } from "react";

const ReportFetcher = ({ product }) => {
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Extraer la propiedad "city" del objeto recibido
        const city = product.city;
        if (!city) throw new Error("La propiedad 'city' no está definida.");

        // Construir la primera URL
        const firstApiUrl = `https://www.meteosource.com/api/v1/free/find_places?text=${encodeURIComponent(city)}&language=en&key=en2hr09k3gnjcuwabtp6s90zh7skyfsyj1ciier8`;

        const placesList = await fetch(firstApiUrl);
        console.log("Acá");
        if (!placesList.ok) throw new Error("Error en la consulta a la primera API.");
        const firstData = await placesList.json();

        const place_id = firstData[0].place_id;
        // placesList.then(resp => {
          
        //   console.log("El place_id es: " + resp[0].place_id)
        // })
        // .catch(error => console.log("Error al hacer fetch del place_id", error))

        // Extraer un valor (por ejemplo, un ID) de la respuesta de la primera API
        
        if (!place_id) throw new Error("La respuesta de la primera API no contiene un 'place_id'.");

        // Construir la segunda URL
        const secondApiUrl = `https://www.meteosource.com/api/v1/free/point?place_id=${encodeURIComponent(place_id)}&sections=current%2Chourly&language=en&units=auto&key=en2hr09k3gnjcuwabtp6s90zh7skyfsyj1ciier8`;
        const secondResponse = await fetch(secondApiUrl);
        if (!secondResponse.ok) throw new Error("Error en la consulta a la segunda API.");
        const secondReport = await secondResponse.json();

        // Guardar el resultado final
        setReport(secondReport);
      } catch (err) {
        console.log("Este es el error: " + err)
        setError(err.message);
      }
    };

    fetchWeather();
  }, [product]);

  // Renderizar el resultado o manejar errores
  return (
    <div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {report ? (
        <p>{JSON.stringify(report)}</p>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ReportFetcher;
