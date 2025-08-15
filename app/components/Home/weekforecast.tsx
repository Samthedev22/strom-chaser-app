' use client';
import { useState } from "react";
import { View, Text, StyleSheet} from 'react-native';
import DailyWeatherApi from "@/app/api/dailyweatherapi";

export default function WeekForecast(){
    const { dailyData, isLoading } = DailyWeatherApi();
    const item = dailyData[0]

    return(
        <View>
            {isLoading ? (
            <Text>Loading Data...</Text>
            ): (

            <View>
                <Text>{item.daily}</Text>
            </View>
            )} 
        </View>
    )
}


