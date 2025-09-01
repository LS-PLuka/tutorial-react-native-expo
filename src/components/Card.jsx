import {View, Text, StyleSheet} from 'react-native';
import { Image } from 'expo-image';

export default function Card({ title, desc, img }) {
    return (
        <>
        <View style={styles.card}>
            <Image 
              style={styles.logo}
              source={img}
            />
                
            <View style={styles.name}>
                <Text style={styles.titulo_card}>{title}</Text>
                <Text>{desc}</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  card: {
    width: '90%',
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  titulo_card: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
})
