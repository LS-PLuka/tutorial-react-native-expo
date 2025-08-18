import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
    return (
        <>
        <View style={styles.footer}>
            <Text>Pedro Luka</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 100,
    backgroundColor: '#543dbbff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
