// screens/Dashboard.js
import React, { useRef, useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import bgImage from '../../assets/background.jpg';
import redbg from '../../assets/redbg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faArrowLeft, faBell, faCopy, faDashboard, faDownload, faEye, faEyeSlash, faHistory, faLightbulb, faMoneyBill, faNewspaper, faPaperPlane, faPhone, faPlusCircle, faRefresh, faShareAlt, faTelevision, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';



const Receipt = () => {
    const navigation = useNavigation();
    const [isToggled, setIsToggled] = useState(false);
    return (

        <View className="flex-1">
          
          <Header title="Transaction Receipt"/>


            <View className="flex-1 bg-white rounded-3xl -mt-6 ">
                <View className="p-6 my-2 mb-12 flex-1">
                    <View>

                        <ImageBackground source={require('../../assets/logo.png')} resizeMode="contain" className="h-50 w-50">
                            <View className="bg-white/95 h-full w-full flex">
                                <View className="flex-row">
                                    <Text className="font-varela border-green-700 border px-3 rounded-lg bg-green-100">Successful</Text>
                                </View>

                                <Text className="font-calsans text-3xl mt-2">- ₦4,000</Text>

                                <Text className="text-xs font-varela text-gray-500">12th September, 2026 - 09:24pm</Text>


                                <View className="mt-4 p-6 border-gray-200 border bg-gray-50/60 rounded-lg w-full">

                                    <Text className="text-gray-500 text-xs">Receiver</Text>
                                    <Text className="font-calsans text-base">Olamide Chukwudi Musa</Text>
                                    <View className="border-t border-gray-300 mt-3"></View>

                                    <Text className="text-gray-500 text-xs mt-4">Account Number</Text>
                                    <View className="flex-row space-x-2 items-center">
                                        <Text className="font-calsans text-base">0234502020</Text>
                                        <FontAwesomeIcon icon={faCopy} size={16} />
                                    </View>

                                    <View className="border-t border-gray-300 mt-3"></View>
                                    <Text className="text-gray-500 text-xs mt-4">Bank Name</Text>
                                    <Text className="font-calsans text-base">Moniepoint MFB</Text>



                                </View>


                                <View className="mt-4 p-6 border-gray-200 border bg-gray-50/60 rounded-lg w-full">

                                    <Text className="text-gray-500 text-xs mt-4">Transaction Reference</Text>
                                    <View className="flex-row space-x-2 items-center">
                                        <Text className="font-calsans text-base">1234567890987654321</Text>
                                        <FontAwesomeIcon icon={faCopy} size={16} />
                                    </View>

                                    <View className="border-t border-gray-300 mt-3"></View>
                                    <Text className="text-gray-500 text-xs mt-4">Transaction Fee</Text>
                                    <Text className="font-calsans text-base">₦10</Text>

                                    <View className="border-t border-gray-300 mt-3"></View>
                                    <Text className="text-gray-500 text-xs mt-4">Description</Text>
                                    <Text className="font-calsans text-base">House Rent</Text>

                                </View>


                                <View className="bg-white mt-4 p-6 rounded-lg shadow-lg">

                                    <Text className="text-gray-500 text-xs">Favorite</Text>

                                    <View className="flex-row justify-between">
                                        <Text className="font-calsans text-base">Save Beneficiary</Text>

                                        <View className="flex-row border rounded-full p-1 w-14">
                                            <TouchableOpacity
                                                className={`flex-1 py-2 rounded-full items-center ${isToggled ? 'bg-transparent' : 'bg-red-700'}`}
                                                onPress={() => setIsToggled(false)}
                                            >
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                className={`flex-1 py-2 rounded-full items-center ${isToggled ? 'bg-red-700' : 'bg-transparent'}`}
                                                onPress={() => setIsToggled(true)}
                                            >
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>

                                <View className="flex items-center mt-4">
                                    <TouchableOpacity >
                                        <Text className="font-calsans text-red-700 text-lg">
                                            Pay Again
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity className="bg-red-700 px-6 py-1 rounded-3xl mt-2 flex-row items-center space-x-2">
                                        <Text className="font-calsans text-white">
                                            Share Receipt
                                        </Text>
                                        <FontAwesomeIcon icon={faShareAlt} color="#ffffff" />
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

export default Receipt; 