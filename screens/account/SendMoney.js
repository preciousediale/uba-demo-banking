import React, { useRef, useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions, TextInput, Animated } from 'react-native';
import bgImage from '../../assets/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import FormField from '../../components/FormField';
import Header from '../../components/Header';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../components/Dropdown';



const SendMoney = () => {
    const navigation = useNavigation();
    const [isToggled, setIsToggled] = useState(false);

    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    const [account, setAccount] = useState(null);
         
    const accounts = [
        { id: '1', title: 'Account 1 (₦50,0000)' },
        { id: '2', title: 'Account 2 (₦250,0000)'},
        { id: '3', title: 'Account 3 (₦3,000,000)'}
    ];
    const [bank, setBank] = useState(null);
     
    const banks = [
        { id: '1', title: 'UBA', image: require('../../assets/logo.png') },
        { id: '2', title: 'GTBank', image: require('../../assets/logo.png') },
        { id: '3', title: 'Zenith', image: require('../../assets/logo.png') },
        { id: '4', title: 'Access', image: require('../../assets/logo.png') },
        { id: '5', title: 'Opay', image: require('../../assets/logo.png') },
        { id: '6', title: 'Moniepoint', image: require('../../assets/logo.png') },
        { id: '7', title: 'Kuda', image: require('../../assets/logo.png') },
    ];
    

    const openPopup = () => {
        setShowLoginPopup(true);

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
        });
    };

    return (

        <View className="flex-1">

            <Header title="Send Money"/>
            <View className="flex-1 bg-white rounded-3xl  -mt-6 overflow-hidden">


                <ImageBackground source={bgImage} resizeMode="cover" className="w-full h-full">
                    <View className="p-6 my-2 mb-12 flex-1">

    
                    <Dropdown
                            items={accounts}
                            selectedItem={account}
                            onSelect={(item) => {
                                setAccount(item);
                            }}
                            placeholder="Select Account"
                        />

                    <FormField
                            title="Account Number"
                            placeholder='Account Number'
                            otherStyles="mb-4"
                        />



                        <Text className="text-base text-gray-500 mt-2">Select Bank</Text>
                        <View className="flex-row my-2 justify-between mb-5">

                            <TouchableOpacity className="bg-gray-100 p-3 w-[80px] rounded-lg items-center">
                                <Image source={require('../../assets/logo.png')} className="mb-2 h-5 w-5" />
                                <Text className="text-xs">UBA</Text>
                            </TouchableOpacity>

                            <TouchableOpacity className="bg-gray-100 p-3 w-[80px] rounded-lg items-center">
                                <Image source={require('../../assets/logo.png')} className="mb-2 h-5 w-5" />
                                <Text className="text-xs">GTBank</Text>
                            </TouchableOpacity>

                            <TouchableOpacity className="bg-gray-100 p-3 w-[80px] rounded-lg items-center">
                                <Image source={require('../../assets/logo.png')} className="mb-2 h-5 w-5" />
                                <Text className="text-xs">Zenith</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-gray-100 p-3 w-[80px] rounded-lg items-center">
                                <Image source={require('../../assets/logo.png')} className="mb-2 h-5 w-5" />
                                <Text className="text-xs">Access</Text>
                            </TouchableOpacity>
                        </View>

                        
                        <Dropdown
                            items={banks}
                            selectedItem={bank}
                            onSelect={(item) => {
                                setBank(item);
                            }}
                            placeholder="Select Bank"
                            style="mb-2"
                        />

                        <Text className="font-varela text-lg mb-3 text-red-700">Olamide Chukwudi Musa</Text>



                        <TouchableOpacity
                            className="bg-red-700 py-3 px-6 mt-3 rounded items-center"
                            onPress={() => openPopup()}
                        >
                            <Text className="text-white text-base font-varela">Proceed</Text>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>

            </View>

            {(showLoginPopup) && (
                <View className="absolute inset-0 w-full h-full">
                    <TouchableOpacity
                        className="flex-1 bg-black/50"
                        activeOpacity={1}
                        onPress={closePopup}
                    />
                    <Animated.View
                        className="absolute top-[30%] left-0 right-0 bg-white rounded-t-3xl shadow-lg"
                        style={{
                            transform: [{ translateY: slideAnim }],
                            height: 'auto',
                        }}
                    >
                        <View className="flex-1 p-10 pb-8">
                            {showLoginPopup && (
                                <>
                                    <View className="flex-row justify-between mb-8">
                                        <Text className="text-xl  text-black text-center">Confirm Transaction</Text>
                                        <TouchableOpacity onPress={closePopup}>
                                            <FontAwesomeIcon icon={faTimesCircle} size={22} color="#000000" />
                                        </TouchableOpacity>
                                    </View>

                                    <View className="border border-gray-300 rounded-lg p-3 mb-4">

                                        <View className="flex-row justify-between mb-3">
                                            <Text className="font-calsans text-lg">Amount</Text>
                                            <Text className="font-varela text-lg">₦2,000</Text>
                                        </View>
                                        <View className="flex-row justify-between mb-3">
                                            <Text className="font-calsans text-lg">Bank</Text>
                                            <Text className="font-varela text-lg">UBA</Text>
                                        </View>


                                        <View className="flex-row justify-between">
                                            <Text className="font-calsans text-lg">Receiver</Text>
                                            <Text className="font-varela text-lg">Olamide Chukwudi Musa</Text>
                                        </View>

                                    </View>



                                    <View className="mx-20 items-center bg-gray-100 border border-gray-400 rounded-2xl p-4 py-2 mb-5">
                                        <Text className="">Enter PIN</Text>
                                        <TextInput
                                            className="font-varela text-3xl pb-0 text-center"
                                            placeholder="XXXX"
                                            placeholderTextColor="#707070"
                                            keyboardType="numeric"
                                            secureTextEntry={true}
                                            maxLength={4}
                                        />
                                    </View>


                                    <TouchableOpacity
                                        className="bg-red-700 py-3 px-6 rounded items-center"
                                        onPress={() => navigation.replace('Success')}
                                    >
                                        <Text className="text-white text-base font-varela">Proceed</Text>
                                    </TouchableOpacity>

                                </>
                            )}
                        </View>
                    </Animated.View>
                </View>
            )}
        </View>

    );
};

export default SendMoney;