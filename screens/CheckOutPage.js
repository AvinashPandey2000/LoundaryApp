import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { 
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
 } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart, decrementQuantity, incrementQuantity } from '../CartReducer';
import { decrementQty, incrementQty } from '../ProductReducer';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function CheckOutPage({route ,navigation }) {
  const { date, time } = route.params;
  const cart =useSelector((state)=>state.cart.cart);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr,prev) => curr + prev,0);
  const dispatch=useDispatch();

  // payment 
// send data to user db
  const userUid = auth.currentUser.uid;
  const Pay = async () => {
    navigation.navigate("PaymentDon")
    dispatch(cleanCart());
    await setDoc(
      doc(db, "users", `${userUid}`),
      {
        orders: { ...cart },
        pickUpDetails: route.params,
      },
      {
        merge: true,
      }
    );
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#1398DB", "#53B3E2"]} style={{ flex: 1,paddingHorizontal:20 }}>
      
      <TouchableOpacity style={styles.headerNigation} onPress={() => navigation.goBack()}  >
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={styles.headerNigationText }> Your Backet</Text>
      </TouchableOpacity>
      {/** Render UI  */}
      {total == 0 ?(
         <View style={styles.emptyCartContainer}>
         <Image source={require('../assets/images/cart.png')} style={styles.cartImage} />
          <Text style={styles.emptyCartHeading}>Your Cart is Empty</Text>
          <Text style={styles.emptyCartText}>Look Like you haven't added anything to yout cart yet</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}  onPress={() => navigation.goBack()}>Go Home</Text>
          </TouchableOpacity>
         </View>
        )
      :(
        <>
        <ScrollView style={{flex:1}}>
          {/** product Checkout data */}
          {cart.map((item,index)=>(
            <View style={styles.checkDataContainer}>
            <Text style={styles.checkDataContainerText}>Shirt</Text>
            <View style={styles.IncDecButton}> 
              <TouchableOpacity
              onPress={()=>{
                dispatch(decrementQuantity(item));
                dispatch(decrementQty(item));
            }}>
                <Text style={styles.checkDataContainerText}>-</Text>
              </TouchableOpacity> 
  
              <Text style={[styles.checkDataContainerText,{marginHorizontal:10}]}>{item.quantity}</Text> 
  
              <TouchableOpacity
              onPress={()=>{
                dispatch(incrementQuantity(item));
                dispatch(incrementQty(item))
            }}>
                <Text style={styles.checkDataContainerText}>+</Text>
              </TouchableOpacity>
              </View>
            <Text style={styles.checkDataContainerText}>${item.price * item.quantity}</Text>
            </View>
  

      ))}
         
          {/** Billing Details */}
          <Text style={styles.BilingHeading}>Billing Detail</Text>

          <View style={styles.BilingContainer}>
          <View style={styles.bilingContainerChild}>
            <Text style={styles.bilingText}>Item Total</Text>
            <Text style={styles.bilingText}>$ {total}</Text>
          </View>

          <View style={styles.bilingContainerChild}>
            <Text style={styles.bilingText}>Delivery Fee | 1.2KM</Text>
            <Text style={styles.bilingText}>FREE</Text>
          </View>

          <Text style={styles.bilingText}>Free Delivery On Your Order</Text>

          <View style={styles.line}></View>
          
          <Text  style={styles.bilingText}>selected Date</Text>

          <View style={styles.bilingContainerChild}>
            <Text style={styles.bilingText}>No Of Date</Text>
            <Text style={styles.bilingText}>{date}</Text>
          </View>

          <View style={styles.bilingContainerChild}>
            <Text style={styles.bilingText}>Selected Pick Up Time</Text>
            <Text style={styles.bilingText}>{time}</Text>
          </View>

          <View style={styles.line}></View>

          <View style={styles.bilingContainerChild}>
            <Text style={styles.bilingPayText}>To Pay</Text>
            <Text style={styles.bilingPayText}>${total}</Text>
          </View>
          </View>

          </ScrollView>

          <View style={styles.payButtonContainer}>
          <TouchableOpacity style={[styles.button,styles.payButton]}>
            <Text style={styles.buttonText}  onPress={() => Pay()}>PAY ${total}</Text>
          </TouchableOpacity>
          </View>
          </>
          
      )}
     

   
      </LinearGradient>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerNigation:{
    flexDirection:'row',
    marginVertical:20,
  },
  headerNigationText:{
    marginLeft:20,
    color:'white',
    fontSize:18,
  },
  checkDataContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'rgba(83, 179, 226, 0.5)',
    padding:10,
    borderRadius:10,
    alignItems:'center'
    // opacity: 0.5
  },
  checkDataContainerText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  },
  IncDecButton:{
    flexDirection:'row',
    borderWidth:0.5,
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:5,
  },
  BilingHeading:{
    color:'white',
    fontWeight:'bold',
    marginVertical:20,
    fontSize:20
  },
  BilingContainer:{
    backgroundColor: 'rgba(83, 179, 226, 0.5)',
    padding:10,
    borderRadius:10,
    color:'white'
  },
  bilingContainerChild:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bilingText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    marginVertical:10,
  },
  bilingPayText:{
    color:'white',
    fontWeight:'bold',
    marginVertical:20,
    fontSize:18
  },
  line:{
    borderBottomWidth:2,
    borderColor:'#1398DB'
  },
  cartImage:{
    width: '100%',
    resizeMode: 'contain',
  },
  emptyCartContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  emptyCartHeading:{
    color:'white',
    fontWeight:'bold',
    fontSize:30,
    marginVertical:20,

  },
  emptyCartText:{
    color:'rgba(255, 255, 255, 1)',
    marginBottom:10,
    fontSize:18,
    width:'80%',
    textAlign:'center'
  },
  button:{
    backgroundColor:'white',
    marginTop:10,
    padding:10,
    borderRadius:20,
    paddingHorizontal:40
  },
  buttonText:{
    fontSize:20,
    color:'#1398DB'
  },
  payButton:{
    width:200,
    alignItems:'center'
  },
  payButtonContainer:{
    alignItems:'center',
    marginVertical:10
  }
})
