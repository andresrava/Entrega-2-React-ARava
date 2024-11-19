import { useState } from "react";
import axios from "axios";


function WeatherReport({product}) {
    const [place_id, setPlace_id] = useState("Esto");
    const [weatherInfo, setWeatherInfo] = useState("");
    const city = product.city;
    console.log("City es: "  + city);

    const fetchPlace_id = async ({product}) => {
        try {
            console.log("Entré");
            const url = "https://www.meteosource.com/api/v1/free/find_places?text=" + product.city + "&language=en&key=en2hr09k3gnjcuwabtp6s90zh7skyfsyj1ciier8";
            const response = await axios.get(url);
            console.log("El place_id es: " + response[0].place_id);
            
        }
        catch(error) {
            console.log("Se complicó")
        }
     setPlace_id(response[0].place_id);   
}
return (
    <div>
       {place_id}
    </div>
)

}
export default WeatherReport;
