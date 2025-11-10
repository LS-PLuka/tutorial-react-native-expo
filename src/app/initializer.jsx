import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuthStore } from '../stores/useAuthStore'

export default function Initializer() {
  const router = useRouter()

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const isLogged = await AsyncStorage.getItem('logado')

        if (isLogged === 'true') {
          router.replace('/')
        } else {
          router.replace('/login')
        }
      } catch (error) {
        console.log("Erro ao verificar login:", error)
        router.replace('/login')
      }
    }

    checkLogin()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Inicializador</Text>
      <Button
        title='Ir para Login'
        onPress={() => router.push('/login')}
      />
      <Button
        title='Ir para Home'
        onPress={() => router.push('/')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
