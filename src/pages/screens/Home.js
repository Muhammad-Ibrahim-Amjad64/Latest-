/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const Home = () => {
  return (
    <View style={styles.container}>
    <View>
    <Text>Chat with Open AI</Text>
    </View>
    <View></View>   
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink'
  }
});
