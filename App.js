//Main Program to run

import {Component} from 'react';
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Importing screens

import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import Password from './screens/Password';
import CreateAccount from './screens/CreateAccount';
import {DrawerNav} from './screens/DrawerNav';
import Language from './screens/Language';
import Prime from './screens/Prime';
import Programs_and_features from './screens/Programs_and_features';
import Sell_on_Amazon from './screens/Sell_on_Amazon';
import Amazon_Pay from './screens/Amazon_Pay';
import Your_Account from './screens/Your_Account';
import Your_Wish_List from './screens/Your_Wish_List';
import Buy_Again from './screens/Buy_Again';
import Your_Orders from './screens/Your_Orders';
import Todays_Deals from './screens/Todays_Deals';
import Customer_Service from './screens/Customer_Service';
import Settings from './screens/Settings';
import Your_Notification from './screens/Your_Notification';
import Fun_Zone from './screens/Fun_Zone';
import Shop_by_Category from './screens/Shop_by_Category';

const Drawer = createDrawerNavigator();

//Main class

export default class app extends Component {
  render() {
    return (
      
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerNav{...props} />}>
          
          <Drawer.Screen name="Sign In" component={SignIn} />
          <Drawer.Screen name="Passwords" component={Password} />
          <Drawer.Screen name="CreateAccount" component={CreateAccount} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Language" component={Language} />
          <Drawer.Screen name="Prime" component={Prime} />
          <Drawer.Screen name="Program" component={Programs_and_features} />
          <Drawer.Screen name="Sell" component={Sell_on_Amazon} />
          <Drawer.Screen name="Pay" component={Amazon_Pay} />
          <Drawer.Screen name="Account" component={Your_Account} />
          <Drawer.Screen name="WishList" component={Your_Wish_List} />
          <Drawer.Screen name="BuyAgain" component={Buy_Again} />
          <Drawer.Screen name="Orders" component={Your_Orders} />
          <Drawer.Screen name="Deals" component={Todays_Deals} />
          <Drawer.Screen name="CustomerService" component={Customer_Service} /> 
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Notification" component={Your_Notification} />
          <Drawer.Screen name="FunZone" component={Fun_Zone} />
          <Drawer.Screen name="Category" component={Shop_by_Category} />
          
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
