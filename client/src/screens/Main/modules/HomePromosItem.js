import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { vh, vw } from "react-native-expo-viewport-units";
import styles from '../Styles/Item';
const HomePromosItem = ({ img, containerInfo, containerModel, containerText, containerImage, items}) => {
  //console.log(img)
  let {model, price, image}=items
  /* console.log(image) */
  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', { itemId: id })
        }

      >

        <View style={styles.container}>

          <Image
            style={{
              width: vw(90),
              height: vh(45),
              borderRadius: 25,
              borderWidth: 1,
              position: 'absolute',

            }}
            resizeMode='contain'
            source={img}
          >
          </Image>
         <View style={containerInfo}>
            <View style={containerModel}>
              <Text style={styles.price}>{model}</Text>
            </View>
            <View style={containerText}>
              <Text style={styles.price}>${price}</Text>
            </View>
            <View style={containerImage}>
              <Image
                style={{
                  width: vw(45),
                  height: vh(30),

                }}
                resizeMode="contain"
                source={{uri: image}}
              />
            </View>
          </View> 
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default HomePromosItem