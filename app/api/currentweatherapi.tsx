import { useState, useEffect} from "react";

export type typeForCast ={
  wind: string,
  temperature: string,
  precipitation: string,
}

export const CurrentWeatherApi = () => {
  const [ isLoading, setIsLoading] = useState(true);
  const [ showData, setShowData ] = useState<typeForCast[]>([]);
  
  // api calling using fetch and async
const getCurrentApi = async () => {
  // const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=wind_speed_10m,precipitation,temperature_2m,is_day,wind_direction_10m,snowfall,showers,rain&timezone=auto"
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,sunrise,sunset,rain_sum,precipitation_sum,precipitation_hours,snowfall_sum,wind_speed_10m_max,temperature_2m_max,daylight_duration&timezone=auto"

  try{
    const response = await fetch(url);
    const json = await response.json();

      // Creating a request in another request
    const getWeather: typeForCast[] = [
      {
      wind: `${json.current.wind_speed_10m}km/h`,
      temperature: `${json.current.temperature_2m}°C`,
      precipitation: `${json.current.precipitation}mm`,
      }
    ];
    setShowData(getWeather);
    }
    catch (error) {
    console.error(error);
    }finally{
    setIsLoading(false)
    }
  }
  useEffect(() => {
    getCurrentApi();
  }, []);
  return { isLoading, showData};
}