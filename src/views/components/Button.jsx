import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, {} from 'react'
import COLORS from '../../consts/colors'

const Button = ({title, onPress= () => {}}) => {

  return (

    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.light}}>{title}</Text>

    </TouchableOpacity>

  )

}

export default Button

const styles = StyleSheet.create({})