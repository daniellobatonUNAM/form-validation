import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AntDesign name="leftcircleo" size={24} color="black" onPress={() => navigation.navigate('Registration')}/>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})