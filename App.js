import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import LocationProvider from "./contexts/Location/LocationProvider";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/NewMain";
import MapScreen from "./screens/MapScreen";

// function HomeScreen ({navigation}) {
//   return (
//       <View>
//           <Button title = "Maps" 
//           onPress={ () => navigation.navigate('Map1')}/>
//       </View>
//   )
// }

// const logoImage = require("C:\Users\samsung\expo\map-prac-develop1\assets\icon.png");
// //("../../../assets/icon.png");


const queryClient = new QueryClient();
const Stack = createStackNavigator();


export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LocationProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home1">
              <Stack.Screen name = "Home1" component = {HomeScreen} 
              options = {{headerShown: false}} />
              <Stack.Screen name = "Map" component = {MapScreen} 
              options = {{headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer>
        </LocationProvider>
      </QueryClientProvider>
    </>
  );
}


