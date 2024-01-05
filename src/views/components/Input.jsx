import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({
  label, 
  iconName, 
  error, 
  password, 
  onFocus=() => {}, 
  ...props
}) => {

  const [isFocused, setIsFocused] = useState(false);

  const [hidePassword, setHidePassword] = useState(password);
    
  return (
    
    <View style={{marginBottom: 20}}>
        
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputContainer, {
        borderColor: error ? COLORS.red : isFocused ? COLORS.darkBlue : COLORS.light, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
      }]}>

        <View style={{display: 'flex', flexDirection: 'row' }}>
          <Icon name={iconName} style={{fontSize: 22, color: COLORS.darkBlue, marginRight: 10}}/>

          <TextInput 
            secureTextEntry={hidePassword}
            autoCorrect={false} 
            {...props}
            onFocus={() => {
              onFocus();
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            
            }}
          />

        </View>

        {password && <Icon name={hidePassword ? 'eye-outline' : 'eye-off-outline'} style={{fontSize: 22, color: COLORS.darkBlue}} onPress={() => setHidePassword(!hidePassword)}/>}

      </View>

      {error && (<Text style={{color: COLORS.red, fontSize: 12, marginTop: 7}}>{error}</Text>)}
      
    </View>
    
  )
  
}

export default Input

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.gray
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  }
})