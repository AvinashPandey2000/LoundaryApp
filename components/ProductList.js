import React from 'react';
import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native';

export default function ProductList({item}) {
    console.log(item)
  return (
    <View style={styles.ProductListContainer}>
    <Image source={{uri:item.src}} style={styles.image}/>

        <View style={styles.productText}>
            <Text style={styles.productName} >{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}$</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles=StyleSheet.create({
    ProductListContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        borderRadius:10,
        padding:10,
        marginBottom:10,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,

    },
    image:{
        height:70,
        width: 70,
    },
    productText:{
        flex:1,
        marginLeft:50
    },
    productName:{
        fontWeight:'bold',
        opacity: 1,
        // color: 'rgba(8, 1, 18, 0.5)'
    },
    productPrice:{
        color: 'rgba(8, 1, 18, 0.5)'
    },
    buttonContainer:{
        borderWidth:1,
        borderColor:'#1398DB',
        borderRadius:10,
        paddingVertical:5,
        paddingHorizontal:15,
        marginRight:10
    },
    buttonText:{
        color:'#1398DB',
        fontWeight:'bold'
    }

})