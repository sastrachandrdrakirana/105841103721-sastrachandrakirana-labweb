import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        // alignItems: kolom,
        // justifyContent: baris,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 130,
            height: 80,
            backgroundColor: "red",
            borderRadius: 10,
            marginRight: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Sign In
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 130,
            height: 80,
            backgroundColor: "blue",
            borderRadius: 10,
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});