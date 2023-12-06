import React, { useEffect } from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import ProductCard from '../../components/Users/ProductCard';
import { baseUrl } from '../../redux/store';
import MyHeader from '../../components/MyHeader';
import { getProductsData, getProductsDataFailure, getProductsDataSuccess } from '../../redux/action';


const Home = ({ route, navigation }) => {
  const { products } = useSelector((store, action) => store);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(getProductsData());

    try {
      const response = await axios.get(`${baseUrl}/products`);

      dispatch(getProductsDataSuccess(response.data));

    } catch (err) {
      console.warn(err);

      dispatch(getProductsDataFailure());
    }

  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <View style={{marginTop:30}}>
        <MyHeader
          onPressMenu={() => navigation.goBack()}
          title={route.name}
          right="more-vertical"
          onRightPress={() => console.log('right')}
        />
      </View>
      <ScrollView>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20, marginTop: 15, justifyContent: "center" }}>
          {
            products.map((item) => {
              return (
                <ProductCard key={item.id} item={item} navigation={navigation} />
              )
            })
          }
        </View>
      </ScrollView>

    </>
  )
}

export default Home;