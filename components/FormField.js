import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const FormField  = ({ title, value, placeholder, handleChangeText, otherStyles,multiline, lines}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles || ''}`}>
      <Text className="text-base text-gray-500 font-varela">{title}</Text>

      <View className={`w-full ${!multiline ? `h-16` : `h-30`} px-4 rounded-xl border border-gray-300 focus:border-red-700 flex flex-row justify-between items-center `}>
        <TextInput
          className="font-varela text-base"
          value={value}
          placeholder={placeholder}
         
          placeholderTextColor="#BDCDCD"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} size={18} color="#000000"/> :<FontAwesomeIcon icon={faEye} size={18} color="#000000"/>}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;