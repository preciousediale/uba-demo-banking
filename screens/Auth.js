// screens/Auth.js
import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/logo.png';
import bgImage from '../assets/background.jpg';
import FormField from '../components/FormField';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;
  const navigation = useNavigation();
  const [form, setForm] = useState({
    phone: '',
    password: '',
    name: '',
    email: '',
  });

  const openPopup = (type) => {
    if (type === 'login') {
      setShowLoginPopup(true);
      setShowRegisterPopup(false);
      
      setShowAccountPopup(false);
    } else if (type === 'register') {
      setShowRegisterPopup(true);
      setShowLoginPopup(false);
      setShowAccountPopup(false);
    }
   else if (type === 'account') {
    setShowAccountPopup(true);
    setShowRegisterPopup(false); 
    setShowLoginPopup(false);
  }
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    
  };

  const closePopup = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowLoginPopup(false);
      setShowRegisterPopup(false);
      setShowAccountPopup(false);
    });
  };

  return (
    <View className="flex-1">
      <ImageBackground source={bgImage} resizeMode="cover" className="h-full w-full">
        <View className="px-6 flex-1 bg-red-100/30 justify-center items-center">
          <Image source={Logo} className="w-20 h-20 mb-8" resizeMode="contain" />
          <Text className="text-3xl font-calsans text-black mb-6">Welcome</Text>
          <Text className="text-lg font-varela text-black mb-6">Select an option below to continue</Text>

          <TouchableOpacity
            className="bg-red-700 py-4 px-8 w-full mb-4 rounded items-center shadow"
            onPress={() => openPopup('account')}
          >
            <Text className="text-white text-lg font-varela">Open An Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white border border-red-700 py-4 px-8 w-full rounded items-center shadow mb-4"
            onPress={() => openPopup('login')}
          >
            <Text className="text-red-700 text-lg font-varela">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-red-700 py-4 px-8 w-full rounded items-center shadow"
            onPress={() => openPopup('register')}
          >
            <Text className="text-white text-lg font-varela">Register</Text>
          </TouchableOpacity>
        </View>

        {/* Popup with Dimming Backdrop */}
        {(showLoginPopup || showRegisterPopup || showAccountPopup) && (
          <View className="absolute inset-0 w-full h-full">
            <TouchableOpacity
              className="flex-1 bg-black/50"
              activeOpacity={1}
              onPress={closePopup}
            />
            <Animated.View
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg"
              style={{
                transform: [{ translateY: slideAnim }],
                height: 'auto',
              }}
            >
              <View className="flex-1 p-10 pb-8">
                {showLoginPopup && (
                  <>
                    <View className="flex-row justify-between mb-8">
                      <Text className="text-xl font-calsans text-black text-center">Sign In</Text>
                      <TouchableOpacity onPress={closePopup}>
                        <FontAwesomeIcon icon={faTimesCircle} size={22} color="#000000" />
                      </TouchableOpacity>
                    </View>
                    <FormField
                      title="Phone Number"
                      value={form.phone}
                      placeholder="Enter Phone Number"
                      handleChangeText={(e) => setForm({ ...form, phone: e })}
                      otherStyles="mb-4"
                    />
                    <FormField
                      title="Password"
                      value={form.password}
                      placeholder="Password"
                      handleChangeText={(e) => setForm({ ...form, password: e })}
                      otherStyles="mb-4"
                      secureTextEntry
                    />
                    <TouchableOpacity
                      className="bg-red-700 py-3 px-6 rounded items-center"
                      onPress={()=>navigation.replace('Dashboard')}
                    >
                      <Text className="text-white text-base font-varela">Login</Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-end mt-3">
                      <TouchableOpacity>
                        <Text className="text-base font-varela font-bold text-black">Forgot Password?</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
                {showRegisterPopup && (
                  <>
                    <View className="flex-row justify-between mb-4">
                    <Text className="text-xl font-calsans text-black">Sign Up </Text>
                      <TouchableOpacity onPress={closePopup}>
                        <FontAwesomeIcon icon={faTimesCircle} size={22} color="#000000" />
                      </TouchableOpacity>
                    </View>
                    
                    <Text className="text-sm font-varela text-black mb-4">Pick an option below</Text>
                  
                    <TouchableOpacity className="flex-row justify-between mb-6 bg-red-700/50 p-3 rounded" onPress={()=>navigation.navigate('Register')}>
                      <Text className="text-base font-varela text-white">Use Activation Code (SME)</Text>
                      <FontAwesomeIcon icon={faAngleRight} size={22} color="#000000"/>
                    </TouchableOpacity>


                    <TouchableOpacity className="flex-row justify-between mb-6 bg-red-700/50 p-3 rounded" onPress={()=>navigation.navigate('Register')}>
                      <Text className="text-base font-varela text-white">Use Debit Card</Text>
                      <FontAwesomeIcon icon={faAngleRight} size={22} color="#000000"/>
                    </TouchableOpacity>

                    
                    <TouchableOpacity className="flex-row justify-between mb-6 bg-red-700/50 p-3 rounded" onPress={()=>navigation.navigate('Register')}>
                      <Text className="text-base font-varela text-white">Use Prepaid Card</Text>
                      <FontAwesomeIcon icon={faAngleRight} size={22} color="#000000"/>
                    </TouchableOpacity>

                  </>
                )}
                {showAccountPopup && (
                  <>
                    <View className="flex-row justify-between mb-4">
                    <Text className="text-xl font-calsans text-black">Open An Account</Text>
                      <TouchableOpacity onPress={closePopup}>
                        <FontAwesomeIcon icon={faTimesCircle} size={22} color="#000000" />
                      </TouchableOpacity>
                    </View>
                    
                    <Text className="text-sm font-varela text-black mb-4">Select Account Type</Text>
                  
                    <TouchableOpacity className="flex-row justify-between mb-6 bg-red-700/50 p-3 rounded" onPress={()=>navigation.navigate('NewAccount',{ accountType: 'Current' })}>
                      <Text className="text-base font-varela text-white">Current Account</Text>
                      <FontAwesomeIcon icon={faAngleRight} size={22} color="#000000"/>
                    </TouchableOpacity>


                    <TouchableOpacity className="flex-row justify-between mb-6 bg-red-700/50 p-3 rounded" onPress={()=>navigation.navigate('NewAccount',{ accountType: 'Savings' })}>
                      <Text className="text-base font-varela text-white">Savings Account</Text>
                      <FontAwesomeIcon icon={faAngleRight} size={22} color="#000000"/>
                    </TouchableOpacity>

                  </>
                )}
              </View>
            </Animated.View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Auth;