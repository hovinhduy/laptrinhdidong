import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function homeScreen({ route, navigation }) {
  const [imageSource, setImageSource] = useState(
    require("../assets/vs_blue.png")
  );

  useEffect(() => {
    if (route.params?.imageSource) {
      setImageSource(route.params.imageSource);
    }
  }, [route.params?.imageSource]);

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image style={styles.image} source={imageSource}></Image>
      </View>
      <View style={styles.info}>
        <Text style={styles.nameText}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.starGroup}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
          </View>
          <Text style={styles.nameText}>(Xem 828 đánh giá)</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: "10px",
            alignItems: "center",
          }}
        >
          <Text style={styles.priceText}>1.790.000 đ</Text>
          <Text style={styles.oldPriceText}>1.790.000 đ</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: "10px" }}>
          <Text style={styles.refundText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <View style={{ marginLeft: "13px" }}>
            <Image
              style={{ position: "absolute", top: "-30%", left: "-55%" }}
              source={require("../assets/Vector.png")}
            ></Image>
            <Image source={require("../assets/Vector2.png")}></Image>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Image
          style={{ position: "absolute", right: 40, bottom: 102 }}
          source={require("../assets/Vector3.png")}
        ></Image>
        <TouchableOpacity
          style={styles.selectColor}
          onPress={() => navigation.navigate("SelectColor")}
        >
          <Text style={styles.selectText}>4 MÀU-CHỌN MÀU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  product: {
    flex: 1.6,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 0.7,
    marginLeft: "22px",
    paddingTop: "10px",
  },
  starGroup: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
  },
  nameText: {
    marginLeft: 20,
    fontSize: "15px",
    lineHeight: "17.58px",
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  image: {
    height: "270px",
    width: "220px",
  },
  star: {
    height: "25px",
    width: "23px",
    marginRight: 3,
  },
  priceText: {
    fontSize: "18px",
    lineHeight: "21.09px",
    fontFamily: "Roboto",
    fontWeight: 700,
  },
  oldPriceText: {
    fontSize: "15px",
    lineHeight: "17.58px",
    fontFamily: "Roboto",
    fontWeight: 700,
    textDecorationLine: "line-through",
    color: "#808080",
    marginLeft: 40,
  },
  refundText: {
    fontSize: "12px",
    lineHeight: "14.06px",
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "#FA0000",
  },
  button: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectColor: {
    width: "300px",
    height: "34px",
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    borderWidth: "1px",
    backgroundColor: "rgba(196, 196, 196, 0)",
    alignItems: "center",
    justifyContent: "center",
  },
  selectText: {
    fontSize: "15px",
    lineHeight: "17.58px",
    fontFamily: "Roboto",
    fontWeight: 500,
  },
  buyButton: {
    width: "300px",
    height: "44px",
    borderRadius: "10px",
    borderWidth: "1px",
    backgroundColor: "#EE0A0A",
    borderColor: "#EE0A0A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buyText: {
    fontSize: "20px",
    lineHeight: "23.44px",
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "#F9F2F2",
  },
});
