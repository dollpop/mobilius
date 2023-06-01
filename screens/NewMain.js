import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import icon from '../assets/iconpng.png';
import mobilius from '../assets/mobilius.png'

const Tab = createMaterialBottomTabNavigator();

function HomeScreen ({navigation})
{
  const handleButtonClick = (buttonIndex) => {
    // 버튼 클릭 이벤트 처리
    console.log('Button ${buttonIndex} clicked');
  };

  return (
    <View style={StyleSheet.container}>
        <Image source={icon} style={styles.icon} />
        <Image source={mobilius} style={styles.mobilius} />
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button} activeOpacity={0.5}
                // activeOpacity: 버튼이 눌렸을 때의 투명도 설정하는 속성
                onPress={()=>navigation.navigate('Map')}>
                    {/* 버튼 1 내용*/}
                    <Text style={styles.buttonText}>MAPS</Text>
                </TouchableOpacity>
            <TouchableOpacity
                style={styles.button} activeOpacity={0.5}
                onPress={()=>handleButtonClick(2)}>
                    {/* 버튼 2 내용 */}
                    <Text style={styles.buttonText}>CARD</Text>
                </TouchableOpacity>
            <TouchableOpacity
                style={styles.button} activeOpacity={0.5}
                onPress={()=>handleButtonClick(3)}>
                    {/* 버튼 3 내용 */}
                    <Text style={styles.buttonText}>CHAT</Text>
                </TouchableOpacity>   
        </View>

        <View style={styles.buttonContainer2}>
          <TouchableOpacity
            style={styles.button2} activeOpacity={0.5}
            onPress={()=>navigation.navigate('Login')}>
              {/* 버튼 4 내용 */}
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2} activeOpacity={0.5}
            onPress={()=>handleButtonClick(5)}>
              {/* 버튼 5 내용 */}
              <Text style={styles.buttonText}>FIND ID</Text>
            </TouchableOpacity>
        </View>

    </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    icon: {
      position: 'relative',
      resizeMode: "stretch",
      width: 200,
      height: 200,
      marginTop: 100,
      marginLeft: 100,
      // marginBottom: 30,
      // flexDirection: 'column',
      // margin: flexCenter,
      justifyContent: 'center',
    },

    mobilius: {
      position: 'relative',
      resizeMode: "stretch",
      width: 100,
      height: 25,
      marginLeft: 150,
      marginBottom: 55,
      justifyContent: 'center',
    },

    buttonContainer: {
        flexDirection: 'column',
        //flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer2: {
      // flexDirection: 'column',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        resizeMode:"stretch",
        width: 300,
        height: 50,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

        // borderWidth: 1,
        // padding: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 6,
      },
    button2:{
      resizeMode:"stretch",
      width: 150,
      height: 50,
      margin: 10,
      marginTop: 150,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',

      // borderWidth: 1,
      // padding: 10,
      shadowColor: 'black',   //ios용 그림자(shadow) 관련 속성
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 6,   // 안드로이드용 그림자(shadow) 관련 속성


    },

    
});

export default HomeScreen;