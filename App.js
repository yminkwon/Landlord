import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>대충 어플 이름</Text>
      </View>
      <View style={styles.nav}>
        <Text style={styles.navText}>Buildings</Text>
        <Text style={styles.navText}>Payment Status</Text>
        <Text style={styles.navText}>Summary</Text>
        <Text style={styles.navText}>Setting</Text>
      </View>
      <View style={styles.list}>
        <View style={styles.listSub}>
          <Text>건물1</Text>
          <Text>건물2</Text>
          <Text>건물3</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title:{
    flex:1,
    alignItems:'center',
    paddingTop: 60,
    paddingLeft:10,
    paddingRight:10,
  },
  titleText:{
    fontSize:20,
    fontWeight:'bold',
  },
  navText:{
    fontSize:14,
    fontWeight:'bold',
  },
  nav:{
    flexDirection: "row",
    flex:1,
    justifyContent:'space-around'
  },
  list:{
    margin : 20,
    padding: 10,
    justifyContent:'flex-start',
    alignItems:'center',
    flex:13,
    backgroundColor:'#6699ff',
    
    

  },
});
