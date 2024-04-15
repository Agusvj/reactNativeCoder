import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import allProducts from "../data/products.json";
import { colors } from "../constants/colors";

const ItemDetail = ({ route, navigation }) => {
  const [product, setProduct] = useState({});
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  console.log(route.params);

  const { productId: productDetailId } = route.params;

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [height, width]);

  useEffect(() => {
    const productFinded = allProducts.find(
      (product) => product.id === productDetailId
    );
    setProduct(productFinded);
  }, [productDetailId]);

  const goBack = () => {
    setProductDetailId(0);
  };

  return (
    <View style={styles.view}>
      <Pressable onPress={() => navigation.goBack()} style={styles.pressable}>
        <Text style={styles.pressableText}>Go Back</Text>
      </Pressable>
      {product ? (
        <View style={isPortrait ? styles.cardContainer : styles.cardLandScape}>
          <Image
            resizeMode="cover"
            source={{ uri: product.thumbnail }}
            style={isPortrait ? styles.image : styles.imageLandscape}
          />
          <View style={isPortrait ? styles.cardP : styles.cardL}>
            <Text style={styles.cardText}>{product.title}</Text>
            <Text style={styles.cardDesc}>{product.description}</Text>
            <Text style={styles.cardPrice}>${product.price}</Text>
            <Pressable onPress={goBack}>
              <Text style={styles.button}>Buy!</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.terciary,
    width: "100%",
  },
  pressable: {
    backgroundColor: colors.secondary,
    padding: 10,
    marginBottom: 10,
  },
  pressableText: {
    fontFamily: "SpaceMono_700Bold",
    color: "white",
  },
  image: {
    width: "100%",
    minHeight: 230,
  },
  imageLandscape: {
    width: "40%",
    height: 200,
  },
  cardText: {
    fontFamily: "AtomicAge_400Regular",
    color: "white",
    fontSize: 23,
    marginVertical: 10,
  },
  cardDesc: {
    fontFamily: "SpaceMono_700Bold",
    color: "#6b7280",
  },
  cardPrice: {
    fontFamily: "AtomicAge_400Regular",
    color: "white",
    marginTop: 10,
    textAlign: "right",
    fontSize: 20,
  },
  button: {
    padding: 10,
    backgroundColor: colors.secondary,
    width: 100,
    borderRadius: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "AtomicAge_400Regular",
    fontSize: 16,
  },
  cardContainer: {
    flexDirection: "column",
    width: "100%",
  },
  cardLandScape: {
    flexDirection: "row",
    width: "100%",
    gap: 15,
    padding: 10,
  },
  cardL: {
    width: "55%",
  },
  cardP: {
    width: "100%",
    padding: 10,
  },
});
