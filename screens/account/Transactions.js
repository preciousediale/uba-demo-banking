// screens/Dashboard.js
import React, { useRef, useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import bgImage from '../../assets/background.jpg';
import redbg from '../../assets/redbg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faArrowLeft, faBell, faCopy, faDashboard, faEye, faEyeSlash, faHistory, faLightbulb, faMoneyBill, faNewspaper, faPaperPlane, faPhone, faPlusCircle, faRefresh, faTelevision, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { useNavigation } from '@react-navigation/native';
import FormField from '../../components/FormField';
import Header from '../../components/Header';
const { width } = Dimensions.get('window');


const Transactions = () => {
const navigation=useNavigation()
  return (

    <View className="flex-1">
      
      <ImageBackground source={bgImage} resizeMode="cover" className="h-full w-full">
                 
            <Header title="Transaction History"/>
      
          <View className="pb-5 mb-1 flex-1 -mt-6">
            <View className="bg-white px-5 mb-4 flex-row  rounded-t-2xl overflow-hidden">
              
          <FormField
                      placeholder="Search"
                      otherStyles="mb-4 flex-1"
                    />
                    </View>
            <ScrollView className="px-5">


              <View className="px-6 py-6 shadow bg-white rounded-xl mb-4">

                <Text className="text-sm mb-4 text-gray-500">12 December, 2026</Text>


                <TouchableOpacity className="flex-row items-center justify-between mb-6" onPress={()=>navigation.navigate('Receipt')}>

                  <View className="flex-row space-x-2"><View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                    <Image source={require('../../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                  </View>
                    <View className="">
                      <Text className="font-calsans">Olamide Musa</Text>
                      <Text className="text-sm mt-1 text-gray-500 text-varela">06:16pm</Text>
                    </View>

                  </View>
                  <Text className="font-calsans text-base">- N5,353.00</Text>
                </TouchableOpacity>



                <TouchableOpacity className="flex-row items-center justify-between mb-6" onPress={()=>navigation.navigate('Receipt')}>


                  <View className="flex-row space-x-2"><View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                    <Image source={require('../../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                  </View>
                    <View className="">
                      <Text className="font-calsans">Olamide Musa </Text>
                      <Text className="text-sm mt-1 text-gray-500 text-varela">06:16pm</Text>
                    </View>

                  </View>
                  <Text className="font-calsans text-base">- N5,353.00</Text>
                </TouchableOpacity>



                <TouchableOpacity className="flex-row items-center justify-between" onPress={()=>navigation.navigate('Receipt')}>


                  <View className="flex-row space-x-2"><View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                    <Image source={require('../../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                  </View>
                    <View className="">
                      <Text className="font-calsans">Olamide Musa Chukwudi</Text>
                      <Text className="text-sm mt-1 text-gray-500 text-varela">06:16pm</Text>
                    </View>

                  </View>
                  <Text className="font-calsans text-base">- N5,353.00</Text>
                </TouchableOpacity>


              </View>


              <View className="px-6 py-6 shadow bg-white rounded-xl mb-4">

                <Text className="text-sm mb-4 text-gray-500">11 December, 2026</Text>


                <TouchableOpacity className="flex-row items-center justify-between mb-6" onPress={()=>navigation.navigate('Receipt')}>


                  <View className="flex-row space-x-2"><View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                    <Image source={require('../../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                  </View>
                    <View className="">
                      <Text className="font-calsans">Olamide Musa</Text>
                      <Text className="text-sm mt-1 text-gray-500 text-varela">06:16pm</Text>
                    </View>

                  </View>
                  <Text className="font-calsans text-base text-green-500">- N5,353.00</Text>
                </TouchableOpacity>



                <TouchableOpacity className="flex-row items-center justify-between mb-6" onPress={()=>navigation.navigate('Receipt')}>


                  <View className="flex-row space-x-2"><View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                    <Image source={require('../../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                  </View>
                    <View className="">
                      <Text className="font-calsans">Olamide Musa </Text>
                      <Text className="text-sm mt-1 text-gray-500 text-varela">06:16pm</Text>
                    </View>

                  </View>
                  <Text className="font-calsans text-base">- N5,353.00</Text>
                </TouchableOpacity>



                <TouchableOpacity className="flex-row items-center justify-between" onPress={()=>navigation.navigate('Receipt')}>


                  <View className="flex-row space-x-2"><View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                    <Image source={require('../../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                  </View>
                    <View className="">
                      <Text className="font-calsans">Olamide Musa Chukwudi</Text>
                      <Text className="text-sm mt-1 text-gray-500 text-varela">06:16pm</Text>
                    </View>

                  </View>
                  <Text className="font-calsans text-base">- N5,353.00</Text>
                </TouchableOpacity>


              </View>



            </ScrollView>
          </View>

      </ImageBackground>

    </View>

  );
};

export default Transactions; 