import React from "react";
import { View, useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useAnimatedScrollHandler } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { PaginationDots } from "./PaginationDots";
import { RenderItem } from "./RenderItem";
import { carouselData } from "@/mock/carousel-data";

export const Carousel: React.FC = () => {
  const { width } = useWindowDimensions();
  const scrollOffset = useSharedValue(0);
  const tabBarHeight = useBottomTabBarHeight();

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollOffset.value = event.contentOffset.x;
  });

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ bottom: tabBarHeight + 30 }}>
        <Animated.FlatList
          data={carouselData}
          renderItem={({ item, index }) => (
            <RenderItem item={item} index={index} scrollOffset={scrollOffset} />
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          snapToAlignment="start"
          decelerationRate="fast"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        />
        <PaginationDots data={carouselData} scrollOffset={scrollOffset} />
      </View>
    </View>
  );
};
