import {
  Dimensions,
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
} from "react-native";
import Animated, {
  useAnimatedProps,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  SharedValue,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { CarouselItem } from "@/mock/carousel-data";
import { Image } from "expo-image";
import { PressableScale } from "./PressableScale";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

interface RenderItemProps {
  item: CarouselItem;
  index: number;
  scrollOffset: SharedValue<number>;
}

export const RenderItem: React.FC<RenderItemProps> = (props) => {
  const { item, index, scrollOffset } = props;
  const { width } = useWindowDimensions();
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP
    );

    const translateX = interpolate(
      scrollOffset.value,
      inputRange,
      [-width * 0.75, 0, width * 0.75],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  const animatedProps = useAnimatedProps(() => {
    const intensity = interpolate(
      scrollOffset.value,
      inputRange,
      [100, 0, 100],
      Extrapolation.CLAMP
    );

    return {
      intensity,
    };
  });

  return (
    <Animated.View style={[animatedStyle, styles.itemContainer]}>
      <PressableScale style={styles.cardContainer}>
        <AnimatedBlurView
          animatedProps={animatedProps}
          tint="prominent"
          style={styles.blurView}
        />
        <View style={styles.buttonContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </PressableScale>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
  cardContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: 80,
    borderRadius: 20,
    justifyContent: "space-between",
    backgroundColor: "white",
    overflow: "hidden",
  },
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    marginLeft: 15,
    marginVertical: 5,
    height: 60,
    aspectRatio: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 5,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
});
