import React, { useState } from "react";
import Container from "@/components/Container";
import { Platform, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";
import TopRatedMovie from "@/components/TopRatedMovie";
import MovieList from "@/components/MovieList";
import useApi from "@/hooks/useApi";

export default function Index() {
  // const { data, loading, error } = useApi("top_rated", "GET", 1);
  const [pageNumber, setPageNumber] = useState(1);
  const { data: topRatedMovies, error: topRatedMoviesError } = useApi(
    "top_rated",
    "GET",
    pageNumber
  );
  const { data: upcomingMovies, error: upcomingMoviesError } = useApi(
    "upcoming",
    "GET",
    pageNumber
  );
  const { data: popularMovies, error: popularMoviesError } = useApi(
    "popular",
    "GET",
    pageNumber
  );

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
        <TopRatedMovie data={topRatedMovies} />

        {/* Upcoming movies */}
        <MovieList title="Upcoming" data={upcomingMovies} />

        {/* Popular movies */}
        <MovieList title="Popular" data={popularMovies} />
      </ScrollView>
    </Container>
  );
}
