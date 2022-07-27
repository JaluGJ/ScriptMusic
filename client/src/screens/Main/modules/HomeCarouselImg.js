import React from 'react'
import { Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/Carousel';
const HomeCarouselImg = ({ img }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() =>
                navigation.navigate('PromoDetail', { id: item.id })
            }>
            <Image
                style={styles.image}
                source={{ uri: img }}
            />
        </Pressable>
    )
}

export default HomeCarouselImg