import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import albumDetails from "../mockdata/albumDetails";
import SongListItem from "../components/SongListItem";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.warn(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Hello from Album Screen</Text>
      <SongListItem song={albumDetails.songs[0]} />
    </View>
  );
};

export default AlbumScreen;
