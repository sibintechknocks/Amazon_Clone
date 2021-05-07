import * as React from 'react';
import {Component} from 'react';

import {StyleSheet,
        View,
        Image,
        TextStyle,
        ScrollView,
        SafeAreaView,
        style, 
        Text,
        TouchableOpacity, Dimensions,
        StatusBar, 
        Platform 
      } from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
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

import FeatherI from 'react-native-vector-icons/Feather';
import {RadioButton} from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';

export default class Language extends Component {
    state = {
        checked: 'first',
      };
  render() {
    const {checked} = this.state;
    return (
   
        <>
        <View style={{height:Dimensions.get('window').height}}>
        <StatusBar backgroundColor="#66ccce" barStyle="dark-content" />

<View>
<LinearGradient 
    colors={['#84d8e3', '#a5e6d0']}
    start={{x: 0, y: 1}}
    end={{x: 1, y: 1}}>
    <View style={{height: 68, flexDirection: 'column'}}>
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
          style={{height: 60, marginTop: 8, marginRight:20}}
          source={require('../assets/logo.jpeg')}
        />
         </TouchableOpacity>      

        <FeatherI
          name="search"
          size={25}
          color="black"
          style={{
          marginTop: 20,
          marginLeft: '8%',
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

<Content style={{flex: 1}}>
          <Card>
          <ScrollView                                       //Scrolling contents
          contentInsetAdjustmentBehavior="automatic">
            <CardItem header>
              <Text style={{fontSize: 19,marginLeft:'2%',}}> Choose your preferred language</Text>
            </CardItem>

            <CardItem>
                <View style={{paddingHorizontal: 10}}>
                    <View
                        style={{
                        borderWidth: 0.5,
                        borderColor: 'grey',
                        width: 320,
                        flexDirection: 'row',
                        marginLeft: '1%',
                        alignItems: 'center',
                        backgroundColor: 'light-grey',
                        height: 50,
                        }}>
                        

                    <Text style={{ fontSize: 19, margin:7, marginRight: '60%'}}>
                        English
                    </Text>
                
                    <RadioButton 
                        value="first"
                        color="#e77600"
                        uncheckedColor="#babbbb"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => {
                            this.setState({checked: 'first'});
                          }}
                    />
                

                </View>

                <View
                        style={{
                        borderWidth: 0.5,
                        borderColor: 'grey',
                        width: 320,
                        flexDirection: 'row',
                        marginLeft: '1%',
                        alignItems: 'center',
                        backgroundColor: 'light-grey',
                        height: 50,
                        }}>
                        

                    <Text style={{ fontSize: 19, margin:7, marginRight: '70%'}}>
                         हिंदी
                    </Text>
                
                    <RadioButton 
                        value="second"
                        color="#e77600"
                        uncheckedColor="#babbbb"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => {
                            this.setState({checked: 'second'});
                          }}
                    />
               
                </View>

                <View
                        style={{
                        borderWidth: 0.5,
                        borderColor: 'grey',
                        width: 320,
                        flexDirection: 'row',
                        marginLeft:'1%',
                        alignItems: 'center',
                        backgroundColor: 'light-grey',
                        height: 50,
                        }}>
                       

                    <Text style={{ fontSize: 19, margin:7, marginRight: '63%'}}>
                        தமிழ்
                    </Text>
               
                    <RadioButton 
                        value="third"
                        color="#e77600"
                        uncheckedColor="#babbbb"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => {
                            this.setState({checked: 'third'});
                          }}
                    />
                
                </View>

                <View
                        style={{
                        borderWidth: 0.5,
                        borderColor: 'grey',
                        width: 320,
                        flexDirection: 'row',
                        marginLeft:'1%',
                        alignItems: 'center',
                        backgroundColor: 'light-grey',
                        height: 50,
                        }}>
                        

                    <Text style={{ fontSize: 19, margin:7, marginRight: '54%'}}>
                        മലയാളം
                    </Text>
               
                    <RadioButton 
                        value="fourth"
                        color="#e77600"
                        uncheckedColor="#babbbb"
                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                        onPress={() => {
                            this.setState({checked: 'fourth'});
                          }}
                    />
               
                </View>

                <View
                        style={{
                        borderWidth: 0.5,
                        borderColor: 'grey',
                        width: 320,
                        flexDirection: 'row',
                        marginLeft:'1%',
                        alignItems: 'center',
                        backgroundColor: 'light-grey',
                        height: 50,
                        }}>
                       

                    <Text style={{ fontSize: 19, margin:7, marginRight: '63%'}}>
                        తెలుగు
                    </Text>
                
                    <RadioButton 
                        value="fifth"
                        color="#e77600"
                        uncheckedColor="#babbbb"
                        status={checked === 'fifth' ? 'checked' : 'unchecked'}
                        onPress={() => {
                            this.setState({checked: 'fifth'});
                          }}
                    />
               
                </View>

                <View
                        style={{
                        borderWidth: 0.5,
                        borderColor: 'grey',
                        width: 320,
                        flexDirection: 'row',
                        marginLeft:'1%',
                        alignItems: 'center',
                        backgroundColor: 'light-grey',
                        height: 50,
                        }}>
                       

                    <Text style={{ fontSize: 19, margin:7, marginRight: '66%'}}>
                        ಕನ್ನಡ
                    </Text>
                
                    <RadioButton 
                        value="sixth"
                        color="#e77600"
                        uncheckedColor="#babbbb"
                        status={checked === 'sixth' ? 'checked' : 'unchecked'}
                        onPress={() => {
                            this.setState({checked: 'sixth'});
                          }}
                    />
                
                </View>


            </View>
        </CardItem>

       
        <View
                style={{
                  alignItems: 'center',
                  height: 45,
                  width: '70%',
                  borderColor: '#b29242',
                  borderWidth: 1,
                  marginTop: '5%',
                  marginLeft: '10%',
                  marginBottom: '5%',
                }}>
                <LinearGradient colors={['#f6e0aa', '#dcb146']}>
                  <View
                    style={{
                      height: 38,
                      width: 290,
                      marginTop: 5,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: '#b19212',
                    }}>
                     <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Text style={{fontSize: 18}}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </View>

                <View
                        style={{
                        borderWidth: 0.5,
                        borderColor: 'white',
                        width: 320,
                        flexDirection: 'row',
                        marginLeft: '8%',
                        alignItems: 'center',
                        backgroundColor: '#dcdcdc',
                        height: 25,
                        }}>
                    <View style={{marginLeft: 5}}/>

                    <Text style={{ fontSize: 15}}>
                        Lauching Soon
                    </Text>
                    </View>

                <View style={{marginTop: 30,marginLeft:'20%' }}> 
                    <Text style={{ fontSize: 15}}>
                       Marathi
                    </Text>
                    <Text style={{ fontSize: 15, marginTop: -20,marginLeft:'40%' }}>
                      Bengali
                    </Text>
                </View>
                <View style={{marginTop: 2,marginLeft:'20%'}}> 
                <Text style={{ fontSize: 15}}>
                       (मराठी)
                    </Text>
                    <Text style={{ fontSize: 15, marginTop: -20,marginLeft:'40%' }}>
                      (বাংলা)
                    </Text>
                </View>

                

                <View style={{marginTop: 20, height:220,width:'90%',alignItems:'center'}}>
            <Text style={{
              fontSize: 14,
              
              marginLeft: '10%',
              marginTop:15,
              
            }}>
         Language options can be changed anytime. 
         We’ll translate information to help you browse, shop, and communicate. 
         We are continuously improving the language experiences on Amazon.in 
         If you have feedback on these translations, please contact Customer Support.
         Please note that translations are provided for convenience only and the English 
         version of Amazon.in, including our Conditions of Use, is the definitive version.
         </Text>
         </View>
         </ScrollView>
            </Card>
           </Content>
           </View>
           </>
    );
  }
}