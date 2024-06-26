import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import Container from "@/components/Container";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { COLORS, SIZES, FONTS } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const MovideDetailScreen = () => {
  const params = useLocalSearchParams();
  const { backdrop_path, title, overview } = params;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const handleOnBackPress = () => {
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "stretch",
      backgroundColor: COLORS.backgroundSecondary,
    },
    backgroundImage: { top: 0, left: 0, right: 0, position: "absolute" },
    linearGradient: {
      width: SIZES.width,
      height: SIZES.height * 0.6,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
    iconContainer: {
      alignItems: "center",
      marginTop: insets.top + 5,
      height: 35,
      width: 35,
      backgroundColor: COLORS.backgroundTertiary,
      marginHorizontal: SIZES.base,
      borderRadius: SIZES.base,
    },
    scrollView: {
      paddingBottom: SIZES.margin,
      marginTop: SIZES.height * 0.25,
      marginHorizontal: SIZES.l3,
      alignItems: "stretch",
    },
    textContainer: { alignItems: "center" },
    textTitle: {
      color: COLORS.contentPrimary,
      fontWeight: "500",
      ...FONTS.h1,
      textAlign: "center",
    },
    textBullet: {
      color: COLORS.contentSecondary,
      fontWeight: "400",
      ...FONTS.l2,
      textAlign: "center",
      marginTop: SIZES.l4,
    },
    textOverview: {
      ...FONTS.l2,
      color: COLORS.contentSecondary,
      fontWeight: "400",
      marginTop: SIZES.h1,
      textAlign: "justify",
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
        style={styles.backgroundImage}
        width={SIZES.width}
        height={SIZES.height * 0.6}
      />
      <LinearGradient
        colors={["transparent", COLORS.backgroundSecondary]}
        style={styles.linearGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="chevron-left"
          size={35}
          color={COLORS.primary500}
          onPress={handleOnBackPress}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{title}</Text>

          <Text style={styles.textBullet}>Release • 2020 • 130 min</Text>
          <Text style={styles.textBullet}>Action • Comedy • Romance</Text>
          <Text style={styles.textOverview}>{overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovideDetailScreen;
