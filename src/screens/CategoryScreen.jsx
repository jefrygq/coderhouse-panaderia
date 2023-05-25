import { useEffect } from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import ProductsItem from '../components/ProductsItem';
import { useDispatch, useSelector } from 'react-redux';
import { filteredProducts, selectedProduct } from '../store/actions/products.action';



const CategoryScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const categoryProducts = useSelector(state => state.products.filteredProducts);
  const categorySelected = useSelector(state => state.categories.selected);
  
  // console.log('category selected: ');
  // console.log(categoryProducts);

  useEffect(() => {
    // console.log('calling useffect: '+categorySelected.id);
    dispatch(filteredProducts(categorySelected.id));
  }, []);

  const onSelected = (product) => {
    dispatch(selectedProduct(product.id));
    navigation.navigate('Product', {product: product});
  };
  // console.log('selected products');
  // console.log(categoryProducts);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={categoryProducts}
        renderItem={({item}) => (
          <ProductsItem product={item} onSelected={onSelected} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default CategoryScreen;
