import * as React from 'react';
import {Component} from 'react';
import {Input, Content, Footer, CheckBox, Body} from 'native-base';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  View,
  Text,
  Image,
  StatusBar, StyleSheet, Dimensions,
  TouchableOpacity,
  Button,
  TouchableOpacityBase,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';

//Main class

export default class Password extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  state = {
    checked: 'true',
  };

  render() {

    const { name } = this.state;
    const {checked} = this.state;
    return (
    <>
    <View style={{height:Dimensions.get('window').height}}>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    
        <View>
          <LinearGradient colors={['#fefefe', '#e0e0e0']}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 55,
              }}>
               <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Image                                  //Logo
                      resizeMode="contain"
                      style={{height: 35, marginTop: 8, marginRight:20}}
                      source={require('../assets/amazonlogo.png')}
                  />
                </TouchableOpacity>  
            </View>
          </LinearGradient>
        </View>
        <Content style={{
            backgroundColor: '#f6f6f6',
            paddingBottom: 20,
          }}>
          <View>
            <Text style={{fontSize: 25, padding: 19, paddingHorizontal:21,  marginLeft:'2%', fontWeight:'bold' }}>
             Sign-In
              </Text>
          </View>
           
              <View
                style={{
                  height: 55,
                  width: '88%',
                }}>

                 <TextInput
                value={name}
                onChangeText={(name) => this.setState({name: name})}
                placeholder={'Amazon password'}
                style={styles.input}
                secureTextEntry={true} 
                />

              </View>

              <View style={{
                  marginTop: 5,}}>
              <CheckBox  style={{marginLeft: '5%',
                  marginTop: '6%',}}
                    checked={true} />
              <Body>
                <Text  style={{
                  marginRight: '40%',marginTop: '-5%',}}>
                  Show password
                </Text>
                <Text style={{ color: '#377fbb',fontSize: 17,marginTop:'-5%', marginLeft: '40%'}}>
                    Forgot password?
                  </Text>
              </Body>
            </View>
                  

              <View
                style={{
                  alignItems: 'center',
                  justifyContent:'center',
                  height: 45,
                  width: '74%',
                  borderColor: '#b29242',
                  borderWidth: 1,
                  borderRadius:5,
                  marginTop: '6%',
                  marginLeft: '10%',
                  marginBottom: 20,
                 
                }}>
                <LinearGradient colors={['#f6e0aa', '#dcb146']}>
                  <View
                    style={{
                      height: 38,
                      width: 275,
                      marginTop: 8,
                      marginLeft: '9%',
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: '#b19212',
                    }}>
                     <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Text style={{fontSize: 18,marginTop:3,marginRight:20}}>Sign-In</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
            </View>
         
        </Content>
        <Footer
          style={{backgroundColor: '#f0f0f0', flexWrap: 'wrap', height: 250,marginLeft:-20}}>
          <Text
            style={{
              color: '#377fbb',
              fontSize: 17,
              marginRight: 10,
              marginLeft: 25,
              marginTop:20,
            }}>
            Conditions of Use
          </Text>
          <Text style={{color: '#377fbb', fontSize: 17, marginRight: 25, marginTop:20}}>
            Privacy Notice
          </Text>
          <Text style={{color: '#377fbb', fontSize: 17, marginRight: 25,marginTop:20}}>
            Help
          </Text>
          <View
            style={{marginTop: 6, flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeI
              name="copyright"
              size={8}
              color="#797979"
              style={{}}
            />
            <View style={{marginLeft: 5}} />
            <Text style={{color: '#797979', fontSize: 15, marginRight: 5}}>
            1996-2021, Amazon.com, Inc. or its affiliates
            </Text>
          </View>
        </Footer>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 330,
    height: 25,
    padding: 10,
    marginTop: '1%',
    marginLeft:'7%',
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    }
})