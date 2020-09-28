import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.warn(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Hello from Album Screen</Text>
    </View>
  );
};

export default AlbumScreen;
