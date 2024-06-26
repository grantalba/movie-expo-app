import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS } from "@/constants/theme";
import Each from "./Each";
import { sampleData } from "@/constants/constants";

const MovieList = ({ title }: any) => {
  const styles = StyleSheet.create({
    content: SIZES.content,
    headerText: {
      color: COLORS.contentPrimary,
      fontWeight: "500",
      ...FONTS.l1,
      marginBottom: SIZES.base,
    },
    seeAllText: {
      color: COLORS.primary500,
      fontWeight: "500",
      ...FONTS.l2,
      marginBottom: SIZES.base,
    },
  });

  return (
    <View style={styles.content}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Each
          of={sampleData.results}
          render={(
            item: { poster_path: string },
            index: { toString: () => React.Key | null | undefined }
          ): any => {
            return (
              <TouchableOpacity key={index.toString()}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                  width={SIZES.width * 0.3}
                  height={SIZES.width * 0.4}
                  style={{ marginRight: SIZES.base }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default MovieList;
