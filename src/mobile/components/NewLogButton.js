import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

const NewLogButton = props => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient colors={['#1FF9B4', '#43D6D6']} style={styles.button}>
        <TouchableOpacity onPress={props.onPress}>
          {!props.pressed ? (
            <Icon name="ios-add" size={50} color="#ffffff" />
          ) : (
            <Icon name="ios-close" size={50} color="#ffffff" />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-end',
    display: 'flex'
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  }
})

export default NewLogButton