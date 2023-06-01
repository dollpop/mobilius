import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import LocationProvider from "./contexts/Location/LocationProvider";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from "./screens/NewMain";
import MapScreen from "./screens/MapScreen";
import LoginScreen from "./screens/LoginScreen";

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
            <Stack.Navigator 
            initialRouteName = "Home1"
            screenOptions={({route}) => ({
              // screenOptions에 함수를 전달해 루트별로 다른 전환 효과 설정
              headerShown: false,
              // ...TransitionPresets.Fade  // Fade 효과 추가하려면 이거 사용 ~
              // ...TransitionPresets.ModalSlideFromBottomIOS  // 밑에서 올라오는 Slide 효과 추가 부분 (뒤로갈 때 아래로 내리기)
              // ...TransitionPresets.ModalPresentationIOS // 이거는 CARD 부분 띄울 때 쓰면 좋을 듯
              // ...TransitionPresets.SlideFromRightIOS  // 오른쪽으로 Slide 효과 추가 부분

              ...(route.name ==='Map' ? TransitionPresets.SlideFromRightIOS 
              : TransitionPresets.ModalSlideFromBottomIOS)
              // ↑ Map 루트에는 슬라이드 효과를, Login 루트에는 모달 효과로 설정
            })}
            
            >
              <Stack.Screen name = "Home1" component = {HomeScreen} 
              options = {{headerShown: false}} />
              <Stack.Screen name = "Map" component = {MapScreen} 
              options = {{headerShown: false}} />
              <Stack.Screen name ="Login" component= {LoginScreen}
              options = {{headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer>
        </LocationProvider>
      </QueryClientProvider>
    </>
  );
}
