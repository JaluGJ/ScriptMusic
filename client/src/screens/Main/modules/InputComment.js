import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "../Styles/Detail";
import { AirbnbRating } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";

export default function InputComment({ productId }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { token } = useSelector((state) => state.signin);
  const dispatch = useDispatch();

  return (
    <View>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 20, marginTop: 50 }}>Deja tu opinión</Text>
      </View>
      <View style={{ margin: 10 }}>
        <TextInput
          placeholder="Comentario..."
          maxLength={200}
          multiline={true}
          numberOfLines={6}
          style={styles.commentInput}
          onChangeText={(value) => setComment(value)}
        />
        <View style={{ alignItems: "flex-start" }}>
          <AirbnbRating
            defaultRating={0}
            size={20}
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
              dispatch(addComment(rating, comment, productId, date, token))
            }}
          >
            <Text style={{ letterSpacing: 2 }}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
