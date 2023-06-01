import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BusMain from "./BusMain";
import SubwayMain from "./SubwayMain";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();


function MapScreen() {
    return(
      <Tab.Navigator shifting={true}>
          <Tab.Screen
            name="Bus"
            component={BusMain}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size = 26 }) => (
                <MaterialCommunityIcons
                  name="bus"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Subway"
            component={SubwayMain}
            options={{
              headerShown: false,
                tabBarIcon: ({ color, size = 26 }) => (
                  <MaterialCommunityIcons
                    name="subway-variant"
                    color={color}
                    size={size}
                  />
                ),
            }}
          />
        </Tab.Navigator>
    )
  };

  export default MapScreen;