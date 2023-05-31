import React, { useEffect, useState } from 'react';
import { View, Text ,StyleSheet,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import styles from '../components/CommonStyle'
import { MaterialIcons,Entypo  } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  

  useEffect(()=>{
    const unsubcrbe =auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        navigation.navigate('Home')
      }
    })

    return unsubcrbe;
    },[])

    const login=()=>{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('login error>>',errorMessage)
      });
    }
    
    
    
      
    
    
    







  return (
    <SafeAreaView style={{flex:1}}>
    <LinearGradient
      colors={["#1398DB", "#53B3E2"]}
      style={{ flex: 1, paddingHorizontal: 20 }}
    >
    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <Text style={styles.subHeading}>Sign to your Account</Text>

      <View style={styles.flexRow}>
      <MaterialIcons name="email" size={24} color="white" />
      <TextInput
        style={styles.inputText}
        onChangeText={(data)=>{setEmail(data)}}
        value={email}
        placeholder='Email'
        placeholderTextColor='white'
      />
      </View>

      <View style={styles.flexRow}>
      <Entypo name="key" size={24} color="white" />
      <TextInput
        style={styles.inputText}
        onChangeText={(data)=>{setPassword(data)}}
        value={password}
        secureTextEntry={true}  // to hide the password
        placeholder='Password'
        placeholderTextColor='white'
      />
      </View>


      <TouchableOpacity style={styles.button} onPress={()=>login()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.flexRow}>
      <Text style={styles.text}>Don't have an account?</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Sign Up</Text>
      </View>
     </View>
     </ScrollView>
     </LinearGradient>
     </SafeAreaView>
  );
}
