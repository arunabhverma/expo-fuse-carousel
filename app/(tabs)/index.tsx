import { StyleSheet, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Carousel } from "@/components/Carousel";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.3 }}
          colors={["rgba(0,0,0,0.2)", "rgba(255,255,255,0.0)"]}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1 }}>
            <Carousel />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
