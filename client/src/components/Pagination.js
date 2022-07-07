import { View, FlatList, Button, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setCurrentPage } from "../redux/slices/pagination";
import styles from "./styles/Pagination";

export default function Pagination({ allInstruments }) {
  const currentPage = useSelector((state) => state.pagination.page);
  const pageNumbers = [];
  const instrumentsPerPage = 12;
  const totalPages = Math.ceil(allInstruments / instrumentsPerPage);
  const dispatch = useDispatch();

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <View>
      <View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={() => dispatch(setCurrentPage(currentPage - 1))}
            style={
              currentPage - 1 === 0 ? styles.buttonDisabled : styles.button
            }
            disabled={currentPage - 1 === 0}
          >
            <Text style={styles.buttonText}>PREV</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              currentPage === totalPages ? styles.buttonDisabled : styles.button
            }
            onPress={() => dispatch(setCurrentPage(currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={totalPages}
          key={(item) => item}
          renderItem={({ item }) => {
            console.log("ITEM", item);
            return (
              <Button
                title={item}
                onPress={() => dispatch(setCurrentPage(item))}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
