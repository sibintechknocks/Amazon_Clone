import React, {Component} from "react";
import { 
    View,
    TextStyle,
    Text, StyleSheet, Image,  ScrollView
} from "react-native";

import {Card, CardItem, Right} from 'native-base';
import StarRating from 'react-native-star-rating';
class RecommendedCard extends Component {
    render(){
        return ( 
          
          <ScrollView>
            <CardItem style={{flex:1, height:130, paddingHorizontal:20}}>
              <View>
                <Image style={{height:100, width:100}}
                   source={this.props.imageUri} />
              </View>
              <Right style={{flex:1, alignItems:'flex-start', height:130, paddingHorizontal:20}}>
                  <Text> {this.props.itemName}</Text>
                  <Text style={{color: 'grey', fontSize:15}}> {this.props.itemCreator}</Text>
                  <Text style={{fontSize:14, fontWeight:'bold', color:'#c4402f', }}> {this.props.itemPrice}</Text>
                  <Text style={{color: 'blue', fontSize:13}}> {this.props.itemHead}</Text>
                  <Text><Text style={{color: 'grey', fontWeight:'300', fontSize:11}}> 
                    You save 
                  </Text> ${this.props.itemSave}</Text>
                  <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={this.props.rating}
                  starSize={12}
                  fullStarColor='orange'
                  emptyStarColor='orange'
                  />
              </Right>
            </CardItem>
            </ScrollView>
    )
    }
}
export default RecommendedCard;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },  

});

