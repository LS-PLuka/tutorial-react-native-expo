import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <>
        <View style={styles.header}>
            <View style={styles.logo}></View>
            <Text style={styles.titulo_menu}>Título</Text>
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
