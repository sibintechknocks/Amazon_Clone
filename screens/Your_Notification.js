import React, {Component} from 'react';
import {StyleSheet,
  View,
  Image,
  TextStyle,
  ScrollView,
  SafeAreaView,
  style, 
  Text,
  TouchableOpacity,
  StatusBar, 
  Platform 
} from 'react-native';
import {Input, Content, Footer, Container,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';
import FeatherI from 'react-native-vector-icons/Feather';

export default class Your_Notification extends Component {
  render() {
    return (
      <>
      <StatusBar backgroundColor="#66ccce" barStyle="dark-content" />

      <Content style={{flex: 1}}>

<View>
<LinearGradient 
    colors={['#84d8e3', '#a5e6d0']}
    start={{x: 0, y: 1}}
    end={{x: 1, y: 1}}>
    <View style={{height: 60, flexDirection: 'column'}}>
      <View style={{flexDirection: 'row', height: 60}}>
          
        <TouchableOpacity                     //Menu sidebar
            onPress={() =>
            this.props.navigation.dispatch(
            DrawerActions.toggleDrawer(),
            )}>
            <FeatherI
              name="menu"
              size={25}
              color="black"
              style={{
              marginTop: 17,
              marginLeft: 15,
              }}/>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
        <Image                                  //Logo
          resizeMode="contain"
          style={{height: 65, marginTop: 8, marginRight:20}}
          source={require('../assets/logo.jpeg')}
        />
         </TouchableOpacity>      

        <FeatherI
          name="search"
          size={25}
          color="black"
          style={{
          marginTop: 20,
          marginLeft: '2%',
          }}/>
        <FeatherI
          name="mic"
          size={25}
          color="black"
          style={{
          marginTop: 20,
          marginLeft: '5%',
          }}/>

        <FeatherI
          name="shopping-cart"
          size={25}
          color="black"
          style={{
          marginTop: 20,
          marginLeft: '5%',
          }}/>
      
      </View>

    </View>
  </LinearGradient>    
</View>


      <Content style={{
        backgroundColor: '#f6f6f6',
        paddingBottom: 30, 
      }}>
      <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Home')}>   
                 
        <Text style={{fontSize: 25, color:'cyan', padding: 19, paddingHorizontal:23, marginTop:200, marginLeft:90, fontWeight:'bold' }}>
          Your Notification
        </Text>
      </TouchableOpacity> 
      </View>
      </Content>
      </Content>
      </>
    );
  }
}