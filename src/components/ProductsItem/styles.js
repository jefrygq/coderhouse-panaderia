import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    margin: 10,
  },
  imageContainer: {
    height: 100,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
