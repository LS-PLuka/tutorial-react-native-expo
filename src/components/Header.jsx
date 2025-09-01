import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image'
import Feather from '@expo/vector-icons/Feather';

export default function Header({ img }) {
    return (
        <>
        <View style={styles.header}>
            <Image 
              style={styles.logo}
              source={img}
            />
            
            <Feather name="menu" size={30} color="white" />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#543dbbff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  logo: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  titulo_menu: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
