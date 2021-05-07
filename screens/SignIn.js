//Sign In Screen of Amazon App

import * as React from 'react';
import {Component} from 'react';
import {Input, Content, Footer, Container} from 'native-base';
import {RadioButton,TextInput} from 'react-native-paper';

import {
  View,
  Text,
  Image,
  StatusBar, StyleSheet,
  TouchableOpacity, SafeAreaView,
  Button, Dimensions,
  TouchableOpacityBase,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';

//Main class

export default class SignIn extends Component {
  state = {
    checked: 'second',
  };

  constructor(props) {
    super(props);
  }
 
  render() {

    
    const {checked} = this.state;
    const { name } = this.state;

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
                height: 70,
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
            paddingBottom: 30,
          }}>
          <View>
            <Text style={{fontSize: 25, padding: 19, paddingHorizontal:5,  marginLeft:'5%', fontWeight:'bold' }}>
              Welcome
              </Text>
          </View>

          <View style={{paddingHorizontal: 20}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                width: 300,
                flexDirection: 'row',
                marginLeft: '1%',
                alignItems: 'center',
                backgroundColor: 'light-grey',
                height: 60,
              }}>
            <View style={{marginLeft: 20}}/>

            <RadioButton
                value="first"
                color="#e77600"
                uncheckedColor="#babbbb"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => this.props.navigation.navigate('CreateAccount')}
              />

              
              <Text style={{fontWeight: 'bold', fontSize: 19}}>Create account.</Text>
              <Text style={{marginLeft: 3}}>New to amazon</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '1%',
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#e0e0e0',
                width: 300,
                borderTopColor: 'white',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 20,
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                  
                 <RadioButton
                  value="second"
                  color="#e77600"
                  uncheckedColor="#babbbb"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: 'second'});
                  }}
                />

                <Text style={{fontWeight: 'bold', fontSize: 19}}>Sign-In.</Text>
                <Text style={{marginLeft: 3}}>Already a customer?</Text>
              </View>

              <View
                style={{
                  height: 10,
                  width: '90%',
                }}>
              
              <TextInput
                value={name}
                onChangeText={ (name) => this.setState({name: name})}
               
                placeholder={'Mobile number or Email'}
                style={styles.input}
              />

              </View>
              
              <View
                style={{
                  alignItems: 'center',
                  height: 45,
                  width: '88%',
                  borderColor: '#b29242',
                  borderWidth: 1,
                  marginTop: 80,
                  marginLeft: 15,
                  marginBottom: 20,
                }}>
                <LinearGradient colors={['#f6e0aa', '#dcb146']}>
                  <View
                    style={{
                      height: 38,
                      width: 260,
                      marginTop: 5,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: '#b19212',
                    }}>
                     <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Passwords')}>
                      <Text style={{fontSize: 18}}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </View>


              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingLeft: 28,
                  fontSize: 10,
                  marginTop:10,
                  marginBottom: 22,
                }}>
                <Text style={{marginRight: 3}}>
                  By continuing, you agree to Amazon's
                </Text>
                <Text style={{color: '#377fbb'}}>Conditions of Use</Text>
                <Text style={{marginLeft: 4}}>and</Text>
                <Text style={{color: '#377fbb', marginLeft: 4}}>
                  Privacy Notice.
                </Text>
              </View>
            </View>
          </View>
        </Content>
        
        
        <Footer
          style={{backgroundColor: '#f6f6f6', flexWrap: 'wrap', height: 200,marginLeft:-20}}>
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
          <Text style={{color: '#377fbb', fontSize: 17, marginRight: 10, marginTop:20}}>
            Privacy Notice
          </Text>
          <Text style={{color: '#377fbb', fontSize: 17, marginRight: 10,marginTop:20}}>
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
    width: 270,
    height: 32,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  }
})