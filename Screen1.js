import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("./assets/vs_black.png")}
          style={styles.imgTop} resizeMethod="contain"
        ></Image>
      </View>
      <View style={styles.bottom}>
        <View style={styles.productName}>
          <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        <View style={styles.rating}>
          <View style={styles.wrapperStar}>
            <Image
              source={require("./assets/star.png")}
              style={styles.star}
            ></Image>
            <Image
              source={require("./assets/star.png")}
              style={styles.star}
            ></Image>
            <Image
              source={require("./assets/star.png")}
              style={styles.star}
            ></Image>
            <Image
              source={require("./assets/star.png")}
              style={styles.star}
            ></Image>
            <Image
              source={require("./assets/star.png")}
              style={styles.star}
            ></Image>
          </View>
          <View style={styles.wrapperTextRating}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View style={styles.price}>
          <View style={styles.leftPrice}>
            <Text>1.790.000 đ</Text>
          </View>
          <View style={styles.rightPrice}>
            <Text>1.790.000 đ</Text>
          </View>
        </View>
        <View style={styles.hoanTien}>
          <Text style={styles.textHoanTien}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image
            source={require("./assets/chamHoi.png")}
            style={styles.chamHoi}
          ></Image>
        </View>
        <Pressable style={styles.btnSelectColor}>
          <Text>4 MÀU-CHỌN MÀU</Text>
        </Pressable>
        <View style={styles.wrapperBtnBuy}>
          <Pressable style={styles.btnBuy}>
            <Text>CHỌN MUA</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgTop: {
    width: 280,
    height: 350,
  },
  bottom: {
    flex: 1,
    padding: 15,
  },
  productName: {
    flex: 1,
  },
  rating: {
    flex: 1,
    flexDirection: "row",
  },
  wrapperStar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  star: {
    width: 25,
    height: 28,
  },
  wrapperTextRating: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
  },
  price: {
    flex: 1,
    flexDirection: "row",
  },
  leftPrice: {
    flex: 1,
  },
  rightPrice: {
    flex: 1,
  },
  hoanTien: {
    flex: 1,
    flexDirection: "row",
  },
  textHoanTien: {
    color: "red",
    marginRight: 5,
  },
  chamHoi: {
    width: 15,
    height: 15,
  },
  btnSelectColor: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperBtnBuy:{
    flex: 3,
    justifyContent: 'flex-end',

  },
  btnBuy:{
    height: '50%',
    backgroundColor:'red',
    borderRadius:8,
    justifyContent: 'center',
    alignItems:'center'
  }
});
