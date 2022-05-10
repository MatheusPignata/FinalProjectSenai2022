import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Login({ navigation }) {
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");

    const autenticar = () => {
        const Rsenha = 123;
        const Ruser = "user";
        if (user == Ruser && senha == Rsenha) {
            navigation.navigate('Menu')
        }else{

        }
        // let usuario = {
        //     user: user,
        //     senha: senha,
        // }
        //     fetch('http://10.87.207.2:3000/login', {
        //         "method": "POST",
        //         "headers": {
        //             "Content-Type": "application/json"
        //         },
        //         "body": JSON.stringify(usuario),
        //     })
        //         .then(resp => { return resp.json() })
        //         .then(async data => {
        //             if (data.length > 0) {
        //                 navigation.navigate('Main');
        //             } else {
        //                 ToastAndroid.show('usuario ou Senha Invalidos', ToastAndroid.SHORT);
        //             }
        //         })
    }

    return (
        <KeyboardAvoidingView behavior="height">
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 50, color: "#8300E9" }}>OS</Text>
            </View>
            <View style={styles.mid}>
                <View style={styles.midTop}>
                    <Text style={{ fontSize: 40, marginTop: 50, color: "#8300E9" }}>ENTRAR</Text>
                    <TextInput value={user} onChangeText={setUser} style={styles.inputs} placeholder="Usuario" />
                    <TextInput value={senha} onChangeText={setSenha} style={styles.inputs} secureTextEntry={true} placeholder="Senha" />
                    <TouchableOpacity onPress={() => { autenticar() }} style={styles.btn} >
                        <LinearGradient
                            style={styles.gradient}
                            colors={["#482673", "#8F5CD0"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}>
                            <Text style={styles.text}>ENTRAR</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
};