import Sobre from "./../screens/SobreScreen"
import HomeScreen from "./../screens/HomeScreen"
import { createHostItemNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
    const nav = false ? createHostItemNavigator() :
    createDrawerNavigator();
    return {
        // <NavigationContainer>
        //     <nav.Navigator>
        //         <nav.Screen name="Name" component={}>
    }
}