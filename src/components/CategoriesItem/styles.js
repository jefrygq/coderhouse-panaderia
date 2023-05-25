import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    borderRadius: 10,
    shadoColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // 0 - 1
    shadowRadius: 3.84, // for android
    elevation: 5, // for android
    margin: 10,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  textContainer: {
    width: "60%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "40%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  
  },
});