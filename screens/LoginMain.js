import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from "react-native";

import icon from '../assets/iconpng.png';
import { useState } from "react";
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

//const Tab = createMaterialBottomTabNavigator();

function LoginMain ({navigation})
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직 구현
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  // const handleGoogleLogin = async() => {
  //   try {
  //     // 구글 계정 로그인 처리 로직
  //     await GoogleSignin.configure();
  //     const data = await GoogleSignin.signIn();

  //     // 로그인 성공 시 처리
  //     console.log('Google Login Succeess: ', data);
  //   } catch (error) {
  //     // 로그인 실패 시 처리
  //     console.log('Google Login Error: ', error);
  //   }
  // };

  const handleButtonClick = (buttonIndex) => {
    // 버튼 클릭 이벤트 처리
    console.log('Button ${buttonIndex} clicked');
  };

  return (
    <View style={StyleSheet.container}>
        <Image source={icon} style={styles.icon} />
            <TextInput
                style={styles.input}
                // activeOpacity: 버튼이 눌렸을 때의 투명도 설정하는 속성
                // onPress={()=>navigation.navigate('Login')}
                placeholder="Email"
                value={email}
                onChangeText={setEmail} />
               
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword} />

                <Button title="SIGN IN" onPress={handleLogin} />

                {/* <GoogleSigninButton
                  style={{width: 192, height: 48, marginTop: 20}}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Light}
                  onPress={handleGoogleLogin}
                /> */}

                <View style={styles.buttonContainer2}>
                  <TouchableOpacity
                    style={styles.button2} activeOpacity={0.5}
                    onPress={()=>handleButtonClick(1)}>
                    {/* 버튼 1 내용 */}
                    <Text style={styles.buttonText}>SIGN UP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button2} activeOpacity={0.5}
                    onPress={()=>handleButtonClick(2)}>
                    {/* 버튼 2 내용 */}
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

    buttonContainer2: {
      // flexDirection: 'column',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
      // justifyContent: 'center',
    },

    input: {
      width: '80%',
      height: 50,
      marginTop: 10,
      marginLeft: 40,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderColor: '#ccc',
      borderWidth:1,
      borderRadius: 5,
    },    
  
    button2:{
      resizeMode:"stretch",
      width: 150,
      height: 50,
      margin: 10,
      marginTop: 100,
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

export default LoginMain;