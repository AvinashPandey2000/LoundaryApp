import React, { useState } from 'react';
import { View, Text ,StyleSheet,TouchableOpacity,TextInput,ScrollView, Alert} from 'react-native';
import styles from '../components/CommonStyle'
import { MaterialIcons,Entypo  } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function Register({ navigation }) {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [number,setNumber]=useState("");

  const registerUser=()=>{
    if(email ==="" ||password===""||number===""){
      //showAlert
      console.log('check the field')
    }else{
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const user = userCredential.user;

		const userEmail=userCredential._tokenResponse.email
		const myUserUid =auth.currentUser.uid;

		setDoc(doc(db,"users",'${myUserUid}'),{
			email:email,
			number:number
		})
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });


    }
  }
  return (
    <SafeAreaView style={{flex:1}}>
    <LinearGradient
      colors={["#1398DB", "#53B3E2"]}
      style={{ flex: 1, paddingHorizontal: 20 }}
    >
    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <Text style={styles.subHeading}>Create a new Account</Text>

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
        secureTextEntry={true} 
        placeholder='Password'
        placeholderTextColor='white'
      />
      </View>

      <View style={styles.flexRow}>
      <Entypo name="old-phone" size={24} color="white" />
      <TextInput
        style={styles.inputText}
        onChangeText={(data)=>{setNumber(data)}}
        value={number}
        placeholder='Phone No'
        placeholderTextColor='white'
      />
      </View>


      <TouchableOpacity style={styles.button} onPress={()=>registerUser()}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.flexRow}>
      <Text style={styles.text}>Already have a account?</Text>
      <Text style={styles.link}  onPress={() => navigation.navigate('Login')}>Sign In</Text>
      </View>
     </View>
     </ScrollView>
     </LinearGradient>
     </SafeAreaView>
  );
}
