import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";


export default function ProcideToCart({ route,navigation }) {
  const [SelectedDate, setSelectedDate] = useState(); //pickup date
  const [selectTime, setSelectTime] = useState();   //select Time
  const [selectDate, setSelectDate] = useState();   //delivery Date
 
  const Day = new Date().getDate();
  const Month = new Date().getMonth();
  const Year = new Date().getFullYear();
  const {Item,toalprice}=route.params

  const checkOut=()=>{
    if(typeof selectTime === 'undefined' || typeof SelectedDate === 'undefined'  || typeof selectDate === 'undefined' ){
      console.log('show alert');
      Alert.alert('Empty | Invalid Field', 'Pleass select the pickUp detail', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')}])
    }
    else{
      console.log('go to checkout page ')
      navigation.replace("CheckOutPage",{
        date:selectDate,
        time:selectTime

      })   // never back tho previus screen if you back then redirect to the home screen
    }
  }

  const Time = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "3:00 PM",
    },
    {
      id: "4",
      time: "4:00 PM",
    },
    {
      id: "5",
      time: "5:00 AM",
    },
    {
      id: "6",
      time: "6:00 AM",
    },
  ];

  const DeliverDate = [
    {
      id: "0",
      date: "0-1 Days",
    },
    {
      id: "1",
      date: "2-3 Days",
    },
    {
      id: "2",
      date: "3-4 Days",
    },
    {
      id: "2",
      date: "4-5 Days",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#1398DB", "#53B3E2"]} style={{ flex: 1 }}>
        {/**Address */}
        <View style={{flex:1}}>
        <ScrollView>
        <View style={styles.ChildContainer}>
          <Text style={styles.text}>Enter Your Address</Text>
          <TextInput multiline style={styles.textInput} />
        </View>

        {/**pick date */}
        <View style={styles.ChildContainer}>
          <Text style={styles.text}>Pick Up Date</Text>
          <HorizontalDatepicker
            mode="gregorian"
            startDate={new Date(`${Year}-${Month}-${Day}`)}
            endDate={new Date(`${Year}-${Month}-${Day + 5}`)}
            initialSelectedDate={SelectedDate}
            onSelectedDateChange={(date) => setSelectedDate(date)}
            selectedItemWidth={170}
            unselectedItemWidth={38}
            itemHeight={38}
            itemRadius={10}
            selectedItemTextStyle={styles.selectedItemTextStyle}
            unselectedItemTextStyle={styles.selectedItemTextStyle}
            selectedItemBackgroundColor="#222831"
            unselectedItemBackgroundColor="#ececec"
            flatListContainerStyle={styles.flatListContainerStyle}
          />
        </View>

        {/**time */}
        <View style={styles.ChildContainer}>
          <Text style={styles.text}>Select Time</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Time.map((item, index) => (
              <View>
                {item.time !== selectTime ? (
                  <TouchableOpacity
                    style={styles.timeContainer}
                    onPress={() => {
                      setSelectTime(item.time);
                    }}
                  >
                    <Text>{item.time}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.selectedTimeContainer}
                    onPress={() => {
                      setSelectTime(item.time);
                    }}
                  >
                    <Text style={styles.selectedTime}>{item.time}</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </ScrollView>
        </View>

        {/**delever date */}
        <View style={styles.ChildContainer}>
          <Text style={styles.text}>Delivery Date</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DeliverDate.map((item, index) => (
              <View>
                {item.date !== selectDate ? (
                  <TouchableOpacity
                    style={styles.timeContainer}
                    onPress={() => {
                      setSelectDate(item.date);
                    }}
                  >
                    <Text>{item.date}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.selectedTimeContainer}
                    onPress={() => {
                      setSelectDate(item.date);
                    }}
                  >
                    <Text style={styles.selectedTime}>{item.date}</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
        </ScrollView>
        </View>

       
        {/** go To cart Button */}
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("CheckOutPage")}
          onPress={() => checkOut()}
        >
          <MaterialCommunityIcons
            name="cart-variant"
            size={40}
            color="#1398DB"
          />
          <View>
          <Text style={styles.buttonText}>Item : {Item}</Text>
          <Text style={styles.buttonText}>Total Price : {toalprice}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ChildContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    color: "white",
    marginVertical: 10,
  },
  textInput: {
    height: 150,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    color: "white",
  },
  flatListContainerStyle: {
    backgroundColor: "#1398DB",
  },
  timeContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  selectedTimeContainer: {
    marginHorizontal: 10,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  selectedTime: {
    color: "white",
  },
  button:{
    backgroundColor:'#e1ede6',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:30,
    paddingVertical:8,
    borderRadius:10,
    alignItems:'center',
    marginVertical:10,
    marginHorizontal:20,
    
  },
  buttonText:{
  color:'#53B3E2',
  fontSize: 16,
  lineHeight: 24,
  fontWeight:'bold',
  }
  
});
