import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    bottom: 49,
    width: "100%",
    backgroundColor: "#131313",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    margin: 10,
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
});

export default styles;
