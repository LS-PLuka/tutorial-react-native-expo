import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{ 
                    title: 'Home',
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: () => <Feather name="home" size={24} color="#543DBB" />
                }}
            />

            <Tabs.Screen 
                name="contact"
                options={{ 
                    title: 'Contato',
                    tabBarShowLabel: false,
                    tabBarIcon: () => <Feather name="phone" size={24} color="#543DBB" />
                }}
            />

            <Tabs.Screen 
                name="about"
                options={{ 
                    title: 'Sobre',
                    tabBarShowLabel: false,
                    tabBarIcon: () => <Feather name="info" size={24} color="#543DBB" />
                }}
            />

            <Tabs.Screen 
                name="profile"
                options={{ 
                    title: 'Perfil',
                    tabBarShowLabel: false,
                    tabBarIcon: () => <Feather name="user" size={24} color="#543DBB" />
                }}
            />

            <Tabs.Screen 
                name="editUser"
                options={{ 
                    title: 'Edit User',
                    tabBarShowLabel: false,
                    tabBarIcon: () => <Feather name="edit" size={24} color="#543DBB" />
                }}
            />
        </Tabs>
    )
}
