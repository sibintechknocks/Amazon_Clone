import {Component} from 'react';
import * as React from 'react';

import {RadioButton} from 'react-native-paper';
import {Input, Content, Footer, CheckBox, Body} from 'native-base';
import {
  View,
  Text,
  Image, 
  StatusBar,
  TouchableOpacity,
  Button, Dimensions,
  TouchableOpacityBase,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';



export default class CreateAccount extends Component {
  state = {
    checked: 'first',
  };
  render() {
    
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

        <Content
          style={{
            backgroundColor: '#f1f1f1',
            paddingBottom: 5,
          }}>
          <View>
            <Text style={{fontSize: 22, padding: 12,marginHorizontal: 8,fontWeight:'bold'
          }}>Welcome</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderWidth: 2,
              borderColor: '#afafaf',
              marginHorizontal: 18,
              flexDirection: 'column',

            }}>
            <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:8,marginTop:8,}}>
           
            <RadioButton
                value="first"
                color="#e77600"
                uncheckedColor="#babbbb"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => this.props.navigation.navigate('CreateAccount')}
              />

              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                Create account.
              </Text>
              <Text style={{marginLeft: 3}}>New to amazon</Text>
            </View>
            <View style={{paddingHorizontal: 12, marginBottom: 10}}>
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#bfbfbf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                  marginTop:10,
                }}
                placeholderTextColor="#9d9d9d"
                placeholder="Name"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,

                flex: 1,
              }}>
              <Input
                style={{
                  flex: 1,
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                  marginLeft: 12,
                  marginRight: 10,
                  backgroundColor: '#e9ebee',
                }}
                placeholderTextColor="black"
                placeholder="IN +91"
              />
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                  flex: 3,
                  marginRight: 12,
                }}
                placeholderTextColor="#9c9c9c"
                placeholder="Mobile number"
              />
            </View>
            <View style={{paddingHorizontal: 12, marginBottom: 10}}>
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                }}
                placeholderTextColor="#9c9c9c"
                placeholder="Email (optional)"
              />
            </View>
            <View style={{paddingHorizontal: 12, marginBottom: 7}}>
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                }}
                placeholderTextColor="#9c9c9c"
                placeholder="Set password"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 12,
                marginBottom: 5,
              }}>
              <Text
                style={{color: '#5fa2be', fontStyle: 'italic',marginRight: 7, marginLeft: 5}}>
                i
              </Text>
              <Text style={{flexWrap: 'wrap'}}>
                Passwords must be atleast 6 characters.
              </Text>
            </View>
            <View style={{
                  marginTop: 5,}}>
              <CheckBox checked={true} />
              <Body>
                <Text  style={{
                  marginRight: '40%',marginTop: '-5%',}}>
                  Show password
                </Text>
              </Body>
            </View>

            <View
                style={{
                  alignItems: 'center',
                  height: 45,
                  width: '70%',
                  borderColor: '#b29242',
                  borderWidth: 1,
                  marginTop: 8,
                  marginLeft: '15%',
                  marginBottom: 20,
                }}>
                <LinearGradient colors={['#f6e0aa', '#dcb146']}>
                  <View
                    style={{
                      height: 38,
                      width: 253,
                      marginTop: 5,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: '#b19212',
                    }}>
                    <TouchableOpacity>
                      <Text style={{fontSize: 16,marginTop:3,marginRight:20}}
                      >Verify mobile number</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingLeft: 19,
                  fontSize: 10,
                  marginTop:-5,
                  marginBottom: 25,
                }}>
                <Text style={{marginRight: 5}}>
                  By creating an account or logging in, you agree to Amazon's
                </Text>
                <Text style={{flexDirection:'row', 
                  marginTop:-19, marginLeft: '23%', color: '#377fbb'}}>
                  Conditions of Use</Text>
                <Text style={{marginLeft: 4,marginTop:-19, marginLeft: 5,}}>and</Text>
                <Text style={{color: '#377fbb', marginLeft: 5,marginTop:-19, }}>
                  Privacy Policy.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 12,
                  alignItems: 'center',
                  marginTop:1,
                  marginBottom:5,
                }}>
                 <RadioButton
                  value="second"
                  color="#e77600"
                  uncheckedColor="#babbbb"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                   onPress={() => this.props.navigation.navigate('Sign In')}
                />
                <Text style={{fontWeight: 'bold', fontSize: 19}}>Sign-In.</Text>
                <Text style={{marginLeft: 3,marginTop:3}}>Already a customer?</Text>
              </View>
          </View>
        </Content>

        <Footer
          style={{backgroundColor: '#f3f3f3', flexWrap: 'wrap', height: 80}}>
          <Text
            style={{
              color: '#377fbb',
              fontSize: 16,
              marginTop:10,
              marginRight: 25,
              marginLeft: 20,
              
            }}>
            Conditions of Use
          </Text>
          <Text style={{color: '#377fbb', fontSize: 16,  marginTop:10,marginRight: 25}}>
            Privacy Notice
          </Text>
          <Text style={{color: '#377fbb', fontSize: 16,  marginTop:10,marginRight: 25}}>
            Help
          </Text>
          <View
            style={{marginTop: 5,marginBottom:5, flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeI
              name="copyright"
              size={12}
              color="#797979"
              style={{}}
            />
            <View style={{marginLeft: 5,marginBottom:10}} />
            <Text style={{color: '#797979', fontSize: 14, marginRight: 5}}>
            1996-2021, Amazon.com, Inc. or its affiliates
            </Text>
          </View>
        </Footer>
        </View>
      </>
    );
  }
}