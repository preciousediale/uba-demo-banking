// screens/SplashScreen.js
import React from 'react';
import { View, Image, Text } from 'react-native';


const SplashScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      {/* Replace with your splash image in assets */}
      <Image
        source={require('../assets/logo.png')}
        className="w-20 h-20 mb-4"
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;