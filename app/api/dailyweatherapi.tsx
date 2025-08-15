import { useState, useEffect } from 'react';

type typeDaily = {
    daily: string,
    wind: string
}

export default function DailyWeatherApi(){
    const [dailyData, setDailyData] = useState<typeDaily[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Handling API response async/await
    const DailyApiCall = async () => {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,sunrise,sunset,rain_sum,precipitation_sum,precipitation_hours,snowfall_sum,wind_speed_10m_max,temperature_2m_max,daylight_duration&timezone=auto"

        try {
            const response = await fetch(url);
            const json = await response.json();

            // Display API call
            const getDailyWeather: typeDaily[] =  [
                {
                    wind: `${json.daily.wind_speed_10m_max}kmh`,
                    daily: `${json.daily.temperature_2m_max}km/h`
                }
            ];

            setDailyData(getDailyWeather);
        }
        catch(error){
            console.error(error);
        } 
        finally {
            setIsLoading(false);
        }
    } 
    
    useEffect(() => {
        DailyApiCall();
    }, []);
    return{
        isLoading, dailyData
    };
}
