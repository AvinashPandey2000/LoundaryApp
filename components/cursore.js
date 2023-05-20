import React from 'react';
import { View, Text } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

export default function cursore() {
    const images= [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", 
      ]
  return (
    <SliderBox 
    images={images}
    // autoplay
    circleLoop
    dotColor="#FFEE58"
    inactiveDotColor="#90A4AE"
    ImageComponentStyle={{borderRadius: 15,margin: 5,wight:'80%'}}
    />
  );
}
