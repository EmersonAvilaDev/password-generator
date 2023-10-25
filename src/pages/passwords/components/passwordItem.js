import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Ionicons} from '@expo/vector-icons';

export const PasswordItem = ({ data, removePassword}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
    <Pressable onLongPress={removePassword} style={styles.container}>
        <Text style={[styles.text, !showPassword ? styles.visibleText : styles.hiddenText]}
        secureTextEntry={!showPassword}
        >{ data }</Text>

    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Ionicons
            name={showPassword ? 'ios-eye-off' : 'ios-eye'}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0E0E0E",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
      color: "#fff"
    },
    visibleText: {
      opacity: 1,
    },
    hiddenText: {
      opacity: 0,
    }
})

