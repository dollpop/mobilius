import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import LoginMain from "./LoginMain";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();


function LoginScreen() {
    return(
      <Tab.Navigator shifting={true}>
          <Tab.Screen
            name="Login"
            component={LoginMain}
            options={{
              headerShown: false,
                //tabBarIcon: ({ color, size = 26 }) => (
                //  <MaterialCommunityIcons
                //    name="login"
                //    color={color}
                //    size={size}
                //  />
                // ),
            }}
          />
        </Tab.Navigator>
    )
  };

  export default LoginScreen;