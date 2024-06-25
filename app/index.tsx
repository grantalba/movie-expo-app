import Container from "@/components/Container";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

export default function Index() {
  return (
    <Container
      header={{
        shouldDisplayBack: false,
        pageTitle: "Movies",
      }}
      backgroundColor={COLORS.backgroundSecondary}
    ></Container>
  );
}
