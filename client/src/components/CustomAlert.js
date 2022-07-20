import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Icon } from "@rneui/themed";

const ModalPoup = ({visible, children}) => { 
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
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const CustomAlertComponent = ({visible,setVisible , title,message,color,iconName ,setFlag,flag}) => {


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
        </View>
        <View style={{alignItems: 'center'}}>
        <Icon
                name={iconName}
                type="material-community"
                size={100}
                color={color}
              />
        </View>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.subTitle}>
          {message}
        </Text> 
        <View style={styles.bottom}>
            <TouchableOpacity onPress={() =>{
                setVisible(false)
                setTimeout(() => setFlag(false), 200);
                }} style={styles.buttonClose}>
                <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
      </ModalPoup>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '75%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 5,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 15,   
    },
  bottom: {
    width: '100%',
    height: 50,
    // alignItems: 'flex-end',
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 40,
  },
  buttonClose: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0063',
    borderRadius: 20,
    width: '100%',
    height: '100%',
    paddingHorizontal: 50,
  },
    buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    },
});

export default  CustomAlertComponent;