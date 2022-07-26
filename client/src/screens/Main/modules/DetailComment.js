import React from 'react'
import {
    Text,
    View
} from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import { AirbnbRating } from '@rneui/themed';
import { Image } from "@rneui/themed";
import styles from "../Styles/Detail.jsx";
const DetailComment = ({ratYcom}) => {

    console.log(ratYcom)
    return (
        <View style={styles.containerDetailComment}>
            <View >
                <Text style={styles.commentTitle}>Opiniones de este producto:</Text>
            </View>
            <View>
                {

                    ratYcom?.length > 0 ?
                    ratYcom?.map((c, i) => {
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