// screens/Dashboard.js
import React, { useRef, useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';


const Success = () => {
    const navigation = useNavigation();
    const [isToggled, setIsToggled] = useState(false);
    return (

        <View className="flex-1">

            <Header title="Transaction Successful"/>

            <View className="flex-1 bg-white rounded-3xl -mt-6 ">
                <View className="p-6 my-2 mb-12 flex-1">
                    <View>

                        <ImageBackground source={require('../../assets/logo.png')} resizeMode="contain" className="h-50 w-50">
                            <View className="bg-white/95 h-full w-full flex">

                                <View className="flex items-center">
                                    <View className="w-16 h-16 rounded-t-3xl rounded-b-3xl items-center justify-center bg-green-400">
                                        <FontAwesomeIcon icon={faCheckCircle} size={30} color="#FFFFFF" />
                                    </View>

                                      <Text className="font-varela px-3 rounded-lg bg-red-100 mt-4 py-1">Transaction Completed</Text>
                                                                   

                                <Text className="font-calsans text-3xl my-2">- ₦4,000</Text>
                                
                                <Text className="text-xs font-varela text-gray-500">12th September, 2026 - 09:24pm</Text>

                                </View>




                                <View className="mt-4 p-6 border-gray-200 border bg-gray-50/30 rounded-lg w-full">

                                <Text className="text-gray-500 text-xs">Transfer To</Text>
                                    <Text className="font-calsans text-base">Olamide Chukwudi Musa</Text>
                                    <View className="border-t border-gray-300 mt-3"></View>


                                    <Text className="text-gray-500 text-xs">Action</Text>
                                    <Text className="font-calsans text-base">Bank Transfer</Text>
                                    <View className="border-t border-gray-300 mt-3"></View>

                                    <Text className="text-gray-500 text-xs mt-4">Account Number</Text>
                                    <Text className="font-calsans text-base">023343xx2</Text>

                                    <View className="border-t border-gray-300 mt-3"></View>
                                    <Text className="text-gray-500 text-xs mt-4">Bank</Text>
                                    <Text className="font-calsans text-base">Moniepoint</Text>

                                </View>

                                <View className="flex items-center mt-4">
                                    <TouchableOpacity className="bg-red-700 px-6 py-1 rounded-3xl mt-2 flex-row items-center space-x-2">
                                        <Text className="font-calsans text-white">
                                            Share Receipt
                                        </Text>
                                        <FontAwesomeIcon icon={faShareAlt} color="#ffffff" />
                                    </TouchableOpacity>

                                     <TouchableOpacity
                                                          className="bg-red-700 py-2 px-20 mt-2 rounded items-center"
                                                          onPress={()=>navigation.replace('Dashboard')}
                                                        >
                                                          <Text className="text-white text-base font-varela">Close</Text>
                                                        </TouchableOpacity>
                                </View>

                            </View>
                        </ImageBackground>
                    </View>

                </View>

            </View>


        </View>

    );
};

export default Success; 