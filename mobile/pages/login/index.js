import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Login() {
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");

    const autenticar = () => {
        let usuario = {
            user: user,
            senha: senha,
        }

        fetch('http://10.87.207.2:3000/login', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(usuario),
        })
            .then(resp => { return resp.json() })
            .then(async data => {
                if (data.length > 0) {
                    await AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                    navigation.navigate('Main');
                } else {
                    ToastAndroid.show('user ou Senha Invalidos', ToastAndroid.SHORT);
                }
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 50, color: "#8300E9" }}>OS</Text>
            </View>
            <View style={styles.mid}>
                <View style={styles.midTop}>
                    <Text style={{ fontSize: 40, padding: 20, color: "#8300E9" }}>ENTRAR</Text>
                    <TextInput value={user} onChangeText={setUser} style={styles.inputs} placeholder="Usuario" />
                    <TextInput value={senha} onChangeText={setSenha} style={styles.inputs} secureTextEntry={true} placeholder="Senha" />
                    <LinearGradient
                        colors={["#482673", "#8F5CD0"]}
                        style={styles.btn}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>ENTRAR</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={styles.midBot}>
                </View>
            </View>
        </View>
    );
};