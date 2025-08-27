import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons';

import redbg from '../assets/redbg.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Header  = ({title}) => {
    const navigation=useNavigation();
  return (

            <View className="overflow-hidden h-[120px]">
                <ImageBackground source={redbg} resizeMode="cover" className="h-full w-full">
                    <View className="h-50 bg-black/40 h-full w-full px-6">
                        <SafeAreaView className="flex-row justify-between items-center mt-6">
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <FontAwesomeIcon icon={faAngleLeft} size={22} color='#FFFFFF' />
                            </TouchableOpacity>
                            <Text className="text-white">{title}</Text>
                            <View></View>
                        </SafeAreaView>
                    </View>
                </ImageBackground>
            </View>
  )
}

export default Header;
