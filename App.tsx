import React, {useState} from 'react';
import {View, TextInput, Button, Text, ScrollView} from 'react-native';
import {generateResponse} from './src/pages/screens/ChatGptScreen';
// import Login from './src/pages/Auth/Login';
import Signup from './src/pages/Auth/Signup';

//  Image Upload with firebase without expo
// https://www.youtube.com/watch?v=9nBk_WVTiJQ

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Auth/Login';
import Home from './src/pages/screens/Home';
import About from './src/pages/screens/About';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    if (!userInput) return;

    setMessages(prevMessages => [...prevMessages, `User: ${userInput}`]);
    const botResponse = await generateResponse(userInput);
    setMessages(prevMessages => [...prevMessages, `ChatGPT: ${botResponse}`]);
    setUserInput('');
  };

  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  //   const DrawerNavigation = () => {
  //     return (

  //     );
  //   };

  //   const ChatWithAI = () => {
  //     return (

  //     );
  //   };
  return (
    // CHAT GPT SCREEN

    <>
      <View>
        <ScrollView>
          {messages.map((msg, index) => (
            <Text key={index}>{msg}</Text>
          ))}
        </ScrollView>
        <View>
          <TextInput
            value={userInput}
            onChangeText={setUserInput}
            placeholder="Type a message"
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </View>
      <NavigationContainer>
        <Tab.Navigator>
          {/* <Tab.Screen name="AIChat" component={ChatWithAI}></Tab.Screen> */}
          <Tab.Screen name="Login" component={Login}></Tab.Screen>
          {/* <Tab.Screen name="drawer" component={DrawerNavigation}></Tab.Screen> */}
        </Tab.Navigator>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
          <Drawer.Screen name="About" component={About}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
      {/* <Signup></Signup> */}
    </>
    //  LOGIN SCREEN
  );
};

export default App;
