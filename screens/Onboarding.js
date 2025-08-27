import React, { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import bgImage from '../assets/background.jpg';
const { width } = Dimensions.get('window'); // Get screen width for slide width

const slides = [
  {
    title: 'Easy Access',
    description: 'Sign in quickly and securely with any of the following options:',
    image: require('../assets/onboard4.png'), // Replace with your image
  },
  {
    title: 'ATM/Branch Finder',
    description: 'Easily locate any UBA Branch or ATM near you',
    image: require('../assets/onboard6.png'), // Replace with your image
  },
  {
    title: 'Payments on the Go',
    description: 'You can transfer, pay bills and buy airtime at lightening speed',
    image: require('../assets/onboard7.png'), // Replace with your image
  },
  {
    title: 'Round the Clock Support',
    description: 'Our 24-hour Customer Fulfillment Center is only a click away',
    image: require('../assets/onboard2.png'), // Replace with your image
  },
  {
    title: 'Selfie Profile',
    description: 'Personalize Your Experience - Add your favorite picture to your mobile app',
    image: require('../assets/onboard1.png'), // Replace with your image
  },
  {
    title: 'Fraud Guarantee',
    description: 'You can Find further information about our fraud gaurantee by visiting our website',
    image: require('../assets/onboard5.png'), // Replace with your image
  },
];

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  // Update current slide based on scroll position
  const onScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slide);
  };

  // Navigate to the next slide
  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      scrollRef.current.scrollTo({ x: (currentSlide + 1) * width, animated: true });
    } else {
      navigation.navigate('Auth');
    }
  };

  return (
    <View className="h-full">
    <ImageBackground source={bgImage} resizeMode="cover" className="flex-1 justify-center">
      <View className="bg-red-100/30 h-full">
      {/* Slides */}
      <ScrollView 
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} className="flex-1 justify-end items-center px-10 pb-16" style={{ width }}>
            <Image
              source={slide.image}
              className="w-full h-80 mb-8"
              resizeMode="contain"
            />
            <View className="">
            <Text className="text-3xl text-center mb-4 font-calsans">{slide.title}</Text>
            <Text className="text-lg text-gray-600 text-center mb-8 font-varela">{slide.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Dot Indicators */}
      <View className="flex-row justify-center mb-6">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentSlide === index ? 'bg-red-700 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>

      {/* Button */}
      <View className="px-6 mb-8 flex-row gap-2">
        {(currentSlide !== slides.length-1) && ( 
          <TouchableOpacity
          className="bg-red-700 py-4 px-4 rounded items-center w-[25%] shadow"
          onPress={()=>{navigation.navigate('Auth')}}
        >
          <Text className="text-white text-lg font-varela">
            Skip
          </Text>
        </TouchableOpacity>)
        }
        <TouchableOpacity
          className="bg-red-700 py-4 px-8 rounded items-center flex-1 shadow"
          onPress={goToNextSlide}
        >
          <Text className="text-white text-lg font-varela">
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
    
    </View>
  );
};

export default Onboarding;