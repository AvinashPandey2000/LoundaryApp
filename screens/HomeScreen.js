import React, { useEffect ,useState} from 'react';
import { View, Text , StyleSheet,Image, TouchableOpacity, TextInput,ScrollView} from 'react-native';
import * as Location from 'expo-location'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import Cursore from '../components/cursore';
import Services from '../components/Services';
import ProductList from '../components/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../ProductReducer';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  
  // gat data from the cart
  const cart =useSelector((state)=>state.cart.cart);
  const product =useSelector((state)=>state.product.product);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr,prev) => curr + prev,0);

  console.log("product>>",product);
  console.log("cart>>",cart);


  const [displayCurrentAddress, setdisplayCurrentAddress] = useState("we are loading your location");
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);

  useEffect(()=>{
    checkIfLocationEnabled();
    getCurrentLocation();
  },[]);

  // to use font
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Thin': require('../assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf'),
  });

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords)
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // console.log(response)

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };
  
  const dispatch=useDispatch();
  useEffect(()=>{
    if(product.lenght >0){
      return;
    }
    const fetchProducts=()=>{
      services.map((service)=> dispatch(getProduct(service)))
    }
    fetchProducts()
  },[])

  console.log("product",product)

  // services
  const services=[
    {
      id:1,
      src:'https://img.freepik.com/premium-vector/cartoon-shirt_119631-192.jpg?w=2000',
      name:'Shirt',
      quantity:0,
      price:10,
    },
    {
      id:2,
      src:'https://img.freepik.com/premium-vector/jacket-cartoon_119631-439.jpg?w=2000',
      name:'Jacket',
      quantity:0,
      price:15,
    },
    {
      id:3,
      src:'https://img.freepik.com/free-vector/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg?w=2000',
      name:'T-Shirt',
      quantity:0,
      price:8,
    },
  ]

  
  return (
    <View style={{flex:1}}>
    <ScrollView >
    <LinearGradient colors={['#1398DB', '#53B3E2']}  style={{flex:1}}>

    <View style={styles.mainContainer}>
    

    {/** Header section */}

    <View style={styles.headerSection}>
    <Image source={{uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}} style={styles.HeaderImage}/>
    
    <View style={styles.headerText}>
    <Text style={[styles.colorWhite,styles.HeaderName]}>Hi, Avinash Pandey</Text>
      <View style={{flexDirection:'row'}}>
      <Ionicons name="md-location-outline" size={24} color='white' style={styles.icon} />
      <Text style={[styles.colorWhite,styles.HeaderName]}>{displayCurrentAddress} </Text>
      </View>
    </View>

    <Ionicons name="ios-notifications-outline" size={24} color="white" style={styles.icon}/>
    
    </View>

    {/** Search bar */}
    <TouchableOpacity style={styles.searchConatiner}>
    <TextInput placeholder='Search For Iteam Store' placeholderTextColor='white' style={{color:'white'}}/>
    <Ionicons name="search-outline" size={24} color='white' style={[styles.icon,{marginLeft:'auto'}]}/>
    </TouchableOpacity>

    {/** header silder /cursore*/}
    <View style={{width:'80%'}}>
    <Cursore/>
    </View>

    {/**Services Sectoin */}
    <Services/>

     {/**Product Sectoin */}
     {product.map((item,index)=>(
      <ProductList item={item} key={index}/>
      )) }
     
    </View>
    </LinearGradient>

    </ScrollView>

    {/** checkout button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProcideToCart', {
        Item: cart.length,
        toalprice: total,
      })}>
      
      <MaterialCommunityIcons name="cart-variant" size={40} color="#1398DB" />
      <View>
      <Text style={styles.buttonText}>Item : {cart.length}</Text>
      <Text style={styles.buttonText}>Total Price : {total}</Text>
      </View>
       </TouchableOpacity>

      </View>
      

  );
}

const styles=StyleSheet.create({
 mainContainer:{
  paddingHorizontal:10,
  paddingTop:10,
 },

// headerSection
headerSection:{
 flexDirection:'row',
},
HeaderImage:{
  height:42,
  width:42,
  borderRadius:50
},
headerText:{
  flex:1,
  marginLeft:20
},
colorWhite:{
color:'#FFFFFF',
},
HeaderName:{
  fontFamily:'NotoSansKR-Thin',
  fontWeight:500,
  fontSize:12,
  lineHeight:17,
},
icon:{
  marginRight:5
},
searchConatiner:{
  flexDirection:'row',
  marginVertical:20,
  borderWidth:1,
  borderColor:'white',
  padding:10,
  borderRadius:10,
},

button:{
  backgroundColor:'#e1ede6',
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:30,
  paddingVertical:8,
  borderRadius:10,
  alignItems:'center'
},
buttonText:{
color:'#53B3E2',
fontSize: 16,
lineHeight: 24,
fontWeight:'bold',
}

})