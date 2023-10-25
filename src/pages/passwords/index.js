import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passwordItem';
import { Ionicons } from '@expo/vector-icons';
export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const password = await getItem("@pass")
      setListPasswords(password)
    }

    loadPasswords();
  }, [focused]);

  const handleDeletePassword = async (item) => {
    const password = await removeItem("@pass", item)

    setListPasswords(password)
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>Minhas Senhas</Text>
        </View>

        <View style={styles.content}>
          <FlatList
          style={{ flex: 1, paddingTop: 14}}
          data={listPasswords}
          keyExtrator={ (item) => String(item)}
          renderItem={ ({ item }) => <PasswordItem  data={item} removePassword={() => handleDeletePassword(item)} /> }
          />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: "#392de9",
      paddingTop: 58,
      paddingBottom:14,
      paddingRight: 14,
      paddingLeft: 14
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#FFF"
    },
    content:{
      flex: 1,
      paddingLeft: 14,
      paddingRight: 14
    }
})
