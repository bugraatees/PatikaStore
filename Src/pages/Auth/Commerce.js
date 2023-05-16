import React from "react";
import { SafeAreaView, View, Text, StatusBar, Image,  Dimensions, FlatList, TextInput} from "react-native";

const DATA = [
  {
  "id": "0",
  "title": "Winner Coat",
  "image": "https://cdn.shopify.com/s/files/1/0347/3225/articles/PeaCoat.jpg?v=1485614004",
  "price": 250
},
{
  "id": "1",
  "title": "Jasons Jacket",
  "image": "https://cdn.optipic.io/site-2236/images/jackets/mattdmnjsnbrnleathrjacket.jpg",
  "price": 500
},
{
  "id": "2",
  "title": "Arclyic Sweat",
  "image": "https://m.media-amazon.com/images/I/61ivAgq84NL._UY550_.jpg",
  "price": 780,
},
{
  "id": "3",
  "title": "Gömlek",
  "image": "https://productimages.hepsiburada.net/s/93/600-800/110000036198362.jpg",
  "price": 1000
},

]

const Commerce = (props) => {
  return(
    <SafeAreaView style = {{flex : 1, backgroundColor:'#f3eae8', width: Dimensions.get('window').width / 1}}>
      <StatusBar style={{backgroundColor:'#f3eae8'}} />
      <View style={{margin:10}}>
        <Text style={{fontWeight: 'bold', fontSize:20, color:'black'}}>PATIKASTORE</Text>
      </View>
      <View style={{margin:10}}>
        <TextInput style={{borderWidth:1, borderRadius:20, height:Dimensions.get('window').height /18, paddingHorizontal:10}} placeholder="Ara.."/>
      </View>
      <FlatList 
        keyExtractor={item => item.id.toString()}
        data={DATA}
        numColumns={2} 
        renderItem={({item}) =>
        <View style={{margin: 10,}}>
          <Image style={{height : Dimensions.get('window').height / 2, width : Dimensions.get('window').width/2, borderRadius:10}} source={{uri:item.image}} />
          <Text style={{fontWeight:'bold', fontSize:18, color:'black'}}>{item.title}</Text>
          <Text style={{fontWeight:'700'}}>{item.price} TL</Text> 
        </View>
      }
      />
      
      
    </SafeAreaView>
  )
    }

export default Commerce;