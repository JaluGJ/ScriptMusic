import React from 'react'
import {
    View,
    TextInput,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/Home.jsx";
import user from "../../../../assets/user.png";


const HomeNav = ({search, setSearch, setModal, modal}) => {
    return (
        <View style={styles.containerNav}>
            <Image
                style={{
                    width: 50,
                    height: 50,
                }}
                source={user}
            />
            <TextInput
                style={styles.input}
                placeholder=" Buscar"
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={() => submitHandle(search)}
            />

            <Ionicons
                name="filter-sharp"
                size={34}
                color="#DD8643"
                onPress={() => setModal(!modal)}
            />
        </View>
    )
}

export default HomeNav