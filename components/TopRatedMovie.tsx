import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { COLORS, SIZES, FONTS } from "@/constants/theme";
import Carousel from "react-native-reanimated-carousel";
import { sampleData } from "@/constants/constants";

export default function TopRatedMovie() {
  const renderCarousel = ({ item, index }: any) => {
    return (
      <Link href="/detail" style={styles.containerCarousel} asChild>
        <TouchableOpacity>
          <Image
            key={index.toString()}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
            width={SIZES.width * 0.6}
            height={SIZES.height * 0.4}
          />
        </TouchableOpacity>
      </Link>
    );
  };

  const styles = StyleSheet.create({
    headerText: {
      color: COLORS.contentPrimary,
      fontWeight: "500",
      ...FONTS.l1,
    },
    slideStyle: {
      display: "flex",
      alignItems: "center",
    },
    containerCarousel: {
      flex: 1,
      height: 400,
      width: SIZES.width * 0.6,
      alignSelf: "center",
    },
  });

  return (
    <View style={SIZES.content}>
      <Text style={styles.headerText}>Top Rated Movie</Text>
      <View
        style={{
          width: SIZES.width,
        }}
      >
        <Carousel
          data={sampleData.results}
          renderItem={renderCarousel}
          width={SIZES.width}
          height={SIZES.height * 0.35}
          defaultIndex={1}
          // style={styles.slideStyle}
          loop={false}
          mode="parallax"
          modeConfig={{
            parallaxScrollingOffset: 200,
          }}
        />
      </View>
    </View>
  );
}
