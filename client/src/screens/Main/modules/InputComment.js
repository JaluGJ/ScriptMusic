import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "../Styles/Detail";
import { AirbnbRating } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { addRating } from "../../../redux/slices/products";

export default function InputComment({ productId }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { token } = useSelector((state) => state.signin);
  const dispatch = useDispatch();

  return (
    <View>
      <View style={{ margin: 10, flexDirection:'row', justifyContent:'space-between',  }}>
        <Text style={{ fontSize: 22, height:32,}}>Deja tu opinión</Text>
        <View style={{ height:32, }}>
          <AirbnbRating
            defaultRating={0}
            size={24}
            reviews={[
              "Terrible",
              "Malo",
              "Aceptable",
              "Bueno",
              "Increíble",
            ]}
            onFinishRating={(value) => setRating(value)}
            showRating={false}
            starContainerStyle={{ marginVertical: 10 }}
          />
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <TextInput
          placeholder="Comentario..."
          maxLength={200}
          multiline={true}
          numberOfLines={6}
          style={{
            borderWidth:1,
            borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation:1,
    borderColor: "#00000053",
          }}
          onChangeText={(value) => setComment(value)}
        />
        <View
          style={
            !comment || rating < 1 || comment[0] === " "
              ? styles.containerSendCommentDisabled
              : styles.containerSendComment
          }
        >
          <TouchableOpacity
            disabled={!comment || rating < 1 || comment[0] === " "}
            onPress={() => {
              let date = Date();
              dispatch(addRating(rating, comment, productId, date, token))
            }}
          >
            <Text style={!comment || rating < 1 || comment[0] === " "
              ? styles.textButtonDisableComment
              : styles.textButtonComment}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
