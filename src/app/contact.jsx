import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Contact() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página de Contatos</Text>

            <View style={styles.card}>
                <Text style={styles.name}>Pedro Silva</Text>
                <Text style={styles.info}>pedro@email.com</Text>
                <Text style={styles.info}>(12) 99999-9999</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.name}>Maria Souza</Text>
                <Text style={styles.info}>maria@email.com</Text>
                <Text style={styles.info}>(12) 98888-8888</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.name}>João Santos</Text>
                <Text style={styles.info}>joao@email.com</Text>
                <Text style={styles.info}>(12) 97777-7777</Text>
            </View>

            <Button 
                title="Home"  
                onPress={() => router.replace('/')}
                color="#543DBB"
            />

            <Button 
                title="Sobre Nós"  
                onPress={() => router.push('about')}
                color="#543DBB"
            />

            <Button 
                title="Perfil"  
                onPress={() => router.push('profile')}
                color="#543DBB"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        width: '90%',
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
    info: {
        fontSize: 14,
        color: '#555',
    },
})
