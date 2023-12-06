import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ProductCard from "../../components/Users/ProductCard";
import { baseUrl } from "../../redux/store";
import MyHeader from "../../components/MyHeader";
import {
  getProductsData,
  getProductsDataFailure,
  getProductsDataSuccess,
} from "../../redux/action";
import { CartBagIcon, SearchIcon } from "../../../assets";

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
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <View style={styles.mainDiv}>
        <View style={styles.headerDiv}>
          <Text style={styles.headerText}>Hey, Rahul</Text>

          <View>
            <Image source={CartBagIcon} alt="CartBagIcon" style={styles.cartImage} />
            <View style={styles.cartDiv}>
              <Text>3</Text>
            </View>
          </View>
        </View>

        <View style={styles.searchDiv}>
          <Image source={SearchIcon} alt="SearchIcon" />
          <TextInput
            placeholder="Search Products or Store"
            placeholderTextColor="#8891A5"
            style={styles.searchBar}
          />
        </View>

        <View style={styles.locationDiv}>
          <View>
            <Text style={{color: "#8891A5"}}>DELIVERY TO</Text>
            <Text style={{color: "#F8F9FB"}}>Green Way 3000, Sylhet</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: "#2A4BA0",
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    rowGap: 20
  },
  headerDiv: {
    marginTop: 52,
    width: 339,
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "600",
    color: "#F8F9FB",
  },
  cartDiv: {
    backgroundColor: "#F9B023",
    color: "#F8F9FB",
    borderRadius: 50,
    width: 24,
    height: 22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: -32,
    right: -8,
  },
  cartImage: {
    width: 20,
    height: 24,
  },
  searchDiv: {
    width: 335,
    height: 56,
    backgroundColor: "#153075",
    borderRadius: 50,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchBar: {
    marginLeft: 15,
    fontSize: 16,
    color: "#F8F9FB"
  },
  locationDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
