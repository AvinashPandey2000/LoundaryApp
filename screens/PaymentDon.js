import { View, Text, StyleSheet ,Image,TouchableOpacity} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

export default function PaymentDon({ navigation }) {
    setTimeout(function() {
        navigation.navigate('Home')
      }, 1000*10);
  return (
    <SafeAreaView style={{flex:1}}>
      <LinearGradient
        colors={["#1398DB", "#53B3E2"]}
        style={{ flex: 1, paddingHorizontal: 20 }}
      >
      <View style={styles.container}>
        <Ionicons name="checkmark-done-circle" size={200} color="white" />
        <Text style={styles.heading}> Thank You!</Text>
        <Text style={styles.subHeading}>Payment Done Successfully</Text>
        <Text style={styles.text}>You will be redirected to the home page shortly or click here to return to home page</Text>

        <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        

      </View>
      
      
      
      
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  heading:{
    color:'white',
    fontSize:40,
    fontWeight:"bold",
    marginBottom:10,
  },
  subHeading:{
    color:'rgba(255, 255, 255, 0.8)',
    fontSize:20,
    fontWeight:"500",
  },
  text:{
    color:'rgba(255, 255, 255, 0.7)',
    marginVertical:30,
    textAlign:"center",
    width:'80%',
    
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
  }
});
