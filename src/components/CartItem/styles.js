import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});