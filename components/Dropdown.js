import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ items, selectedItem, onSelect, placeholder, style }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View className={`w-full mb-6 ${style && (style)}`}>
            <TouchableOpacity
                className="flex-row items-center justify-between border border-gray-300 rounded-lg p-5"
                onPress={() => setIsOpen(!isOpen)}
            >
                <View className="flex-row items-center space-x-2">
                    {selectedItem ? (
                        <>
                            {selectedItem?.image && (<Image source={selectedItem.image} className="w-6 h-6 rounded-full" resizeMode="cover" />)}
                            <Text className="text-black text-base font-varela-regular">{selectedItem.title}</Text>
                        </>
                    ) : (
                        <Text className="text-black text-base font-varela-regular">{placeholder}</Text>
                    )}
                </View>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size={16} color="#000000" />
            </TouchableOpacity>
            {isOpen && (
                <View className="bg-white border border-gray-300 rounded-lg mt-1 max-h-40">
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <>
                                <TouchableOpacity
                                    className="flex-row items-center p-3 space-x-2"
                                    onPress={() => {
                                        onSelect(item);
                                        setIsOpen(false);
                                    }}
                                >
                                    {item?.image && (<Image source={item.image} className="w-6 h-6 rounded-full" resizeMode="cover" />)}
                                    <Text className="text-gray-700 black' text-xl my-2 font-varela">{item.title}</Text>
                                </TouchableOpacity>

                                <View className="border-t border-gray-500"></View>
                            </>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default Dropdown;