import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Icon } from "@rneui/themed";
import styles from "./styles/CustomAlert";

export const ModalPoup = ({ visible, children }) => {
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const CustomAlertComponent = ({
  visible,
  setVisible,
  title,
  message,
  color,
  iconName,
  setFlag,
  flag,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ModalPoup visible={visible}>
        <View style={{ alignItems: "center" }}></View>
        <View style={{ alignItems: "center" }}>
          <Icon
            name={iconName}
            type="material-community"
            size={100}
            color={color}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{message}</Text>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
              setTimeout(() => setFlag(false), 200);
            }}
            style={styles.buttonClose}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </ModalPoup>
    </View>
  );
};

export default CustomAlertComponent;
