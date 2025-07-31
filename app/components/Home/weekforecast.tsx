import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
import { typeForeCast } from "@/app/data/weatherforecast";
import Forecast from "@/app/data/weatherforecast";

type ItemProps = {
    item:typeForeCast;
};

const Item = ({ item }: ItemProps) => (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 10 }}>
    <View style={{padding: 15,width: 100, alignItems: "center",  backgroundColor: "#333555", borderRadius: 10}}>
        <Image source={item.image} style={{width: 50, height: 50}} />
        <Text style={{ fontWeight: 500, color: "white"}}>{item.day}</Text>
        <Text style={{alignSelf: "center", color: "white"}}>{item.temperature}</Text>
    </View>
    </View>
)

export default function WeekForecast(){
    return(
        <View style={styles.container}>
            <Text style={{alignSelf: "center"}}>7 Days Weather Forecast</Text>
            <FlatList
            horizontal={true}
            data={Forecast}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.day}
            />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    }
})