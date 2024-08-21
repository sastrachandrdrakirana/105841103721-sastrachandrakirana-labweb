import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
          }}
        ></View>
        <View
          style={{
            flex: 1,
            backgroundColor: "blue",
          }}
        ></View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
        }}
      ></View>
      <View
        style={{
          flex: 1,
          backgroundColor: "orange",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});