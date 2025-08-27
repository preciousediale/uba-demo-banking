import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import bgImage from '../assets/background.jpg';

import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';


const Notifications = () => {
    const navigation = useNavigation();
    const [isToggled, setIsToggled] = useState(false);
    return (
        <View className="flex-1">

            <ImageBackground source={bgImage} resizeMode="cover" className="h-full w-full">

                <Header title="Notifications" />


                <View className=" flex-1 px-6 py-6 pb-10 shadow bg-white my-5 rounded-3xl  -mt-6 overflow-hidden">
                <ScrollView>
                    <View className="flex items-center space-x-2">
                  

                    <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <View className="flex-row items-center space-x-2">
                            <Text className="text-gray-500 text-xs">09:23pm, 23 Aug, 2026</Text>
                            <View className="rounded-full bg-green-500 w-2 h-2"></View>
                            </View>
                            <Text className="font-varela text-base">Keep your account secured from prospective fradulent act and scammers</Text>
                        </View>


                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <View className="flex-row items-center space-x-2">
                            <Text className="text-gray-500 text-xs">09:23pm, 23 Aug, 2026</Text>
                            <View className="rounded-full bg-green-500 w-2 h-2"></View>
                            </View>
                            <Text className="font-varela text-base">Keep your account secured from prospective fradulent act and scammers</Text>
                        </View>


                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <View className="flex-row items-center space-x-2">
                            <Text className="text-gray-500 text-xs">09:23pm, 23 Aug, 2026</Text>
                            <View className="rounded-full bg-green-500 w-2 h-2"></View>
                            </View>
                            <Text className="font-varela text-base">Keep your account secured from prospective fradulent act and scammers</Text>
                        </View>


                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <View className="flex-row items-center space-x-2">
                            <Text className="text-gray-500 text-xs">09:23pm, 23 Aug, 2026</Text>
                            <View className="rounded-full bg-green-500 w-2 h-2"></View>
                            </View>
                            <Text className="font-varela text-base">Keep your account secured from prospective fradulent act and scammers</Text>
                        </View>

                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <View className="flex-row items-center space-x-2">
                            <Text className="text-gray-500 text-xs">09:23pm, 23 Aug, 2026</Text>
                            <View className="rounded-full bg-green-500 w-2 h-2"></View>
                            </View>
                            <Text className="font-varela text-base">Keep your account secured from prospective fradulent act and scammers</Text>
                        </View>


                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <View className="flex-row items-center space-x-2">
                            <Text className="text-gray-500 text-xs">09:23pm, 23 Aug, 2026</Text>
                            <View className="rounded-full bg-green-500 w-2 h-2"></View>
                            </View>
                            <Text className="font-varela text-base">Keep your account secured from prospective fradulent act and scammers</Text>
                        </View>


                        <View className="mt-4 p-6 py-4 border-gray-200 border rounded-lg w-full">
                            <View className="flex-row items-center space-x-2">
                            <Text className="text-gray-500 text-xs">09:23pm, 23 Aug, 2026</Text>
                            <View className="rounded-full bg-green-500 w-2 h-2"></View>
                            </View>
                            <Text className="font-varela text-base">Keep your account secured from prospective fradulent act and scammers</Text>
                        </View>



                        <TouchableOpacity className="mt-6">
                            <Text className="font-calsans text-base text-red-700">Clear Notifications</Text>
                        </TouchableOpacity>


                    </View>
                    </ScrollView>


                </View>



            </ImageBackground>
        </View>

    );
};

export default Notifications 