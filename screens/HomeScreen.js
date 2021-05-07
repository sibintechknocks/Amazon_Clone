//Home Screen of Amazon App

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
        TouchableOpacity,
        StatusBar, Dimensions,
        Platform 
      } from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';

import RecommendedCard from '../components/RecommendedCard';

//Main class

class HomeScreen extends Component 
{
render()
{
  return (
    <>
    
  <StatusBar backgroundColor="#66ccce" barStyle="dark-content" />

<SafeAreaView>
        
          <View>
          <LinearGradient 
              colors={['#84d8e3', '#a5e6d0']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}>
              <View style={{height: 130, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', height: 70}}>
                    
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
                        marginTop: 21,
                        marginLeft: 11,
                        }}/>
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Image                                  //Logo
                      resizeMode="contain"
                      style={{height: 65, marginTop: 6, marginLeft:-10}}
                      source={require('../assets/logo.jpeg')}
                  />
                </TouchableOpacity>  

                  <FeatherI
                    name="mic"
                    size={25}
                    color="black"
                    style={{
                    marginTop: 20,
                    marginLeft: '20%',
                    }}/>

                  <FeatherI
                    name="shopping-cart"
                    size={25}
                    color="black"
                    style={{
                    marginTop: 20,
                    marginLeft: '10%',
                    }}/>
                
                </View>

                <View                                  //Search bar
                  style={{
                    backgroundColor: '#fff',
                    width: '94%',
                    height: 50,
                    margin: 12,
                    marginTop: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 7,
                    marginRight:1,
                    paddingHorizontal: 15,
                    borderColor: '2px black',
                    flexDirection: 'row',
                    }}>
                      
                 
                  <Item style={{ backgroundColor: 'white', 
                      paddingHorizontal:25, borderRadius: 4, }}>
	                  <Icon name="search" style={{ fontSize: 27, paddingTop: 1,marginRight:5}} />
	                  <Input style={{ paddingTop: 10,fontSize: 20,}} placeholder="Search" />
	                </Item>
	
                  
                  <FeatherI name="camera" size={25} color="grey" style={{
                    marginRight: 34,
                  }}/>

                </View>
              </View>
            </LinearGradient>    
          </View>
          
<ScrollView                                       //Scrolling contents
          contentInsetAdjustmentBehavior="automatic">
        <Content style={{backgroundColor: '#c0d9d9'}}>
                
          <View                                           //Location
            style={{
              flexDirection: 'row',
              height: 45,
              backgroundColor: '#66ccce',
              alignItems: 'center',
              }}>
                  
            <FeatherI
              name="map-pin"
              size={21}
              color="black"
              style={{marginLeft: 15}}
            />

            <Text style={{marginLeft: 5, fontSize: 15}}>
              Your Location
            </Text>

          </View>
              
       <ScrollView horizontal={true}                        //Item list
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}>
                
          <View
            style={{
              flexDirection: 'row',
              height: 82,
              width: '100%',
              marginTop: 7,
              marginBottom:5,
            }}>
                   
          <Image
            style={{ height: 90, width: 90}}
            source={require('../assets/item0.jpg')}
          />

          <Image
            style={{ height: 90, width: 90}}
            source={require('../assets/item1.jpg')}
          />

          <Image
            style={{ height: 90, width: 90}}
            source={require('../assets/item1.1.jpg')}
          />

          <Image
            style={{ height: 90, width: 90}}
            source={require('../assets/item2.jpg')}
          />

          <Image
            style={{ height:90, width: 90}}
            source={require('../assets/item3.jpg')}
          />

          <Image
            style={{ height: 90, width:90}}
            source={require('../assets/item4.jpg')}
          />

          <Image
            style={{ height: 90, width:90}}
            source={require('../assets/item5.jpg')}
          />

          <Image
            style={{ height: 90, width: 85}}
            source={require('../assets/item6.jpg')}
          />

        </View>
      </ScrollView>

               
      <View                                           //Swiper contents
        style={{
           height: 150,
           marginTop: 5,
        }}>

          <Swiper
            autoplay={true}
            showsPagination={false}
            style={{
               height: 180,
            }}>
                    
          <View style={{flex: 1}}>
            <Image
              style={{flex: 1, height: undefined, width: undefined}}
              source={require('../assets/swiper1.jpg')}
            />
          </View>

          <View style={{flex: 1}}>
            <Image
              style={{flex: 1, height: undefined, width: undefined}}
              source={require('../assets/swiper2.jpg')}
            />
          </View>

          <View style={{flex: 1}}>
            <Image
              style={{flex: 1, height: undefined, width: undefined}}
              source={require('../assets/swiper3.jpg')}
            />
          </View>

          <View style={{flex: 1}}>
            <Image
              style={{flex: 1, height: undefined, width: undefined}}
              source={require('../assets/swiper4.jpg')}
            />
          </View>

          </Swiper>
        </View>
           
                
              <View                                     //Goto Signin
                    style={{
                    flexDirection: 'column',
                    marginTop: 7,
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'notoserif',
                      fontSize: 20,
                      marginLeft: '6%',
                      marginTop: 8,
                      marginBottom:8,
                    }}>
                    Sign in for the best experience
                  </Text>
 
                <View
                  style={{
                  alignItems: 'center',
                  height: 45,
                  width: '74%',
                  borderColor: '#b29242',
                  borderWidth: 1,
                  marginLeft: '6%',
              
                  }}>
                  <LinearGradient colors={['#f6e0aa', '#dcb146']}>
                  <View
                    style={{
                      height: 38,
                      width: 303,
                      marginTop: 5,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: '#b19212',
                    }}>
                     <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Sign In')}>
                      <Text style={{fontSize: 18}}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
            </View>

                  
        <View style={{flexDirection: 'row'}}>          

          <Text
            onPress={() =>
            this.props.navigation.navigate('CreateAccount')
            }
            style={{
              marginTop: 10,
              fontSize: 18,
              marginLeft: '6%',
              color: '#377fbb',
            }}>
              Create an account
          </Text>

          <IonIcon 
            onPress={() =>
              this.props.navigation.navigate('CreateAccount')
             }
              name="ios-arrow-forward"
              size={13}
              color="#377fbb"
              style={{
                marginTop: 15,
                marginLeft: '36%',
              }}
          />
          </View>
        </View>     
      </Content>

            <ScrollView                      //Payment options scrollview
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={false}>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 100,
                      marginTop: 5,
                      marginBottom:5,
                     
                    }}>
                    <Image
                      style={{height: 85, width: 85}}
                      source={require('../assets/pay0.jpg')}
                    />
                    <Image
                      style={{height: 85, width: 85}}
                      source={require('../assets/sendmoney1.jpg')}
                    />
                    <Image
                      style={{height: 85, width: 85}}
                      source={require('../assets/QR2.jpg')}
                    />
                    <Image
                      style={{height: 85, width: 85}}
                      source={require('../assets/paybill3.jpg')}
                    />
                    <Image
                      style={{height: 85, width: 85}}
                      source={require('../assets/getpay4.jpg')}
                    />
                    <Image
                      style={{height: 85, width: 85}}
                      source={require('../assets/rewards5.jpg')}
                    />
                  </View>
              </ScrollView>

              <View
                  style={{
                    marginTop: -15,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        
                      }}>
                      Join Prime to enjoy benefits
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                        }}
                        source={require('../assets/gprime0.jpg')}
                      />
                      <Text style={{marginLeft: 19}}>Gaming with Prime</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/gprime1.jpg')}
                      />
                      <Text style={{marginLeft: 8}}>Prime Video</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/gprime2.jpg')}
                      />
                      <Text style={{marginLeft: 17}}>Prime Music</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/gprime3.jpg')}
                      />
                      <Text style={{marginLeft: 8}}>FREE delivery</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', height: 45}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('Prime')
                      }
                      style={{
                        marginTop: 13,
                        fontSize: 16,
                        margin: 10,
                        color: '#377fbb',
                      }}>
                     Join prime now
                    </Text>
                    <IonIcon
                    onPress={() =>
                      this.props.navigation.navigate('Prime')
                    }
                      name="ios-arrow-forward"
                      size={13}
                      color="#377fbb"
                      style={{
                        marginTop: 15,
                        marginLeft: 180,
                      }}
                    />
                  </View>
                </View>


                <View style={{marginTop: 5}}> 
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20, marginLeft: -1}}>
                        Latest launches in smartphones
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 2,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 2,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                          
                        }}
                        source={require('../assets/phone0.jpg')}
                      />
                     
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/phone1.jpg')}
                      />
                      
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                          
                        }}
                        source={require('../assets/phone2.jpg')}
                      />
                    
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/phone3.jpg')}
                      />
                      
                    </View>
                  </View>
                </View>

        
                <Content>
                <View style={{marginTop: 5,marginBottom:5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20, marginLeft: -1}}>
                         Capture your memories forever | canon | nikon | sony | fujifilm & more
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      <Image
                        source={require('../assets/cam0.jpg')}
                        style={{
                          height: 180,
                          width: 140,
                          flex:1,
                         
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 4,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        
                      }}>
                      
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                          
                        }}
                        source={require('../assets/cam1.jpg')}
                      />
                      <Text style={{marginLeft: 17}}>MIRRORLESS</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                        
                        }}
                        source={require('../assets/cam2.jpg')}
                      />
                      <Text style={{marginLeft: 15}}>DRONES</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                          
                        }}
                        source={require('../assets/cam3.jpg')}
                      />
                      <Text style={{marginLeft: 17}}>GO PRO</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/cam4.jpg')}
                      />
                      <Text style={{marginLeft: 15}}>INSTA MINI</Text>
                    </View>
                  </View>
                </View>

    
                
                <View style={{marginTop: -5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20, marginLeft: -1}}>
                          Customers' Most Loved Fashion | 4 star+ rated, 100+
                          reviews
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      <Image
                        source={require('../assets/fashionsale.jpg')}
                        style={{
                          height: 540,
                          width: null,
                          flex: 1,
                          marginBottom: 10,
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 5,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 19,
                        marginBottom: 10,
                        margin: 8,                      
                        
                      }}>
                      Starting ₹ 499 | Clothing, Accesories & more
                    </Text>
                    </View>

                  <View
                    style={{
                      width: '120%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/fashion0.jpg')}
                      />
                      <Text style={{marginLeft: 17}}>Women's Clothing</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                          
                        }}
                        source={require('../assets/fashion1.jpg')}
                      />
                      <Text style={{marginLeft: 8}}>Men's Clothing</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/fashion2.jpg')}
                      />
                      <Text style={{marginLeft: 17}}>Beauty & Makeup</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 8,
                          marginBottom: 3,
                          
                        }}
                        source={require('../assets/fashion3.jpg')}
                      />
                      <Text style={{marginLeft: 11, }}>
                        Eyewear
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('SignIn')
                      }
                      style={{
                        marginTop: 13,
                        fontSize: 16,
                        marginLeft: 17,
                        color: '#377fbb',
                      }}>
                      See more
                    </Text>
                    <IonIcon
                      name="ios-arrow-forward"
                      size={13}
                      color="#377fbb"
                      style={{
                        marginTop: 17,
                        marginLeft: 180,
                      }}
                    />
                  </View>
                </View>
                
                </Content>
               
        <Container style= {{backgroundColor:'#d5d5d6', marginTop:8, height:580}}> 
          
          <Card >
            <CardItem header>
              <Text style={{marginTop:4}}>Your Recomendations</Text>
            </CardItem>
           
          <Card>
          <ScrollView
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={false}>
           
              <RecommendedCard
                itemName= "The Alchemist"
                itemCreator= "Paulo Coelho"  
                itemPrice= "$10" 
                itemHead= "A Fable About Following Your Dream"
                itemSave= "2.5"
                imageUri= {require("../assets/recommended_1.jpg")}
                rating={5}/>

              <RecommendedCard
                itemName= "Amazon Adventure"
                itemCreator= "S.Joao da Barra"  
                itemPrice= "$25" 
                itemHead= "A True Story of Scientific Discovery"
                itemSave= "3.0"
                imageUri= {require("../assets/recommended_4.jpg")}
                rating={4.}/>
                
                
              <RecommendedCard
                itemName= "Grand Theft Auto V 5"
                itemCreator= "R *"  
                itemPrice= "$31" 
                itemHead= "Premium Edition Five"
                itemSave= "3.5"
                imageUri= {require("../assets/recommended_2.jpg")}
                rating={3}/>
                
            </ScrollView>
          </Card>
        </Card>
      </Container> 
      </ScrollView>
  </SafeAreaView>
  
 </>
  );
}
}

//Main class

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },

});