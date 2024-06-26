import React, { useCallback, useState } from "react";
import Container from "@/components/Container";
import { Platform, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import TopRatedMovie from "@/components/TopRatedMovie";
import MovieList from "@/components/MovieList";
import useApi from "@/hooks/useApi";

export default function Index() {
  const [pageNumber, setPageNumber] = useState(3);
  const { data: topRatedMovies, error: topRatedMoviesError } = useApi(
    "top_rated",
    "GET",
    pageNumber
  );
  const { data: upcomingMovies, error: upcomingMoviesError } = useApi(
    "upcoming",
    "GET",
    1
  );
  const { data: popularMovies, error: popularMoviesError } = useApi(
    "popular",
    "GET",
    1
  );

  const handlePageNumber = useCallback(() => {
    setPageNumber(pageNumber + 1);
  }, [pageNumber]);

  const handleLeftIconPress = () => {
    // TODO: HandleLeftBackPress
  };
  const handleRightIconPress = () => {
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
            onPress={handleLeftIconPress}
          />
        ),
        right: (
          <Ionicons
            name="person-circle"
            size={Platform.OS === "ios" ? 30 : 40}
            color={COLORS.primary500}
            onPress={handleRightIconPress}
          />
        ),
      }}
      backgroundColor={COLORS.backgroundTertiary}
    >
      <ScrollView
        style={{
          marginHorizontal: SIZES.base,
          marginBottom: SIZES.height * 0.2,
        }}
      >
        {/* Top rate movies */}
        <TopRatedMovie
          data={topRatedMovies}
          handlePageNumber={handlePageNumber}
        />

        {/* Upcoming movies */}
        <MovieList title="Upcoming" data={upcomingMovies} />

        {/* Popular movies */}
        <MovieList title="Popular" data={popularMovies} />
      </ScrollView>
    </Container>
  );
}
