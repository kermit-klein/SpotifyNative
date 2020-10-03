import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "column",
    bottom: 49,
    width: "100%",
    backgroundColor: "#131313",
    borderWidth: 2,
    borderColor: "black",
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  nameContainer: {
    alignItems: "flex-start",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginTop: 15,
  },
  artist: {
    color: "lightgrey",
    fontSize: 18,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  progress: {
    height: 5,
    backgroundColor: "#bcbcbc",
  },
  row: {
    flexDirection: "row",
  },
});

export default styles;
