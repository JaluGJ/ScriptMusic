import React from 'react'
import {
    Text,
    View
} from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import { AirbnbRating } from '@rneui/themed';
import { Image } from "@rneui/themed";
import styles from "../Styles/Detail.jsx";
const DetailComment = () => {

    let ratYCom = [
        {
            "userId": {
                "lastName": "machao",
                "image": 'https://i.postimg.cc/rwxFv4SF/machado.png',
            },
            "ratting": 4,
            "comment": "vamooo bocaaa"
        },
        {
            "userId": {
                "lastName": "Orancio",
                "image": 'https://i.postimg.cc/fT3bfpyd/hori.png',
            },
            "ratting": 5,
            "comment": "re feas las alertasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        },
        {
            "userId": {
                "lastName": "Jorge Polo",
                "image": 'https://i.postimg.cc/FRtbh36W/unknown.png',
            },
            "ratting": 2,
            "comment": "jorge"
        }
    ]

    return (
        <View style={styles.containerDetailComment}>
            <View >
                <Text style={styles.commentTitle}>Opiniones de este producto:</Text>
            </View>
            <View>
                {
                    ratYCom.map((c, i) => {
                        /* console.log(c.comment.img) */
                        return (
                            <View style={styles.containerComment} key={i}>
                                <View style={styles.containerInfoComment}>
                                    <View style={styles.containerImgComment}>
                                        <Image
                                            source={{ uri: c.userId.image }}
                                            style={{
                                                width: vw(10),
                                                height: vh(5),
                                                padding: 10,
                                                borderRadius: 100,
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.nameComment}>{c.userId.lastName}</Text>
                                        <View style={styles.commentText}>
                                            <Text>{c.comment}</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* <AirbnbRating isDisabled={true}/>{c.ratting} */}
                                <View style={styles.rattingNum}>
                                    <AirbnbRating
                                        defaultRating={c.ratting}
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
                }
            </View>
        </View>
    )
}

export default DetailComment