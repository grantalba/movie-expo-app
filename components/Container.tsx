import React, { PropsWithChildren } from "react";
import { View, StyleSheet, ColorValue, Platform } from "react-native";
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RenderWhen from "./RenderWhen";
import { COLORS, FONTS } from "../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Header {
  pageTitle?: any;
  shouldDisplayBack?: boolean;
  onBackPress?: any;
  left?: React.ReactElement;
  right?: React.ReactElement;
}

const Container = ({
  children,
  backgroundColor,
  header,
}: PropsWithChildren<{
  backgroundColor?: ColorValue;
  header?: Header;
}>): React.JSX.Element => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleOnBackPress = () => {
    if (header?.onBackPress) {
      header.onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "stretch",
      flexDirection: "column",

      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingLeft: insets.left + 5,
      paddingRight: insets.right + 5,
      paddingBottom: insets.bottom + 5,
      backgroundColor,
    },
    header: {
      backgroundColor: "transparent",
    },
    contentStyle: {
      marginLeft: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <RenderWhen condition={!!header}>
        <Appbar.Header statusBarHeight={0} style={styles.header}>
          <RenderWhen condition={header?.shouldDisplayBack}>
            <MaterialIcons
              name="chevron-left"
              size={Platform.OS === "ios" ? 30 : 40}
              color={COLORS.primary500}
              onPress={handleOnBackPress}
            />
          </RenderWhen>
          <RenderWhen condition={!!header?.left}>{header?.left}</RenderWhen>
          <RenderWhen condition={!!header?.pageTitle}>
            <Appbar.Content
              title={header?.pageTitle}
              titleStyle={{
                color: COLORS.contentPrimary,
                ...FONTS.h3,
                fontWeight: "bold",
              }}
              style={styles.contentStyle}
            />
          </RenderWhen>
          <RenderWhen condition={!!header?.left}>{header?.right}</RenderWhen>
        </Appbar.Header>
      </RenderWhen>

      {children}
    </View>
  );
};

export default Container;
