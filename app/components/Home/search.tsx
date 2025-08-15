import React from "react"; 
import { useState } from "react";
import { View, TextInput, TouchableOpacity} from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function Search(){
   const [showSearch, setshowSearch]  = useState(false);

    return(
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between",  backgroundColor: showSearch? "lightgray": "transparent", borderRadius: 20, margin: 10}}>
            {/* Show Search field */}
            <TouchableOpacity 
            onPress={() => setshowSearch(!showSearch)}
            style={{padding: 10, backgroundColor: "lightgray", borderRadius: 100}}
            >
                <Feather name="search" size={26} color="#333444"  />
            </TouchableOpacity>
            { 
            showSearch && (
                <TextInput 
                inputMode="text"
                placeholder="search city..."
                style={{flex: 1, width: "auto", padding: 15 }}
                onSubmitEditing={() => setshowSearch(false)}
                underlineColorAndroid="transparent"
                />
                )
            }
        </View>
    )
}