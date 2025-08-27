// screens/Dashboard.js
import React, { useRef, useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, ScrollView, Dimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import bgImage from '../assets/background.jpg';
import redbg from '../assets/redbg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell, faCopy, faPlusCircle, faEye, faEyeSlash, faPaperPlane, faNewspaper, faDashboard, faPhone, faWifi, faTelevision, faLightbulb, faAngleRight, faTimesCircle, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const slides = [
  { content: 'Slide 1: Welcome to your dashboard! Slide 1: Welcome to your dashboard! Slide 1: Welcome to your dashboard! Slide 1: Welcome to your dashboard!' },
  { content: 'Slide 2: Explore your account features.' },
  { content: 'Slide 3: Get started with your journey.' },
];

const Dashboard = () => {
  const [accountType, setAccountType] = useState('Personal');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [showBalance, setShowBalance] = useState(true);
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const scrollRef = useRef(null);
  const menuAnim = useRef(new Animated.Value(-width * 0.75)).current;

  const handleContainerLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const onScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slide);
  };

  const openMenu = () => {
    setShowMenu(true);
    Animated.timing(menuAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(menuAnim, {
      toValue: -width * 0.75,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowMenu(false));
  };

  return (
    <>
      {accountType === 'Personal' ? (
        <View className="flex-1">
          <ImageBackground source={bgImage} resizeMode="cover" className="h-full w-full">
            <View className="flex-1">
              <View className="px-5 pt-16">
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity onPress={openMenu}>
                    <FontAwesomeIcon icon={faBars} size={22} color="#B91C1C" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')} className="flex-row items-center space-x-2">
                    <View className="rounded-full h-12 w-12 overflow-hidden">
                      <Image source={require('../assets/onboard1.png')} className="h-full w-full" resizeMode="cover" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <FontAwesomeIcon icon={faBell} size={22} color="#B91C1C" />
                  </TouchableOpacity>
                </View>

                <View className="flex-row my-4 px-5">
                  <TouchableOpacity
                    className={`flex-1 py-2 px-2 rounded-l items-center border ${accountType === 'Personal' ? 'bg-red-700' : ''}`}
                    onPress={() => setAccountType('Personal')}
                  >
                    <Text className={`text-sm font-varela-regular ${accountType === 'Personal' ? 'text-white' : ''}`}>Personal</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={`flex-1 px-2 py-2 rounded-r items-center border ${accountType === 'Business' ? 'bg-red-700 text-white' : ''}`}
                    onPress={() => setAccountType('Business')}
                  >
                    <Text className={`text-sm font-varela-regular ${accountType === 'Business' ? 'text-white' : ''}`}>Business</Text>
                  </TouchableOpacity>
                </View>

                <View onLayout={handleContainerLayout} className="w-full">
                  <ScrollView
                    ref={scrollRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    contentContainerStyle={{ alignItems: 'center' }}
                  >
                    {slides.map((_, index) => (
                      <View key={index} className="px-1" style={{ width: containerWidth }}>
                        <View className="rounded-xl bg-white h-30 overflow-hidden">
                          <ImageBackground source={redbg} resizeMode="cover" className="">
                            <View className="bg-black/30 p-5 flex-row justify-between">
                              <View>
                                <View className="flex-row items-center space-x-1">
                                  <Text className="text-white text-sm font-varela">2046235454</Text>
                                  <FontAwesomeIcon icon={faCopy} size={14} color="#FFFFFF" />
                                </View>
                                <Text className="text-white text-xs font-varela">Current Account</Text>
                              </View>
                              <Text className="text-white text-sm font-varela">Account {index + 1}</Text>
                              <View className="flex-row items-center space-x-1">
                                <FontAwesomeIcon icon={faPlusCircle} size={22} color="#FFFFFF" />
                              </View>
                            </View>
                            <View className="p-5 flex-row justify-between items-center">
                              <View className="flex-row items-center space-x-1">
                                <Text className="text-white font-varela">NGN</Text>
                                <Text className="text-white text-xl font-calsans">{`${showBalance ? 'XXXXXXXX' : '250,000,000'}`}</Text>
                                <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                                  {!showBalance ? <FontAwesomeIcon icon={faEyeSlash} size={20} color="#FFFFFF" /> : <FontAwesomeIcon icon={faEye} size={10} color="#FFFFFF" />}
                                </TouchableOpacity>
                              </View>
                              <FontAwesomeIcon icon={faRefresh} size={16} color="#FFFFFF" />
                            </View>
                          </ImageBackground>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                  <View className="flex-row justify-center mt-4">
                    {slides.map((_, index) => (
                      <View
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 ${currentSlide === index ? 'bg-red-700' : 'bg-gray-300'}`}
                      />
                    ))}
                  </View>
                </View>
              </View>

              <View className="px-5 pt-4 mb-12 h-full flex-1">
                <ScrollView>
                  <View className="bg-gray-200 rounded-xl p-2 flex-row space-x-2">
                    <TouchableOpacity onPress={()=>{navigation.navigate('SendMoney')}} className="bg-white rounded-xl p-3 flex-1 flex items-center space-y-2">
                      <View className="bg-red-100 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faPaperPlane} size={20} color="#B91C1C" />
                      </View>
                      <Text className="text-xs">Send Money</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white rounded-xl p-3 flex-1 flex items-center space-y-2" onPress={() => navigation.navigate('Bills')}>
                      <View className="bg-red-100 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faNewspaper} size={20} color="#B91C1C" />
                      </View>
                      <Text className="text-xs">Pay Bills</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Transactions')} className="bg-white rounded-xl p-3 flex-1 flex items-center space-y-2">
                      <View className="bg-red-100 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faDashboard} size={20} color="#B91C1C" />
                      </View>
                      <Text className="text-xs">Transactions</Text>
                    </TouchableOpacity>
                  </View>

                  <View className="px-6 py-4 shadow bg-white rounded-xl my-5">
                    <Text className="font-calsans text-md text-gray-500 mb-4">Quick Action</Text>
                    <View className="flex-row justify-between">
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

                  <View className="px-6 py-4 shadow bg-white rounded-xl">
                    <View className="flex-row justify-between items-center">
                      <Text className="font-calsans text-sm mb-4 text-gray-500">Transactions</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
                        <FontAwesomeIcon icon={faAngleRight} size={16} />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="flex-row items-center justify-between mb-6" onPress={() => navigation.navigate('Receipt')}>
                      <View className="flex-row space-x-2">
                        <View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                          <Image source={require('../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                        </View>
                        <View>
                          <Text className="font-calsans">Olamide Musa Chukwudi</Text>
                          <Text className="text-xs mt-1 text-gray-500 text-varela">12 Dec, 2026 - 06:16pm</Text>
                        </View>
                      </View>
                      <Text className="font-calsans text-sm">- N5,353.00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between mb-6" onPress={() => navigation.navigate('Receipt')}>
                      <View className="flex-row space-x-2">
                        <View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                          <Image source={require('../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                        </View>
                        <View>
                          <Text className="font-calsans">Olamide Musa Chukwudi</Text>
                          <Text className="text-xs mt-1 text-gray-500 text-varela">12 Dec, 2026 - 06:16pm</Text>
                        </View>
                      </View>
                      <Text className="font-calsans text-sm text-green-500">+ N5,353.00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between" onPress={() => navigation.navigate('Receipt')}>
                      <View className="flex-row space-x-2">
                        <View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                          <Image source={require('../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                        </View>
                        <View>
                          <Text className="font-calsans">Olamide Musa Chukwudi</Text>
                          <Text className="text-xs mt-1 text-gray-500 text-varela">12 Dec, 2026 - 06:16pm</Text>
                        </View>
                      </View>
                      <Text className="font-calsans text-sm text-green-500">+ N5,353.00</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </ImageBackground>
        </View>
      ) : (
        <View className="flex-1">
          <ImageBackground source={bgImage} resizeMode="cover" className="h-full w-full">
            <View className="flex-1">
              <View className="px-5 pt-16">
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity onPress={openMenu}>
                    <FontAwesomeIcon icon={faBars} size={22} color="#B91C1C" />
                  </TouchableOpacity>
                  <View className="flex-row items-center space-x-2">
                    <View className="rounded-full h-12 w-12 overflow-hidden">
                      <Image source={require('../assets/onboard1.png')} className="h-full w-full" resizeMode="cover" />
                    </View>
                  </View>
                  <FontAwesomeIcon icon={faBell} size={22} color="#B91C1C" />
                </View>

                <View className="flex-row my-4 px-5">
                  <TouchableOpacity
                    className={`flex-1 py-2 px-2 rounded-l items-center border ${accountType === 'Personal' ? 'bg-red-700' : ''}`}
                    onPress={() => setAccountType('Personal')}
                  >
                    <Text className={`text-sm font-varela-regular ${accountType === 'Personal' ? 'text-white' : ''}`}>Personal</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={`flex-1 px-2 py-2 rounded-r items-center border ${accountType === 'Business' ? 'bg-red-700 text-white' : ''}`}
                    onPress={() => setAccountType('Business')}
                  >
                    <Text className={`text-sm font-varela-regular ${accountType === 'Business' ? 'text-white' : ''}`}>Business</Text>
                  </TouchableOpacity>
                </View>

                <View onLayout={handleContainerLayout} className="w-full">
                  <ScrollView
                    ref={scrollRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    contentContainerStyle={{ alignItems: 'center' }}
                  >
                    {slides.map((_, index) => (
                      <View key={index} className="px-1" style={{ width: containerWidth }}>
                        <View className="rounded-xl bg-white h-30 overflow-hidden">
                          <ImageBackground source={redbg} resizeMode="cover" className="">
                            <View className="bg-black/30 p-5 flex-row justify-between">
                              <View>
                                <View className="flex-row items-center space-x-1">
                                  <Text className="text-white text-sm font-varela">2046235454</Text>
                                  <FontAwesomeIcon icon={faCopy} size={14} color="#FFFFFF" />
                                </View>
                                <Text className="text-white text-sm font-varela">Business Account</Text>
                              </View>
                              <Text className="text-white text-sm font-varela">Account {index + 1}</Text>
                              <View className="flex-row items-center space-x-1">
                                <FontAwesomeIcon icon={faPlusCircle} size={22} color="#FFFFFF" />
                              </View>
                            </View>
                            <View className="p-5 flex-row justify-between items-center">
                              <View className="flex-row items-center space-x-1">
                                <Text className="text-white font-varela">NGN</Text>
                                <Text className="text-white text-xl font-calsans">{`${showBalance ? 'XXXXXXXX' : '250,000,000'}`}</Text>
                                <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                                  {!showBalance ? <FontAwesomeIcon icon={faEyeSlash} size={14} color="#FFFFFF" /> : <FontAwesomeIcon icon={faEye} size={14} color="#FFFFFF" />}
                                </TouchableOpacity>
                              </View>
                              <FontAwesomeIcon icon={faRefresh} size={14} color="#FFFFFF" />
                            </View>
                          </ImageBackground>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                  <View className="flex-row justify-center mt-4">
                    {slides.map((_, index) => (
                      <View
                        key={index}
                        className={`h-2 w-2 rounded-full mx-1 ${currentSlide === index ? 'bg-red-700' : 'bg-gray-300'}`}
                      />
                    ))}
                  </View>
                </View>
              </View>

              <View className="px-5 pt-2 mb-12 h-full flex-1">
                <ScrollView>
                  <View className="bg-gray-200 rounded-xl p-2 flex-row space-x-2">
                    <TouchableOpacity onPress={()=>navigation.navigate('SendMoney')} className="bg-white rounded-xl p-3 flex-1 flex items-center space-y-2">
                      <View className="bg-red-100 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faPaperPlane} size={20} color="#B91C1C" />
                      </View>
                      <Text className="text-xs">Send Money</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white rounded-xl p-3 flex-1 flex items-center space-y-2">
                      <View className="bg-red-100 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faNewspaper} size={20} color="#B91C1C" />
                      </View>
                      <Text className="text-xs">Statement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Transactions')} className="bg-white rounded-xl p-3 flex-1 flex items-center space-y-2">
                      <View className="bg-red-100 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faDashboard} size={20} color="#B91C1C" />
                      </View>
                      <Text className="text-xs">Transactions</Text>
                    </TouchableOpacity>
                  </View>

                  <View className="px-6 py-4 shadow bg-white rounded-xl mt-4">
                    <View className="flex-row justify-between items-center">
                      <Text className="font-calsans text-sm mb-4 text-gray-500">Transactions</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
                        <FontAwesomeIcon icon={faAngleRight} size={16} />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="flex-row items-center justify-between mb-6" onPress={() => navigation.navigate('Receipt')}>
                      <View className="flex-row space-x-2">
                        <View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                          <Image source={require('../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                        </View>
                        <View>
                          <Text className="font-calsans">Olamide Musa Chukwudi</Text>
                          <Text className="text-xs mt-1 text-gray-500 text-varela">12 Dec, 2026 - 06:16pm</Text>
                        </View>
                      </View>
                      <Text className="font-calsans text-sm">- N5,353.00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between mb-6" onPress={() => navigation.navigate('Receipt')}>
                      <View className="flex-row space-x-2">
                        <View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                          <Image source={require('../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                        </View>
                        <View>
                          <Text className="font-calsans">Olamide Musa Chukwudi</Text>
                          <Text className="text-xs mt-1 text-gray-500 text-varela">12 Dec, 2026 - 06:16pm</Text>
                        </View>
                      </View>
                      <Text className="font-calsans text-sm text-green-500">+ N5,353.00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center justify-between" onPress={() => navigation.navigate('Receipt')}>
                      <View className="flex-row space-x-2">
                        <View className="bg-red-100 p-2 rounded-xl h-12 w-12">
                          <Image source={require('../assets/logo.png')} className="h-full w-full" resizeMode="cover" />
                        </View>
                        <View>
                          <Text className="font-calsans">Olamide Musa Chukwudi</Text>
                          <Text className="text-xs mt-1 text-gray-500 text-varela">12 Dec, 2026 - 06:16pm</Text>
                        </View>
                      </View>
                      <Text className="font-calsans text-sm text-green-500">+ N5,353.00</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}

      {/* Sliding Menu */}
      {showMenu && (
        <View className="absolute inset-0 w-full h-full z-50">
          <TouchableOpacity
            className="bg-black/90 w-full h-full"
            activeOpacity={1}
            onPress={closeMenu}
          />
          <Animated.View
            className="absolute top-0 left-0 bottom-0 bg-white w-[65%] shadow-lg"
            style={{
              transform: [{ translateX: menuAnim }],
            }}
          >
            <SafeAreaView className=" p-6 w-full">

              <View className="flex-row justify-between">
                
              <View></View>
              <TouchableOpacity onPress={closeMenu} className="mb-4">
                <FontAwesomeIcon icon={faTimesCircle} size={18} color="#000000" />
              </TouchableOpacity>
              </View>

              <View className="items-center">
              <Image source={require('../assets/logo.png')} className="w-28 h-28"/>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')} className="py-3 mt-2 pb-4 flex-row justify-between border-b border-red-700">
                <Text className="text-base font-varela">My Profile</Text>
                <FontAwesomeIcon icon={faAngleRight} size={18}/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>navigation.navigate('SendMoney')} className="py-3 mt-2 pb-4 flex-row justify-between border-b border-red-700">
                <Text className="text-base font-varela">Send Money</Text>
                <FontAwesomeIcon icon={faAngleRight} size={18}/>
              </TouchableOpacity>

              
              <TouchableOpacity onPress={()=>navigation.navigate('Bills')} className="py-3 mt-2 pb-4 flex-row justify-between border-b border-red-700">
                <Text className="text-base font-varela">Pay Bills</Text>
                <FontAwesomeIcon icon={faAngleRight} size={18}/>
              </TouchableOpacity>

              
              <TouchableOpacity onPress={()=>navigation.navigate('Transactions')} className="py-3 mt-2 pb-4 flex-row justify-between border-b border-red-700">
                <Text className="text-base font-varela">Transactions</Text>
                <FontAwesomeIcon icon={faAngleRight} size={18}/>
              </TouchableOpacity>

              
              <TouchableOpacity className="py-3 mt-2 pb-4 flex-row justify-between border-b border-red-700">
                <Text className="text-base font-varela">Upgrade Account</Text>
                <FontAwesomeIcon icon={faAngleRight} size={18}/>
              </TouchableOpacity>

              
              <TouchableOpacity className="py-3 mt-2 pb-4 flex-row justify-between border-b border-red-700">
                <Text className="text-base font-varela">Contact Support</Text>
                <FontAwesomeIcon icon={faAngleRight} size={18}/>
              </TouchableOpacity>

              
              
              <TouchableOpacity  onPress={()=>navigation.replace('Auth')} className="py-3 mt-2 pb-4 flex-row justify-between border-b border-red-700">
                <Text className="text-base font-varela">Logout</Text>
                <FontAwesomeIcon icon={faAngleRight} size={18}/>
              </TouchableOpacity>

            </SafeAreaView>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default Dashboard;