import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../Styles/Detail'

export default function InputComment() {
  return (
    <View>
      <TextInput 
      placeholder='Deja un comentario...'
      />
    </View>
  )
}