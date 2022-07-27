import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import { AirbnbRating } from "@rneui/themed";
import { Image } from "@rneui/themed";
import styles from "../Styles/Detail.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  updateCommit,
} from "../../../redux/slices/products.js";
const DetailComment = () => {
  const dispatch = useDispatch();
  const imageDefault =
    "https://res.cloudinary.com/dzonjuriq/image/upload/v1658861361/script_music_img/user_g8vdpj.png";
  const { details, ratYCom, updateRate } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (updateRate > 0) {
      dispatch(updateCommit(details.id));
    }
  }, [updateRate]);

  return (
    <View style={styles.containerDetailComment}>
      <View>
        <Text style={styles.commentTitle}>Opiniones de este producto:</Text>
      </View>
      <View>
        {ratYCom?.length > 0 ? (
          ratYCom?.map((c, i) => {
            let ratingg = c.rating;
            let date = c.date.split(",").shift();
            let fecha = new Date(date).toISOString().slice(0, 10);
            fecha = fecha.split("-").reverse().toString().replace(/\,/g, "/");
            return (
              <View style={styles.containerComment} key={i}>
                <View style={styles.containerInfoComment}>
                  <View style={styles.containerImgComment}>
                    {c.userId?.image ? (
                      <Image
                        source={{ uri: c.userId.image }}
                        style={{
                          width: vw(10),
                          height: vh(5),
                          padding: 10,
                          borderRadius: 100,
                        }}
                      />
                    ) : (
                      <Image
                        source={{ uri: imageDefault }}
                        style={{
                          width: vw(10),
                          height: vh(5),
                          padding: 10,
                          borderRadius: 100,
                        }}
                      />
                    )}
                  </View>
                  <View>
                    {c.userId?.lastName ? (
                      <View>
                        <Text style={styles.nameComment}>
                          {c.userId.firstName} {c.userId.lastName}
                        </Text>
                        <View style={styles.rattingNum}>
                          <View>
                            <AirbnbRating
                              defaultRating={ratingg.toFixed(0)}
                              size={10}
                              isDisabled={true}
                              reviews={[
                                "Terrible",
                                "Malo",
                                "Aceptable",
                                "Bueno",
                                "Increible",
                              ]}
                              reviewSize={15}
                              showRating={false}
                            />
                          </View>
                          <View>
                            <Text style={styles.textDate}>{fecha}</Text>
                          </View>
                        </View>
                      </View>
                    ) : (
                      <Text style={styles.nameComment}>Desconocido</Text>
                    )}
                    <View style={styles.commentText}>
                      <Text>{c.comment}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })
        ) : (
          <View>
            <Text style={styles.commentTitle}>
              No se encontraron comentarios.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default DetailComment;
