// screens/OpenAccount.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import bgImage from '../assets/background.jpg';
import FormField from '../components/FormField';
import { useNavigation, useRoute } from '@react-navigation/native';


const { width } = Dimensions.get('window');


const NewAccount = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const accountType = route.params?.accountType || 'Go back to select an Account';


    const stages = [
        {
            title: 'Open ' + accountType + ' Account',
            description: 'Open ' + accountType + ' Account with UBA',
            fields: ['Name', 'Email',],
        },
        {
            title: 'Personal Information',
            description: 'Set up your account credentials',
            fields: ['Username', 'Password'],
        },
        {
            title: 'Confirmation Request',
            description: 'Review and confirm your details',
            fields: [],
        },
    ];

    const [currentStage, setCurrentStage] = useState(0);

    const goToNextStage = () => {
        if (currentStage < stages.length - 1) {
            setCurrentStage(currentStage + 1);
        } else {
            // Handle registration completion (e.g., navigate to Login)
            navigation.replace('Auth');
        }
    };

    const goToPreviousStage = () => {
        if (currentStage > 0) {
            setCurrentStage(currentStage - 1);
        }
    };

    return (

     
             <View className="flex-1">
                 <ImageBackground source={bgImage} resizeMode="cover" className="h-full w-full">
     
                     <View className="px-6 flex-1 bg-white bg-red-100/10 py-16">
     
     

                    <View className="flex-row items-center justify-center mb-6">
                        {stages.map((_, index) => (
                            <View key={index} className="flex-row items-center">
                                <View
                                    className={`rounded-full border-2 ${currentStage === index ? 'w-12 h-12 bg-red-700 font-varela border-red-700' : 'border-gray-300 w-10 h-10'
                                        } justify-center items-center`}
                                >
                                    <Text
                                        className={`text-center font-varela-regular ${currentStage === index ? 'text-white text-lg' : 'text-gray-600 text-base'
                                            }`}
                                    >
                                        {index + 1}
                                    </Text>
                                </View>
                                {index < stages.length - 1 && <View className="w-12 h-1 bg-gray-300" />}
                            </View>
                        ))}
                    </View>

                    {/* Stage Content */}
                    <View className="flex-1 ">
                        <Text className="text-xl font-calsans mb-1">
                            {stages[currentStage].title}
                        </Text>
                        <Text className="text-base font-varela mb-2">
                            {stages[currentStage].description}
                        </Text>


                        {currentStage === 0 && (

                            <>
                                <FormField
                                    placeholder='First Name'
                                />


                                <FormField
                                    placeholder='Surname'
                                />


                                <FormField
                                    placeholder='BVN'
                                />

                                <FormField
                                    placeholder='Date of Birth'
                                    otherStyles="mb-6"
                                />



                                <View className="flex-row space-x-1">

                                    <TouchableOpacity
                                        className="bg-red-700 py-3 px-6 rounded items-center w-[20%]"
                                        onPress={() => navigation.pop()}
                                    >
                                        <Text className="text-white text-base font-varela">
                                            <FontAwesomeIcon icon={faArrowLeft} size={22} color="#FFFFFF"></FontAwesomeIcon>
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        className="bg-red-700 py-3 px-6 rounded items-center flex-1"
                                        onPress={goToNextStage}
                                    >
                                        <Text className="text-white text-base font-varela">Continue</Text>
                                    </TouchableOpacity>

                                </View>

                            </>

                        )}


                        {currentStage === 1 && (

                            <>
                                <FormField
                                    placeholder='State of Origin'
                                    otherStyles=""
                                />

                                <FormField
                                    placeholder='Country'
                                    otherStyles=""
                                />

                                <FormField
                                    placeholder='Local Government Area'
                                />


                                <FormField
                                    placeholder='Means of Identification'
                                    otherStyles="mb-6"
                                />


                                <View className="flex-row space-x-1">
                                    <TouchableOpacity
                                        className="bg-red-700 py-3 px-6 rounded items-center w-[20%]"
                                        onPress={goToPreviousStage}
                                    >
                                        <Text className="text-white text-base font-varela">
                                            <FontAwesomeIcon icon={faArrowLeft} size={22} color="#FFFFFF"></FontAwesomeIcon>
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        className="bg-red-700 py-3 px-6 rounded items-center flex-1"
                                        onPress={goToNextStage}
                                    >
                                        <Text className="text-white text-base font-varela">Continue</Text>
                                    </TouchableOpacity>
                                </View>

                            </>

                        )}


                        {currentStage === 2 && (

                            <>
                                <FormField
                                    placeholder='Account Number'
                                    otherStyles="mb-2"
                                />

                                <FormField
                                    placeholder='Corporate ID'
                                    otherStyles="mb-2"
                                />

                                <FormField
                                    title="Password"
                                    placeholder='Password'
                                    otherStyles="mb-2"
                                />

                                <Text className="text-base font-varela text-gray-600 mb-8">
                                    Demo details listed out already
                                </Text>


                                <View className="flex-row space-x-1">
                                    <TouchableOpacity
                                        className="bg-red-700 py-3 px-6 rounded items-center w-[20%]"
                                        onPress={goToPreviousStage}
                                    >
                                        <Text className="text-white text-base font-varela">
                                            <FontAwesomeIcon icon={faArrowLeft} size={22} color="#FFFFFF"></FontAwesomeIcon>
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        className="bg-red-700 py-3 px-6 rounded items-center flex-1"
                                        onPress={() => navigation.replace('Dashboard')}
                                    >
                                        <Text className="text-white text-base font-varela">Proceed to Dashboard</Text>
                                    </TouchableOpacity>
                                </View>

                            </>

                        )}


                    </View>

                </View>
            </ImageBackground>
        </View>
    );
};

export default NewAccount;