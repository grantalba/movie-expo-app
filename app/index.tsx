import Container from "@/components/Container";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";
import TopRatedMovie from "@/components/TopRatedMovie";
import MovieList from "@/components/MovieList";

export default function Index() {
  const handleLeftBackPress = () => {
    // TODO: HandleLeftBackPress
  };
  const handleRightBackPress = () => {
    // TODO: HandleLeftBackPress
  };
  return (
    <Container
      header={{
        shouldDisplayBack: false,
        pageTitle: "Movies",
        left: (
          <Ionicons
            name="menu"
            size={Platform.OS === "ios" ? 30 : 40}
            color={COLORS.primary500}
            onPress={handleLeftBackPress}
          />
        ),
        right: (
          <Ionicons
            name="person-circle"
            size={Platform.OS === "ios" ? 30 : 40}
            color={COLORS.primary500}
            onPress={handleRightBackPress}
          />
        ),
      }}
      backgroundColor={COLORS.backgroundSecondary}
    >
      <ScrollView>
        {/* Top rate movies */}
        <TopRatedMovie />

        {/* Upcoming movies */}
        <MovieList title="Upcoming" data={[]} />

        {/* Popular movies */}
        <MovieList title="Popular" data={[]} />
      </ScrollView>
    </Container>
  );
}
