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

import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from '@react-navigation/native';
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

export default class Prime extends Component {
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
<ScrollView                                       //Scrolling contents
            contentInsetAdjustmentBehavior="automatic">
  

            <View style={{paddingHorizontal: 50, backgroundColor:'white'}}>
            <Image                                  //Logo
                      resizeMode="contain"
                      style={{height: 90, width:'65%', marginTop: 8, marginRight:20}}
                      source={require('../assets/logo1.jpg')}
            />
            <Text style={{fontSize: 19, fontWeight:'bold'}}>Unlimited FREE fast delivery, 
                videos, music, gaming & more</Text>
                <Image                                 
                      resizeMode="contain"
                      style={{height: 90, width:'100%', marginTop: 20, marginRight:20}}
                      source={require('../assets/prime.jpg')}
            />
        <Text style={{fontSize: 16, marginTop:20}}>Get the best of Shopping and Entertainment.</Text>

        <View
                style={{
                  alignItems: 'center',
                  height: 45,
                  width: '85%',
                  borderColor: '#b29242',
                  borderWidth: 1,
                  borderRadius:5,
                  marginTop: 25,
                  marginLeft:'8%',
                  marginBottom: 20,
                }}>
                <LinearGradient colors={['#f6e0aa', '#dcb146']}>
                  <View
                    style={{
                      height: 38,
                      width: 262,
                      marginTop: 5,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderRadius:5,
                      borderColor: '#b19212',
                    }}>
              
                     <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Sign In')}>
                      <Text style={{fontSize: 18,color:'black'}}>Login to join Prime</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
            </View>

            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{color: '#377fbb', fontSize: 16,fontStyle:'normal',fontWeight:'bold',
                        marginTop:-5,marginLeft: '35%'}}> No Thanks</Text>
            </TouchableOpacity>
           

          <Text style={{fontSize: 16,  marginTop:10,marginLeft:'9%'}}>
          *T&C apply. By signing up for a Prime membership, you agree to the  
          
          <Text style={{color: '#377fbb',fontSize: 16,  }}> Amazon Prime Terms and Conditions.
          </Text>
          </Text>


            <View style={{alignItems:'center'}}> 
                <Text style={{color: '#cd853f',fontSize: 24, marginTop: 50,fontWeight:'bold'  }}>
                    Enjoy these benefits with 
                    Prime
                </Text>

                    <Image                                 
                      resizeMode="contain"
                      style={{height: 120, width:'150%', marginTop: 20, marginRight:20}}
                      source={require('../assets/prime3.jpg')}
                    />

                <Text style={{fontSize: 15, marginTop: 5}}>
                    Shop with unlimited FREE One-Day and Two-Day Delivery on eligible 
                    items from India’s largest online store. Just look for the Prime badge.
                    Also get 2-hour Express Delivery with the Prime Now App in select pin-codes 
                    in Delhi, Mumbai, Bangalore and Hyderabad.
                </Text>

                <Image                                 
                      resizeMode="contain"
                      style={{height: 120, width:'170%', marginTop: 20, marginRight:30}}
                      source={require('../assets/prime4.jpg')}
                />

                <Text style={{fontSize: 15, marginTop: 5}}>
                    Get access to the latest and exclusive Bollywood and 
                    regional blockbusters, Hollywood movies, U.S. TV shows, 
                    award-winning Amazon Original series, and kids’ shows — all 
                    on Prime Video.
                </Text>

                <Image                                 
                      resizeMode="contain"
                      style={{height: 120, width:'170%', marginTop: 20, marginRight:30}}
                      source={require('../assets/prime0.jpg')}
                />
                <Text style={{fontSize: 15, marginTop: 5}}>
                    Listen to 70 million songs in over 20 languages, ad-free. 
                    Just ask for your favourite song, voice-controlled with Alexa. 
                    Enjoy Playlists and Stations curated by Amazon’s music editors, 
                    for different moods, activities, genres & more.
                </Text>

                <Image                                 
                      resizeMode="contain"
                      style={{height: 120, width:'170%', marginTop: 20, marginRight:30}}
                      source={require('../assets/prime7.jpg')}
                />

                <Text style={{fontSize: 15, marginTop: 5}}>
                    Get access to FREE in-game content like power-ups, 
                    exclusive collectibles, characters, outfits, skins, 
                    themes, in-game currency and more across popular mobile games, 
                    refreshed frequently.
                </Text>

                <Image                                 
                      resizeMode="contain"
                      style={{height: 120, width:'170%', marginTop: 20, marginRight:30}}
                      source={require('../assets/prime1.jpg')}
                />

                
                <Text style={{fontSize: 15, marginTop: 5}}>
                    Eligible Prime members earn unlimited 5% reward points on all
                    purchases on Amazon.in using the Amazon Pay ICICI Bank credit card. 
                    Currently available in 35 cities across India.
                </Text>

                <Image                                 
                      resizeMode="contain"
                      style={{height: 120, width:'170%', marginTop: 20, marginRight:30}}
                      source={require('../assets/prime6.jpg')}
                />

                <Text style={{fontSize: 15, marginTop: 5}}>
                    Read as much as you want from hundreds of eligible eBooks, 
                    comics and more. Choose from literature, fiction, quick reads, 
                    romance, non-fiction, and eBooks in Indian languages. 
                    Read anytime, anywhere and at no additional cost.
                </Text>

                <Image                                 
                      resizeMode="contain"
                      style={{height: 120, width:'170%', marginTop: 20, marginRight:30}}
                      source={require('../assets/prime2.jpg')}
                />

                <Text style={{fontSize: 15, marginTop: 5}}>
                    Look out for Prime Exclusive deals, offers and early 
                    launches on top brands. Also, be the first to shop the best 
                    deals every day with Prime Early Access.
                </Text>

                <Image                                 
                      resizeMode="contain"
                      style={{height: 120, width:'170%', marginTop: 20, marginRight:30}}
                      source={require('../assets/prime5.jpg')}
                />

                <Text style={{fontSize: 15, marginTop: 5}}>
                    Prime members save an additional 15% on diaper subscriptions 
                    and get exclusive discounts and recommendations.
                </Text>
<View style={{marginTop: 50}}>
</View>

            </View> 

           
           </View>
           </ScrollView>
           </Content>
           </View>
           </>
    );
  }
}