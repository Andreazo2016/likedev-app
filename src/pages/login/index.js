import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../service/api';
import styles from './styles';
import logo from './../../assets/logo.png';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';



export default function Login({ navigation }) {

    const [user, setUser] = useState('');
    useEffect(() => {
        AsyncStorage.getItem('@userId').then(userId => {
            if (userId) {
                navigation.navigate('Main', { id: userId });
            }
        })
    }, []);

    async function handleLogin() {
        const response = await api.post('/dev', { username: user });
        const { _id } = response.data;
        await AsyncStorage.setItem('@userId', _id);
        navigation.navigate('Main', { id: _id });
    }


    return (
        <View style={styles.container}>
            <Image
                source={logo}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                placeholder="Digite seu usuario do Github"
                placeholderTextColor="#999"
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.btn}
            >
                <Text style={styles.btnText}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}