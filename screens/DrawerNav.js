import React from 'react';
import {StyleSheet,
  View,
  Image,
  TextStyle,
  ScrollView,
  SafeAreaView,
  style, 
  TouchableOpacity,
  StatusBar, 
  Platform 
} from 'react-native';
import {Drawer, Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Container,
  Content, 
  Header,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Body,
  Button,
  Card, 
  CardItem
 } from 'native-base';

export function DrawerNav(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={{flex: 1}}>
         
       
        <DrawerItem
            style={{
              backgroundColor: '#94dfd8',
              fontfamily: 'sans-serif',
              fontSize: 180,
              height: 70,
              fontWeight: 'bold',
              marginLeft: 0,
              marginRight: -10,
              marginTop: -4,
            }}
            label="Hello. Sign In"
            onPress={() => {
              props.navigation.navigate('Sign In');
            }}
          /> 
 
          <DrawerItem
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
         
          <DrawerItem
            label="Shop by Category"
            onPress={() => {
              props.navigation.navigate('Category');
            }}
          />

        <DrawerItem
            label="Today's Deals"
            onPress={() => {
              props.navigation.navigate('Deals');
            }}
          />

        </Drawer.Section>
        
        <Drawer.Section style={{flex: 1}}>

          <DrawerItem
            label="Your Orders"
            onPress={() => {
              props.navigation.navigate('Orders');
            }}
          />

          <DrawerItem
            label="Buy Again"
            onPress={() => {
              props.navigation.navigate('BuyAgain');
            }}
          />

          <DrawerItem
            label="Your Wish List"
            onPress={() => {
              props.navigation.navigate('WishList');
            }}
          />

          <DrawerItem
            label="Your Account"
            onPress={() => {
              props.navigation.navigate('Account');
            }}
          />

          <DrawerItem
            label="Amazon Pay"
            onPress={() => {
              props.navigation.navigate('Pay');
            }}
          />

          <DrawerItem
            label="Try Prime"
            onPress={() => {
              props.navigation.navigate('Prime');
            }}
          />

          <DrawerItem
            label="Sell on Amazon"
            onPress={() => {
              props.navigation.navigate('Sell');
            }}
          />
       
          <DrawerItem
            label="Programs and features                 >"
            onPress={() => {
              props.navigation.navigate('Program');
            }}
          />
         
    </Drawer.Section>

    <Drawer.Section style={{flex: 1}}>
       
         <View style={{flex: 1}}>
         <TouchableOpacity
        onPress={() => props.navigation.navigate('FunZone')}>  
            <Image
              style={{flex: 1, height: 60, width: 260}}
                source={require('../assets/funzone.jpg')}   
            />
             </TouchableOpacity> 
          </View>        
     
    </Drawer.Section>

    <Drawer.Section style={{flex: 1}}>

          <DrawerItem
            label="Language A/क"
            onPress={() => {
              props.navigation.navigate('Language');
            }}
          />

          <DrawerItem
            label="Your Notifications"
            onPress={() => {
              props.navigation.navigate('Notification');
            }}
          />

          <DrawerItem
            label="Settings                                           >"
            onPress={() => {
              props.navigation.navigate('Settings');
            }}
          />

          <DrawerItem
            label="Customer Service"
            onPress={() => {
              props.navigation.navigate('CustomerService');
            }}
          />

      </Drawer.Section>
    </DrawerContentScrollView>
  </View>
  );
}