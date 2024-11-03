import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function selectColorScreen({navigation}) {
  const [selectedColor, setSelectedColor] = useState('xanh');
  const [imageSource, setImageSource] = useState(require('../assets/vs_blue.png'));

  const handleColorPress = (color, image) => {
    setSelectedColor(color),
    setImageSource(image)
  }

  const handleDonePress = () => {
    navigation.navigate('Home', { selectedColor, imageSource });
  };
  

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row', flex:1}}>
        <Image style={styles.productImage} source={imageSource}>
        </Image>
        <View>
          <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 <br></br>Hàng chính hãng</Text>
          <Text style={styles.productName}>Màu: 
            <Text style={{fontWeight:800}}> {selectedColor}</Text>
          </Text>
          <Text style={styles.productName}>Cung cấp bởi 
            <Text style={{fontWeight:800}}> Tiki Tradding</Text>
          </Text>
          <Text style={[styles.productName, {fontWeight:800, fontSize: 17}]}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={{backgroundColor:'#C4C4C4', flex:4, marginTop: 20}}>
        <Text style={styles.selectColorText}>Chọn một màu bên dưới:</Text>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity 
            onPress={() => handleColorPress('xanh',require('../assets/vs_blue.png'))} 
            style={[styles.color, {backgroundColor:'#C5F1FB'}]}>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleColorPress('đỏ',require('../assets/vs_red.png'))}
            style={[styles.color, {backgroundColor:'#F30D0D'}]}>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => handleColorPress('đen',require('../assets/vs_black.png'))}
            style={[styles.color, {backgroundColor:'#000000'}]}>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => handleColorPress('bạc',require('../assets/vs_silver.png'))}
            style={[styles.color, {backgroundColor:'#234896'}]}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.done} onPress={handleDonePress}>
          <Text style={styles.doneText}>XONG</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productImage:{
    width: '80px',
    height: '100px',
    marginTop: 5,
    marginLeft: 10
  },
  productName:{
    marginLeft: 15,
    marginTop: 5,
    fontSize: '15px',
    lineHeight: '17.58px',
    fontFamily: 'Roboto',
    fontWeight: 500
  },
    selectColorText:{
    fontSize: '18px',
    lineHeight: '21.09px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    paddingTop: 10,
    paddingLeft: 15
  },
  color:{
    width: '75px',
    height: '70px',
    cursor: 'pointer',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
    elevation: 4,
    marginTop: 10
  },
  done:{
    width: '300px',
    height: '44px',
    borderRadius: '10px',
    borderWidth: '1px',
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
    borderColor: '#CA1536',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
    elevation: 4,
    
  },
  doneText:{
    fontSize: '20px',
    lineHeight: '23.44px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: '#F9F2F2'
  }
});
