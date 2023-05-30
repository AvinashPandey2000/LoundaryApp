import React from 'react';
import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity } from '../CartReducer';
import { decrementQty, incrementQty } from '../ProductReducer';


export default function ProductList({item}) {
    const dispatch=useDispatch();
    const cart =useSelector((state)=> state.cart.cart)
    const addItemToCart=()=>{
    dispatch(addToCart(item))  //cart
    dispatch(incrementQty(item))  //product
    }

  

    // console.log(item)
  return (
    <View style={styles.ProductListContainer}>
    <Image source={{uri:item.src}} style={styles.image}/>

        <View style={styles.productText}>
            <Text style={styles.productName} >{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}$</Text>
        </View>

        

        {cart.some((c)=>c.id===item.id) ?
        (
            <View style={{flexDirection:'row',alignItems:'center',marginRight:10}}>
            <TouchableOpacity  onPress={()=>{
                dispatch(incrementQuantity(item));
                dispatch(incrementQty(item))
            }} style={styles.incDecBtn}>
            <Text style={styles.incDec}>+</Text>
            </TouchableOpacity>

            <Text style={styles.incrementQty}>{item.quantity}</Text>

            <TouchableOpacity  onPress={()=>{
                dispatch(decrementQuantity(item));
                dispatch(decrementQty(item));
            }} style={styles.incDecBtn}>
            <Text style={styles.incDec}>-</Text>
            </TouchableOpacity>
            </View>
        ):(     
            <TouchableOpacity style={styles.buttonContainer} onPress={addItemToCart}>
            <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        )}
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
    },
    incDec:{
        fontWeight:'bold',
        color:'white',
        fontSize:22
    },
    incrementQty:{
        marginHorizontal:10
    },
    incDecBtn:{
        backgroundColor:'#1398DB',
        padding:5,
        borderRadius:10,
    }

})