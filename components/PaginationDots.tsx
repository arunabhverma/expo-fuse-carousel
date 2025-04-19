import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import { SharedValue } from "react-native-reanimated";

interface PaginationDotsProps {
  data: any[];
  scrollOffset: SharedValue<number>;
}

const DOT_SIZE = 6;

export const PaginationDots = ({ data, scrollOffset }: PaginationDotsProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotStyle = useAnimatedStyle(() => {
          const width = interpolate(
            scrollOffset.value,
            inputRange,
            [DOT_SIZE, DOT_SIZE * 2, DOT_SIZE],
            Extrapolation.CLAMP
          );

          const opacity = interpolate(
            scrollOffset.value,
            inputRange,
            [0.2, 1, 0.2],
            Extrapolation.CLAMP
          );

          return {
            width,
            opacity,
          };
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, dotStyle]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    gap: 8,
  },
  dot: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: "#000",
  },
});
