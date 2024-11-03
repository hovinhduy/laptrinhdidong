import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState((141800).toLocaleString('vi-VN'))

  return (
    <View style={{flex:1}}>
      <View style={{flex:1.5}}>
        <View style={{flexDirection:'row', marginLeft:'10px', marginTop:'10px'}}>
          <Image source={{uri:'//bizweb.dktcdn.net/thumb/large/100/386/441/products/phuong-phap-giai-cac-dang-toan-thpt-nguyen-ham-tich-phan-va-ung-dung-1-2018-12-29-00-40-23.jpg?v=1595303965977', height:'127px', width:'104px'}}> 
          </Image>
          
          <View style={{flex:1, marginLeft:'20px', justifyContent:'space-around'}}>
            <Text style={{fontSize:'12px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px'}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{fontSize:'12px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px'}}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{fontSize:'18px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px', color:'#EE0D0D'}}>141.800 đ</Text>
            <Text style={{fontSize:'12px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px', color:'#808080', textDecorationLine: 'line-through'}}>141.800 đ</Text>
            
            <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style={{ flexDirection:'row'}}>
                <TouchableOpacity style={{width:'14.22px', height:'16px', backgroundColor:'#C4C4C4', marginRight:'12px', justifyContent:'center', alignItems:'center'}} onPress={() => {if(quantity > 1){
                  setQuantity(quantity - 1);
                  setTotalPrice(((quantity-1)*141800).toLocaleString('vi-VN'))
                }
                }}><Text style={{fontSize:'25px', top:'-25%'}}>-</Text>
                </TouchableOpacity>
                <Text style={{marginRight:'12px', fontSize:'15px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px'}}>{quantity}</Text>
                <TouchableOpacity style={{width:'14.22px', height:'16px', color:'', backgroundColor:'#C4C4C4', justifyContent:'center', alignItems:'center'}}
                onPress={() => {setQuantity(quantity + 1); 
                                setTotalPrice(((quantity+1)*141800).toLocaleString('vi-VN'));}}><Text style={{fontSize:'25px', top:'-25%'}}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={{fontSize:'12px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px', color:'#134FEC', marginRight:'10px', cursor:'pointer'}}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={{}}>
          <View style={{flex:0.5  , flexDirection:'row', marginLeft:'10px', alignItems:'center', marginTop:'20px'}}>
            <Text style={{fontSize:'12px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px', marginRight:'20px', cursor:'pointer'}}>Mã giảm giá đã lưu</Text>
            <Text style={{fontSize:'12px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px', color:'#134FEC', cursor:'pointer'}}>Xem tại đây</Text>
          </View>
          <View style={{flex:3.5, flexDirection:'row', justifyContent:'space-between', alignItems:'center', margin:'10px', marginTop:'25px'}}>
            <TouchableOpacity style={{flexDirection:'row', backgroundColor:'white', width:'190px', height:'45px', justifyContent:'start', alignItems:'center', borderWidth: '1px', borderColor:'#808080', borderRadius:'2px'}}>
              <TouchableOpacity style={{backgroundColor:'#F2DD1B', width:'32px', height:'16px', marginLeft: '10px'}}>
              </TouchableOpacity>
              <Text style={{marginLeft: '10px', fontSize:'18px', lineHeight:'21.09px', fontWeight:'700'}}>Mã giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'99px', height:'45px', backgroundColor:'#0A5EB7', justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:'18px', fontWeight:700, fontFamily:'Roboto', lineHeight: '23.44px', color:'white'}}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex:1.5}}>
        <View style={{flex:1, backgroundColor:'#C4C4C4', paddingTop:'10px',  paddingBottom:'10px'}}>
          <View style={{flex:1, backgroundColor:'white', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Text style={{fontSize:'12px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px', color:'#011627', cursor:'pointer'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={{fontSize:'12px', fontWeight:700, fontFamily:'Roboto', lineHeight: '14.06px', color:'#134FEC', cursor:'pointer'}}>Nhập tại đây?</Text>
          </View>
        </View>
        <View style={{flex:2, backgroundColor:'white'}}>
          <View style={{flex:1, backgroundColor:'white', flexDirection:'row',  alignItems:'center', justifyContent:'space-between', paddingLeft:'10px', paddingRight:'10px'}}>
            <Text style={{fontSize:'18px', fontWeight:700, fontFamily:'Roboto', lineHeight: '21.09px', color:'#011627'}}>Tạm tính</Text>
            <Text style={{fontSize:'18px', fontWeight:700, fontFamily:'Roboto', lineHeight: '21.09px', color:'#EE0D0D'}}>{totalPrice} đ</Text>
          </View>
          <View style={{flex:2, backgroundColor:'#C4C4C4'}}>
            
          </View>
        </View>
        <View style={{flex:2}}>
          <View style={{flex:1, flexDirection:'row', paddingLeft: '10px', paddingRight:'10px', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:'18px', fontWeight:700, fontFamily:'Roboto', lineHeight: '21.09px', color:'#808080'}}>Thành tiền</Text>
            <Text style={{fontSize:'20px', fontWeight:700, fontFamily:'Roboto', lineHeight: '23.44px', color:'#EE0D0D'}}>{totalPrice} đ</Text>
          </View>
          <View style={{flex:1, paddingBottom:'20px', paddingLeft:'20px', paddingRight:'20px', justifyContent: 'center', alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:'#E53935', width:'310px', height:'45px', borderRadius:'2px', justifyContent: 'center', alignItems:'center'}}> 
            <Text style={{color:'white', fontWeight:'700', fontSize:'20px', lineHeight:'23.44px'}}>TIẾN HÀNH ĐẶT HÀNG</Text> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;