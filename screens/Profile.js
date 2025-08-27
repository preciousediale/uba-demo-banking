import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity} from 'react-native';
import bgImage from '../assets/background.jpg';

import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';


const Profile = () => {
    const navigation = useNavigation();
    const [isToggled, setIsToggled] = useState(false);
    return (


        <View className="flex-1">

            <ImageBackground source={bgImage} resizeMode="cover" className="h-full w-full">

                <Header title="My Profile" />


                <View className="px-6 py-6 pb-10 shadow bg-white my-5 rounded-3xl  -mt-6 overflow-hidden">

                    <View className="flex items-center space-x-2">
                        <View className="rounded-full h-28 w-28 overflow-hidden">
                            <Image source={require('../assets/onboard1.png')} className="h-full w-full" resizeMode="cover" />
                        </View>

                        <Text className="font-calsans text-lg">Olamide Chukwudi Musa</Text>


                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <Text className="text-gray-500 text-xs">Account Name</Text>
                            <Text className="font-calsans text-base">Olamide Chukwudi Musa</Text>
                        </View>

                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <Text className="text-gray-500 text-xs">Address</Text>
                            <Text className="font-calsans text-base">Central Business District, Abuja</Text>
                        </View>

                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <Text className="text-gray-500 text-xs">Email</Text>
                            <Text className="font-calsans text-base">olamidechukwudimusa@gmail.com</Text>
                        </View>


                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <Text className="text-gray-500 text-xs">Phone Number</Text>
                            <Text className="font-calsans text-base">+234810000002</Text>
                        </View>


                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <Text className="text-gray-500 text-xs">Account Number</Text>
                            <Text className="font-calsans text-base">200200020 | 200200020 </Text>
                        </View>


                        <TouchableOpacity className="mt-6">
                            <Text className="font-calsans text-base text-red-700">Upgrade Account</Text>
                        </TouchableOpacity>


                    </View>



                </View>



            </ImageBackground>
        </View>

    );
};

export default Profile; 