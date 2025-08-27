import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, TextInput, Animated } from 'react-native';
import bgImage from '../../assets/background.jpg';
import redbg from '../../assets/redbg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import FormField from '../../components/FormField';
import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';



const Data= () => {
    const navigation = useNavigation();
    const [isToggled, setIsToggled] = useState(false);

    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const categories = [
        { id: '1', title: 'MTN', image: require('../../assets/logo.png') },
        { id: '2', title: 'GLO', image: require('../../assets/logo.png') },
        { id: '3', title: 'AIRTEL', image: require('../../assets/logo.png') },
        { id: '4', title: '9MOBILE', image: require('../../assets/logo.png') },
    ];

    const subcategories = {
        '1': [
            { id: '1-1', title: '₦1000/3.2GB'},
            { id: '1-2', title: '₦2000/4.2GB'},
        ],
        '2': [
            { id: '2-1', title: '₦1000/3.2GB'},
            { id: '2-2', title: '₦2000/4.2GB'},
        ],
        '3': [
            { id: '3-1', title: '₦1000/3.2GB'},
            { id: '3-2', title: '₦2000/4.2GB'},
        ],
    };


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

            <Header title="Buy Data" />
            <View className="flex-1 bg-white rounded-3xl  -mt-6 overflow-hidden">


                <ImageBackground source={bgImage} resizeMode="cover" className="w-full h-full">
                    <View className="p-6 my-2 mb-12 flex-1">


                        <FormField
                            title="Phone Number"
                            placeholder='Phone Number'
                            otherStyles="mb-4 mt-7"
                        />

                        <Text className="text-base text-gray-500 ">Select Network</Text>

                        <Dropdown
                            items={categories}
                            selectedItem={selectedCategory}
                            onSelect={(item) => {
                                setSelectedCategory(item);
                                setSelectedSubcategory(null); // Reset subcategory on category change
                            }}
                            placeholder="Select Network"
                        />
                        <Dropdown
                            items={selectedCategory ? subcategories[selectedCategory.id] : []}
                            selectedItem={selectedSubcategory}
                            onSelect={setSelectedSubcategory}
                            placeholder="Select Plan"
                        />

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
                                            <Text className="font-calsans text-lg">Network</Text>
                                            <Text className="font-varela text-lg">MTN</Text>
                                        </View>

                                        <View className="flex-row justify-between mb-3">
                                            <Text className="font-calsans text-lg">Plan</Text>
                                            <Text className="font-varela text-lg">3.2GB</Text>
                                        </View>


                                        <View className="flex-row justify-between">
                                            <Text className="font-calsans text-lg">Phone Number</Text>
                                            <Text className="font-varela text-lg">0800000001</Text>
                                        </View>

                                    </View>



                                    <View className="mx-20 items-center bg-gray-100 border border-gray-400 rounded-2xl p-4 py-2 mb-5">
                                       
                                        <TextInput
                                            className="font-varela text-3xl pb-0 text-center"
                                            placeholder="PIN"
                                            placeholderTextColor="#707070"
                                            keyboardType="numeric"
                                            secureTextEntry={true}
                                            maxLength={4}
                                        />
                                    </View>


                                    <TouchableOpacity
                                        className="bg-red-700 py-3 px-6 rounded items-center"
                                        onPress={() => navigation.replace('Successful')}
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

export default Data;