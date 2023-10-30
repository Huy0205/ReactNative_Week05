import React,{ useState } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

export default function ({navigation}) {
  var [img, setImg] = useState(require("./assets/vs_black.png"));

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={img} style={styles.img} resizeMethod="contain" />
        <View style={styles.topRight}>
          <Text style={styles.font15Black}>Điện Thoại Vsmart Joy 3<br></br>Hàng chính hãng</Text>
          <Text style={styles.font15Black}>Màu: đỏ</Text>
          <Text style={styles.font15Black}>Cung cấp bởi Tiki Tradding</Text>
          <Text style={styles.font18BlackBold}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.center}>
        <View style={styles.lblSelectColor}>
          <Text style={styles.font18Black}>Chọn một màu bên dưới:</Text>
        </View>
        <View style={styles.wrapperBtnSelectColor}>
          <Pressable
            style={[styles.btnSelectColor, { backgroundColor: "#C5F1FB" }]}
            onPress={() => {
              setImg(require("./assets/vs_silver.png"));
            }}
          ></Pressable>
          <Pressable
            style={[styles.btnSelectColor, { backgroundColor: "#F30D0D" }]}
            onPress={() => {
              setImg(require("./assets/vs_red.png"));
            }}
          ></Pressable>
          <Pressable
            style={[styles.btnSelectColor, { backgroundColor: "#000000" }]}
            onPress={() => {
              setImg(require("./assets/vs_black.png"));
            }}
          ></Pressable>
          <Pressable
            style={[styles.btnSelectColor, { backgroundColor: "#234896" }]}
            onPress={() => {
              setImg(require("./assets/vs_blue.png"));
            }}
          ></Pressable>
        </View>
        <View style={styles.wrapperBtnXong}>
          <Pressable style={styles.btnXong} onPress={()=>navigation.navigate('Screen1', img)}>
            <Text style={styles.font20WhiteBold}>XONG</Text>
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
    flex: 3,
    flexDirection: "row",
    paddingVertical: 10,
  },
  img: {
    backgroundColor: "#C4C4C4",
    width: 130,
    height: 170,
  },
  topRight:{
    justifyContent:'space-between',
    paddingRight: 50,
    paddingLeft: 15,
  },
  center: {
    flex: 8,
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  lblSelectColor:{
    flex: 1,
    justifyContent: "center",
  },
  wrapperBtnSelectColor: {
    flex: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btnSelectColor: {
    width: 75,
    height: 75,
  },
  wrapperBtnXong: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10
  },
  btnXong: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(0deg, rgba(25, 82, 226, 0.58), rgba(25, 82, 226, 0.58))",
    borderRadius: 8,
  },
  font15Black:{
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: 400,
  },
  font18Black:{
    fontFamily: "Roboto",
    fontSize: 18,
  },
  font18BlackBold:{
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
  },
  font20WhiteBold:{
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  }
});
