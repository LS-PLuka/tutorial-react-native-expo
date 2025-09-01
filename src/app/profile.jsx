import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Perfil</Text>

            <View style={styles.card}>
                <Text style={styles.name}>Pedro Silva</Text>
                <Text style={styles.info}>pedro@email.com</Text>
                <Text style={styles.info}>(12) 99999-9999</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Sobre mim</Text>
                <Text style={styles.info}>
                    Apaixonado por tecnologia e desenvolvimento de apps.
                </Text>
            </View>

            <Button 
                title="Home" 
                onPress={() => router.replace('/')} 
                color="#543DBB"
            />

            <Button 
                title="Contatos"  
                onPress={() => router.push('contact')}
                color="#543DBB"
            />

            <Button 
                title="Sobre Nós"  
                onPress={() => router.push('about')}
                color="#543DBB"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
})
