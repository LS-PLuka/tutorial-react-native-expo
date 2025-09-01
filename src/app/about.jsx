import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function About() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre Nós</Text>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Nossa Missão</Text>
                <Text style={styles.info}>
                    Fornecer soluções tecnológicas de qualidade para facilitar a vida das pessoas.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Nossa Visão</Text>
                <Text style={styles.info}>
                    Ser referência em inovação e atendimento no mercado de tecnologia.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Nossa Equipe</Text>
                <Text style={styles.info}>
                    Pedro, Maria, João e toda a equipe dedicada a construir produtos incríveis.
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
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
})
