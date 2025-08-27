import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import bgImage from '../../assets/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLightbulb, faPhone, faTelevision, faWifi } from '@fortawesome/free-solid-svg-icons';

import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';


const Bills = () => {
    const navigation = useNavigation();
    const [isToggled, setIsToggled] = useState(false);
    return (


        <View className="flex-1">

            <ImageBackground source={bgImage} resizeMode="cover" className="h-full w-full">

                <Header title="Pay Bills" />


                <View className="px-6 py-6 pb-10 shadow bg-white my-5 rounded-3xl  -mt-6 overflow-hidden">

                    <Text className="font-calsans text-lg text-gray-700 mb-4">Pay Bills</Text>


                    <View className="flex-row justify-between mb-6">

                        <TouchableOpacity className="flex items-center space-y-2" onPress={() => navigation.navigate('Airtime')}>
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faPhone} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Buy Airtime</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2" onPress={() => navigation.navigate('Data')}>
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faWifi} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Buy Data</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2">
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faTelevision} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">TV Sub</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2">
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faLightbulb} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Electricity</Text>
                        </TouchableOpacity>
                    </View>

                    
                    <View className="flex-row justify-between mb-6">

                        <TouchableOpacity className="flex items-center space-y-2" onPress={() => navigation.navigate('Airtime')}>
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faPhone} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Buy Airtime</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2" onPress={() => navigation.navigate('Data')}>
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faWifi} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Buy Data</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2">
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faTelevision} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">TV Sub</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2">
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faLightbulb} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Electricity</Text>
                        </TouchableOpacity>
                    </View>


                    <View className="flex-row justify-between ">

                        <TouchableOpacity className="flex items-center space-y-2" onPress={() => navigation.navigate('Airtime')}>
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faPhone} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Buy Airtime</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2" onPress={() => navigation.navigate('Data')}>
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faWifi} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Buy Data</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2">
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faTelevision} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">TV Sub</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="flex items-center space-y-2">
                            <View className="bg-red-100 p-6 rounded-xl">
                                <FontAwesomeIcon icon={faLightbulb} size={20} color="#B91C1C" />
                            </View>
                            <Text className="text-xs">Electricity</Text>
                        </TouchableOpacity>
                    </View>



                </View>



            </ImageBackground>
        </View>

    );
};

export default Bills; 