import React from 'react'
import {
    Text,
    View
} from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import { AirbnbRating } from '@rneui/themed';
import { Image } from "@rneui/themed";
import styles from "../Styles/Detail.jsx";
const DetailComment = ({ ratYCom }) => {

    const imageDefault = "https://res.cloudinary.com/dzonjuriq/image/upload/v1658861361/script_music_img/user_g8vdpj.png";
  
    

    return (
        <View style={styles.containerDetailComment}>
            <View >
                <Text style={styles.commentTitle}>Opiniones de este producto:</Text>
            </View>
            <View>
                {

                    ratYCom?.length > 0 ?
                        ratYCom?.map((c, i) => {
                            let ratingg = c.rating ? c.rating / 2 : 0
                            return (
                                <View style={styles.containerComment} key={i}>
                                    <View style={styles.containerInfoComment}>
                                        <View style={styles.containerImgComment}>
                                            {c.userId?.image ? 
                                                <Image
                                                source={{ uri: c.userId.image }}
                                                style={{
                                                    width: vw(10),
                                                    height: vh(5),
                                                    padding: 10,
                                                    borderRadius: 100,
                                                }}
                                            />:
                                                <Image
                                                source={{ uri: imageDefault }}
                                                style={{
                                                    width: vw(10),
                                                    height: vh(5),
                                                    padding: 10,
                                                    borderRadius: 100,
                                                }}
                                            /> }
                                        </View>
                                        <View>
                                            {c.userId?.lastName ?
                                            <Text style={styles.nameComment}>
                                                {c.userId.lastName}
                                            </Text>
                                            :
                                            <Text style={styles.nameComment}>
                                                Desconocido
                                            </Text> }
                                            <View style={styles.commentText}>
                                                <Text>{c.comment}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    
                                    <View style={styles.rattingNum}>
                                        <AirbnbRating
                                            defaultRating={ratingg.toFixed(0)}
                                            size={10}
                                            isDisabled={true}
                                            reviews={[
                                                'Terrible',
                                                'Malo',
                                                'Aceptable',
                                                'Bueno',
                                                'Increible',
                                            ]}
                                            reviewSize={15}
                                        />
                                    </View>
                                </View>
                            )
                        })
                        :
                        <View >
                            <Text style={styles.commentTitle}>No se encontraron comentarios</Text>
                        </View>
                }

            </View>
        </View>
    )
}

export default DetailComment