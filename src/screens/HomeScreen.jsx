import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import CategoriesItem from '../components/CategoriesItem';
import { CATEGORIES } from '../data/categories';

import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from '../store/actions/category.action';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories.categories);

  const handleCategorySelected = (item) => {
    dispatch(selectedCategory(item.id));
    
    navigation.navigate('Category', {category: item});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <CategoriesItem item={item} onSelected={handleCategorySelected} />
        )}
        keyExtractor={item => item.id}
        numColumns={1}
        style={styles.categoriesContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
})

export default HomeScreen;
