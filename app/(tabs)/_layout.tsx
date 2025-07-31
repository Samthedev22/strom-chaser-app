import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo'; 
// import "../styles/global.css";


export default function TabLayout() {
    return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#333666',
        tabBarLabelStyle: { color: 'gray'}
    }}>

    <Tabs.Screen 
    name = "index"
    options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />
        }}
    />
    <Tabs.Screen
    name = "camera"
    options={{
        title: "Camera",
        headerShown: false,
        tabBarIcon: ({color})=> <Entypo name="camera" size={24} color={color}/>
    }}
    />
    <Tabs.Screen 
    name = "data"
    options={{
        title: "Data",
        headerShown: false,
        tabBarIcon: ({color}) => <Entypo name="database" size={24} color={color}/>
    }}
    />
    
    </Tabs>
    )
}