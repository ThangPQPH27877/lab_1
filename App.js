import React,{Component, useState} from 'react';
import { StyleSheet, Text, View,style, Button, TextInput } from 'react-native';


export default function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [name,setname] = useState('');
  const [mota,setmota] = useState('');
  return (
    <View style={styles.container}>
      
      <View  style={styles.top}>
      <Text>Họ và tên : Phạm Quang Thắng </Text>
      <Text>MSV : PH27877</Text>
      </View>
      <View style={styles.button}>
        <Button 
        title='Thêm mới'
        onPress={() => setShowStatus(!showStatus)}
        />
        {
        showStatus
        ?
        <>
        <TextInput
        onChangeText={(txt) => setname(txt)}
        value = {name}
        placeholder = 'Nhập name'
        />
        <TextInput
        onChangeText={(txt) => setmota(txt)}
        value = {mota}
        placeholder = 'Nhập mô tả'
        />
       
        <Button
        title='Lưu'
        onPress={() => setShowStatus(false)}
        />
        </>
        : null
        }

      </View>
       
      <View>
        <View style = {styles.textbottom}>
        
          <View style = {styles.textbottommota}>
          <Text>Họ và Tên : Lê Thị Hà Ly</Text>
          <Text>Mô tả : Xinh đẹp tuỵt vời</Text>
          </View>
      
        </View>
        <View style = {styles.textbottom}>
        
          <View style = {styles.textbottommota}>
            <Text>Họ và Tên : Lê Quang Đức</Text>
            <Text>Mô tả : Đức xinh gái </Text>
          </View>
        
        </View>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#FFFFE0',
  },
  top : {
    marginTop : 50
  },
  button: {
    marginTop : 50,
    backgroundColor : '#FFEFD5',
    marginLeft : 10,
    marginRight : 10,
    borderWidth : 2,
    borderColor : '#B0C4DE'
    
  },

  textbutton : {
    fontSize : 150,
    color : 'black'

  },
  textbottom : {
    flexDirection : "row"
  },
  textbottommota : {
    width: 400,
    textAlign: 'center',
    flexDirection : 'column',
    paddingTop : 30,
    paddingLeft : 15,
    marginTop: 10,

  }
  });