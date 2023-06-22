
import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';


const IntroSlider = ({ navigation }) => {
    useEffect(() => {
        checkIntroStatus();
      }, []);
    
      const checkIntroStatus = async () => {
        const isIntroShown = await AsyncStorage.getItem('isIntroShown');
        if (false) {
          navigation.navigate('Login');
        }
      };
      const handleDone = async () => {
        await AsyncStorage.setItem('isIntroShown', 'true');
        navigation.navigate('Login');
      };
   


  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} resizeMode='contain'/>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

 

 
  return (
   
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={handleDone}
          showSkipButton={true}
          onSkip={handleDone}
        />
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 350,
    height: 500,
    borderRadius:5,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical:10,
    width:300
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'For The Weekend Not Any More We will help with this',
    title: 'Discover Nearest Loundary',
    image: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXs1R1G8XaSN-hItVwyVI4vqPloHJSOI6Dg&usqp=CAU',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Choose Pickup/Delivery',
    text: 'Free Loundary Pickup And Delivery Service',
    image: {
      uri:
        'data:image/jpeg;base64,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',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Track Your Order',
    text: '24x7 Check Your Order Status',
    image: {
      uri:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxERERUTExMVFhISFRcWEhgVFhYVERUVFxUYFhUVFRYYHSggGholHRYVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mICUtLS0tKy0tLS0tKy0tLS0tLy0tLS0tLS0tMC0tLS0tLy0tLS0tLS0tLS01LS0tLS0tLf/AABEIAKwBJQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xABMEAABAwEEBAoECQkHBQAAAAABAAIDEQQSITEFE0FRBgcVImFicYGR4TJCUqEUFyMzVJOxwdI1U3KSs8LR0/AkQ3OisuPxFjRjgoP/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADkRAAEDAgMECQIFAgcAAAAAAAEAAhEDIQQSMUFRYXEFEyKBkaGx0fDB4RQyQuLxBnIjMzRigpKy/9oADAMBAAIRAxEAPwD3FERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERFSqqiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIitLgrdYkKJWRFj1nQmsUwmYLIitDgrlClERERERERERERERERERERERERWjM933q5Y2+ke771kRERERERFp29kro3CJ7WSH0XObeaMccKjZ/RUi5hQTAlaHCHhNBYrolvFz6lrWAF1BmTUgAd6s0Jwrs1rdcjcRJnceLriBnTMHuK8T4X6Ynbb5IJb01oje2IOJDQ6tHMDRTBpv171McXjZXW1plZq9VJq8CXkvuEkYYBtCDertXc6lg2Uu1U7fCYnYNOQXEx2NfUltPscSJG/bzML3JERcC7kRERERERERERERFY99ERVc6ixucSqLy/hJxgWuG1SxRNiDInlgvNLnEtwJJvDb0LVlMuMBZucvUEXjp4yNIUrSGhy+TOzP11czjF0i7JsJ/+Z/GtOofwVM4XsCLyH4wdJezD9Wfxqx/GPpAGhEIP+G78adQ/gmYL2FVa9eOHjI0gKYQ44j5M/jXXcX3Cua3OlZM1lYw1zXMBbUEkEEEncMVV1JwElSHCbLugaqqwNdRZgarEiFqDKqiIoUoiIiIiIiIiIiIr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',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTVIRddcmnT0pNT0090BWfHHyeYGR07N4YQ&usqp=CAU',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Online Booking',
    text: 'Book Your Sloat With In Few Second',
    image: {
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rXFzmJiLrme1J33BijLMAYMIQINpIGt9WQ&usqp=CAU',
    },
    backgroundColor: '#f6437b',
  }
];

